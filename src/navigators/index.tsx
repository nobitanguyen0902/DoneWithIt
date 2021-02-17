import * as React from 'react';
import { observer } from 'mobx-react';
import { AuthNavigator } from './auth.navigator';
import { Main } from '../main';
import { AuthStore } from '../stores';

interface IAppContainerProps {

}

export const AppContainer = observer((props: IAppContainerProps) => {
    if (AuthStore.IsAuthorize)
        return <Main />

    return <AuthNavigator />;
})