import { BaseService, ApiType } from '../services/fetch';

export const PageRepository = {
    getListPages: (channel_id: number) => {
        let path = `/channels/${channel_id}/pages/list`;
        return BaseService.api_call_get(ApiType.social_api, path, '', true);
    }
}