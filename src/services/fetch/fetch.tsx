import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthStorageKey, Configs } from '../../configs';

export enum ApiType {
    com_api = "com_api",
    loy_api = 'loy_api',
    social_api = 'social_api',
    social_avatar_api = 'social_avatar_api',
    funnel_api = 'funnel_api'
}

export const BaseService = {
    async api_call(method: string, apiId: string, path: string, body: any, errorSystem: React.ReactNode, showWait: boolean) {
        let url = _getUrlApi(apiId) + path;
        
        try {
            const access_token = await _getAccessToken();
            let rp = await fetch(url, {
                method: method,
                body: body ? JSON.stringify(body) : null,
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${access_token}`,
                }
            });
            if (rp.status == 401 && apiId === ApiType.social_api) {
                // LayoutStore.showPopupAuthorizeException(true);
            } else if (rp.status == 403) {
                // if (apiId === ApiType.com_api) {
                //     HrvComponents.Notification.destroy();
                //     HrvComponents.Notification.error({
                //         message: 'Bạn chưa có quyền thực hiện tác vụ này. Vui lòng liên hệ quản trị viên.'
                //     });
                // }
            } else if (rp.status == 200 || rp.status == 201 || rp.status == 304) {
                return await rp.json();
            } else {
                // Sentry.captureException(new Error(`error_call_api - ${rp.status} - ${url}`));
                // if (errorSystem && errorSystem !== '')
                //     HrvComponents.Notification.error({
                //         message: errorSystem
                //     });
            }
        }
        catch (e) {
            // HrvComponents.Notification.error({
            //     message: LayoutStore.translate(configLanguage.error_occurred_during_process)
            // });
            // Sentry.captureException(e);
            throw e;
        }
        finally {
            // if (showWait) HrvComponents.ShowWait.onEnd()
        }
    },
    api_call_get(apiId: string, path: string, errorSystem: React.ReactNode = null, showWait: boolean = false) {
        return this.api_call('GET', apiId, path, null, errorSystem, showWait);
    },
    api_call_post(apiId: string, path: string, body: any, errorSystem: React.ReactNode = null, showWait: boolean = false) {
        return this.api_call('POST', apiId, path, body, errorSystem, showWait);
    },
    api_call_put(apiId: string, path: string, body: any, errorSystem: React.ReactNode = null, showWait: boolean = false) {
        return this.api_call('PUT', apiId, path, body, errorSystem, showWait);
    },
    api_call_delete(apiId: string, path: string, errorSystem: React.ReactNode = null, showWait: boolean = false) {
        return this.api_call('DELETE', apiId, path, null, errorSystem, showWait);
    }
}

const _getAccessToken = async () => {
    const userToken = await AsyncStorage.getItem(AuthStorageKey);
    const jsonUserToken = JSON.parse(userToken);
    return jsonUserToken?.auth?.access_token
        ? jsonUserToken.auth.access_token
        : '';
};

const _getUrlApi = (type: string) => {
    let apiUrl = "";
    switch (type) {
        case ApiType.social_api:
            apiUrl = Configs.apiSocial;
            break;
        case ApiType.com_api:
            apiUrl = Configs.apiEcom;
            break;
        case ApiType.loy_api:
            apiUrl = Configs.apiLoyalty;
            break;
        default:
            break;
    }

    return apiUrl;
}