import { BaseService, ApiType, _getApiUrl } from '../services/fetch';
import { IPage } from '../models/page';
import { __getTicksByUnixTimestampMili } from '../services/helper/time';

export const InboxRepository = {
    getListConversations: (page: IPage, filterPath: string, sinceTicks: number, limit: number = 30) => {
        let { social_id } = page;
        if (sinceTicks > 0)
            sinceTicks = __getTicksByUnixTimestampMili(sinceTicks);
        let path = _getApiUrl(`/pages/${social_id}/conversations`, {
            limit: limit,
            since_time: sinceTicks,
        })
        if (filterPath)
            path += `&${filterPath}`;
            
        return BaseService.api_call_get(ApiType.social_api, path, '');
    }
}