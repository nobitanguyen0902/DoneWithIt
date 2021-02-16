import * as React from 'react';
import { AuthNavigator } from './auth.navigator';
import { Main } from '..';

interface IAppContainerProps {
    isAuthorize: boolean
}

export const AppContainer = (props: IAppContainerProps) => {
    if (props.isAuthorize)
        return <Main />

    return <AuthNavigator />;
};