
import Constants from 'expo-constants';

let deviceId = Constants.deviceId;
let deviceName = Constants.deviceName;

let version = `${Constants.manifest.version}.${Constants.manifest.extra.versionCode}-${Constants.manifest.extra.branch}`;

export const Configs = {
    timezone: "Asia/Ho_Chi_Minh",
    deviceid: deviceId,
    device_name: deviceName,
    version: version,
    authority: Constants.manifest.extra.authority,
    apiHost: Constants.manifest.extra.apiHost,
    clientid: Constants.manifest.extra.clientid,
    secret: Constants.manifest.extra.client_secret,
    scopes: [
        'userinfo',
        'org',
        'email',
        'phone',
        'address',
        'profile',
        'openid',
        'offline_access',
        'com_api',
        'billing_api',
        'hac_api.read_users'
    ]
}