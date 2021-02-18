import { observable, makeObservable } from 'mobx';

class MessageStore {
    constructor() {
        makeObservable(this, {

        })
    }
}

export default new MessageStore();