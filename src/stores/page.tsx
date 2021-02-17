import { observable, makeObservable } from 'mobx';

import { PageRepository } from '../repositories/page';

class PageStore {
    constructor() {
        makeObservable(this, {

        })
    }

    onGetListPage = async () => {
        console.log('Calling Api 2');
        var list = await PageRepository.getListPages(1);
        console.log(list);
        console.log('Called')
    }
}

export default new PageStore();