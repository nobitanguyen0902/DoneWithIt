import * as React from 'react';
import { observable, makeObservable } from 'mobx';
import { Translation } from 'react-i18next';
import i18next from '../services/languages';
import { PageRepository } from '../repositories/page';

class PageStore {
    locale = "vi";

    constructor() {
        makeObservable(this, {

        })
    }

    onSetLanguage = () => {
        if (this.locale == "vi")
            this.locale = "en";
        else
            this.locale = "vi";

        i18next.changeLanguage(this.locale);
    }

    translate = (code: string, content?: string) => {
        if (content)
            return <Translation>{(t, { i18n }) => <React.Fragment>{t(code)} {content}</React.Fragment>}</Translation>

        return <Translation>{(t, { i18n }) => t(code)}</Translation>
    }

    onGetListPage = async () => {
        var list = await PageRepository.getListPages(1);
        console.log(list);
    }
}

export default new PageStore();