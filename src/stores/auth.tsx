import { observable, makeObservable } from 'mobx';
import * as AppAuth from 'expo-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Configs, AuthConfig, AuthStorageKey } from '../configs';

class AuthStore {
    IsAuthorize = false;
    InfoLogin = null;

    constructor() {
        makeObservable(this, {
            IsAuthorize: observable,
            InfoLogin: observable
        })
    }

    onSignIn = async () => {
        try {
            let _config = {
                ...AuthConfig,
                additionalParameters: false
                    ? { register: String(false) }
                    : { prompt: 'login' as any },
            };

            const authState = await AppAuth.authAsync(_config);

            const userInfo = await this.getUserInfo(authState.accessToken);
            console.log(userInfo)
            if (userInfo && userInfo.email && userInfo.sub) {
                const infoLogin = {
                    deny: false,
                    auth: { ...authState, access_token: authState.accessToken },
                    userInfo: { ...userInfo },
                };

                this._setAuthInfo(infoLogin);
                this.IsAuthorize = true;
                return infoLogin;
            } else {
                return null;
            }
        } catch (e) {
            if (e.message !== 'ERR_APP_AUTH: User cancelled.') {
                // Sentry
            }
            return null;
        }
    }

    getUserInfo = async (accessToken: string) => {
        const { authority } = Configs;
        const response = await fetch(
            `https://accounts.${authority}/connect/userinfo`,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );

        if (response.status === 401 || response.status === 403) {
            return null;
        } else {
            return await response.json();
        }
    };

    _setAuthInfo(authInfo) {
        this.InfoLogin = authInfo;
        AsyncStorage.setItem(AuthStorageKey, JSON.stringify(authInfo));
    }

    _clearAuthInfo() {
        this.InfoLogin = null;
        AsyncStorage.removeItem(AuthStorageKey);
    }
}

export default new AuthStore();