export interface IPage {
    id?: string,
    channel_id: number,  //if( channel = 1) page_id call api = social_id, if(channel=2) page_id call API = instagram_account.id
    social_id: string,
    is_actived: boolean,
    is_change: boolean,
    is_connecting: boolean,
    is_stopping: boolean,
    is_subscribe: boolean,
    is_valid: boolean,
    last_used: string,
    name: string,
    is_token_expired: boolean,
    is_last_used: boolean,
    instagram_account: IInstagramAccount,
    // Add More
    lastTimeMessage?: number,
    hasNewConversation?: boolean,
}

export interface IInstagramAccount {
    id: string,
    name: string,
    username: string
}