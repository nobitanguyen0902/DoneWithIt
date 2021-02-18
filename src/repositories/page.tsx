import { BaseService, ApiType } from '../services/Fetch/fetch';

export const PageRepository = {
    getListPages: (channel_id) => {
        let path = `/channels/${channel_id}/pages/list`;
        return BaseService.api_call_get(ApiType.social_api, path, '', true);
    },
    getFiles: () => {
        let path = `/settings/files?type=image&page=1&limit=10`;
        return BaseService.api_call_get(ApiType.com_api, path, '', true);
    },
    getInfoLoyalty: () => {
        let path = `/v1/organizations/info`;
        return BaseService.api_call_get(ApiType.loy_api, path, '', true);
    }
}