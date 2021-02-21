import { BaseService, ApiType } from '../services/fetch';
import { FacebookUserModel } from '../models/page';

export const PageRepository = {
    setAuthorizeInfoFacebookUser: (data: FacebookUserModel) => {
        let path = `/users`;
        return BaseService.api_call_post(ApiType.social_api, path, data);
    },
    getFacebookPages: (channel_id: number) => {
        let path = `/fb/channels/${channel_id}/pages/facebook_pages`;
        return BaseService.api_call_get(ApiType.social_api, path);
    },
    getListPages: (channel_id: number) => {
        let path = `/channels/${channel_id}/pages/list`;
        return BaseService.api_call_get(ApiType.social_api, path, '', true);
    }
}