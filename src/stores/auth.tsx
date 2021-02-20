import { observable, makeObservable } from 'mobx';
import * as AppAuth from 'expo-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Configs, AuthConfig, AuthStorageKey } from '../configs';

class AuthStore {
    isAuthorize = false;
    infoAuthorize = null;

    constructor() {
        makeObservable(this, {
            isAuthorize: observable,
            infoAuthorize: observable
        })
    }

    loadAuthInfo = async () => {
        let infoAuthorize = this.infoAuthorize;
        try {
            const authInfo = await this._getAuthInfo(infoAuthorize);
            if (authInfo) {
                this.isAuthorize = true;
                this.infoAuthorize = authInfo;
            }
        } catch {
            // Restoring token failed
        }
    };

    onSignIn = async () => {
        try {
            let _config = {
                ...AuthConfig,
                additionalParameters: false
                    ? { register: String(false) }
                    : { prompt: 'login' as any },
            };

            const authState = await AppAuth.authAsync(_config);

            const userInfo = await this._getUserInfo(authState.accessToken);
            if (userInfo && userInfo.email && userInfo.sub) {
                const infoAuthorize = {
                    deny: false,
                    auth: { ...authState, access_token: authState.accessToken },
                    userInfo: { ...userInfo },
                };

                this._setAuthInfo(infoAuthorize);
                this.isAuthorize = true;
                return infoAuthorize;
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

    onSignOut = async () => {
        try {
            let infoAuthorize = this.infoAuthorize;
            await AppAuth.revokeAsync(AuthConfig, {
                token: infoAuthorize && infoAuthorize.auth ? infoAuthorize.auth.accessToken : "",
                isClientIdProvided: true
            })

            await this._clearAuthInfo();
        } catch (e) {
            console.log('signout:', e);
        }
    };

    _setAuthInfo = async (infoAuthorize) => {
        this.infoAuthorize = infoAuthorize;
        await AsyncStorage.setItem(AuthStorageKey, JSON.stringify(infoAuthorize));
    }

    _clearAuthInfo = async () => {
        this.isAuthorize = false;
        this.infoAuthorize = null;
        await AsyncStorage.removeItem(AuthStorageKey);
    }

    _getUserInfo = async (accessToken: string) => {
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

    _getAuthInfo = async (infoAuthorize) => {
        if (infoAuthorize === null) {
            let result = await AsyncStorage.getItem(AuthStorageKey);
            const authInfoTemp = JSON.parse(result);
            if (authInfoTemp) {
                if (this._checkTokenExpired(authInfoTemp.auth)) {
                    return this._refreshAuthAsync(authInfoTemp.auth);
                } else {
                    this.infoAuthorize = authInfoTemp;
                    return authInfoTemp;
                }
            }
            return null;
        }
        return infoAuthorize;
    }

    _checkTokenExpired = ({ accessTokenExpirationDate }) => {
        return new Date(accessTokenExpirationDate) < new Date();
    }

    _refreshAuthAsync = async ({ refreshToken }) => {
        try {
            const authState = await AppAuth.refreshAsync(AuthConfig, refreshToken);
            const userInfo = await this._getUserInfo(authState.accessToken);
            if (userInfo && userInfo.email && userInfo.sub) {
                const infoAuthorize = {
                    auth: { ...authState, access_token: authState.accessToken },
                    userInfo: { ...userInfo },
                };

                await this._setAuthInfo(infoAuthorize);
                return infoAuthorize;
            }

            return null;
        } catch (e) {
            return null;
        }
    }
}

export default new AuthStore();