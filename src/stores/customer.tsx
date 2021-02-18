import { observable, makeObservable } from 'mobx';

class CustomerStore {
    constructor() {
        makeObservable(this, {

        })
    }
}

export default new CustomerStore();