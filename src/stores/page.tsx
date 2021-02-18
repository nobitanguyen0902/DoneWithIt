import { observable, makeObservable } from 'mobx';

import { PageRepository } from '../repositories/page';

class PageStore {
    constructor() {
        makeObservable(this, {

        })
    }

    onGetListPage = async () => {
        var list = await PageRepository.getListPages(1);
    }
}

export default new PageStore();