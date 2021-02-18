import * as React from 'react';
import { observer } from 'mobx-react';
import { AuthNavigator } from './auth.navigator';
import { Main } from '../main';
import { AuthStore } from '../stores';

export const AppContainer = observer(() => {
    if (AuthStore.IsAuthorize)
        return <Main />

    return <AuthNavigator />;
})