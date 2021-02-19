import { observable, makeObservable } from 'mobx';

class InboxStore {
    constructor() {
        makeObservable(this, {

        })
    }

    onGetListConversation = () => {

    }
}

export default new InboxStore();