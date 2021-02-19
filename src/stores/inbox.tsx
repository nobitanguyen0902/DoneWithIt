import { observable, makeObservable } from 'mobx';
import { InboxRepository } from '../repositories/inbox';
import { configure } from "mobx"

configure({
    enforceActions: "never",
})

class InboxStore {
    listConversations = [] as any;

    constructor() {
        this.listConversations = [];
        
        makeObservable(this, {
            listConversations: observable
        })
    }

    onGetListConversation = async () => {
        var page = {
            channel_id: 1,
            social_id: "500725830264749"
        } as any;

        var rsp = await InboxRepository.getListConversations(page, null, 0);
        this.listConversations = rsp.data.listConversation;
        console.log(this.listConversations)
    }
}

export default new InboxStore();