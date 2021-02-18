import { observable, makeObservable } from 'mobx';

class OrderStore {
    constructor() {
        makeObservable(this, {

        })
    }
}

export default new OrderStore();