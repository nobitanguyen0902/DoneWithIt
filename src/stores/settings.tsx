import { observable, makeObservable } from 'mobx';

class SettingsStore {
    constructor() {
        makeObservable(this, {

        })
    }
}

export default new SettingsStore();