import Constants from 'expo-constants';

const authority = Constants.manifest.extra.authority;
const apiEcom = `https://${Constants.manifest.extra.apiEcom}/api/`;
const apiLoyalty = `https://${Constants.manifest.extra.apiLoyalty}/api/v1`;
const apiHost = Constants.manifest.extra.authority;
const clientid = Constants.manifest.extra.clientid;
const client_secret = Constants.manifest.extra.client_secret;
const sentryDSN = Constants.manifest.extra.sentryDSN;

export const Configs = {
    authority,
    apiEcom,
    apiLoyalty,
    apiHost,
    clientid,
    secret: client_secret,
    sentryDSN
};
