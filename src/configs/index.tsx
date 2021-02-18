
import Constants from 'expo-constants';

let deviceId = Constants.deviceId;
let deviceName = Constants.deviceName;
let version = `${Constants.manifest.version}.${Constants.manifest.extra.versionCode}-${Constants.manifest.extra.branch}`;

const AuthStorageKey = '@harasocial:auth';

const Configs = {
    timezone: "Asia/Ho_Chi_Minh",
    deviceid: deviceId,
    device_name: deviceName,
    version: version,
    authority: Constants.manifest.extra.authority,
    apiHost: Constants.manifest.extra.apiHost,
    clientid: Constants.manifest.extra.clientid,
    secret: Constants.manifest.extra.client_secret,
    apiSocial: `https://${Constants.manifest.extra.apiSocial}/api`,
    apiEcom: `https://${Constants.manifest.extra.apiEcom}/api`,
    apiLoyalty: `https://${Constants.manifest.extra.apiLoyalty}/api`,
    scopes: [
        'userinfo',
        'org',
        'email',
        'phone',
        'address',
        'profile',
        'openid',
        'offline_access',
        'social_api',
        'com_api',
        'loy_api',
        'billing_api',
        'hac_api.read_users'
    ]
}

const AuthConfig = {
    issuer: `https://accounts.${Configs.authority}`,
    clientId: Configs.clientid,
    clientSecret: Configs.secret,
    scopes: Configs.scopes,
};

export { Configs, AuthStorageKey, AuthConfig }