import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Main } from './src';

const App = React.memo(() => {
    const [isLoading, onSetLoading] = React.useState(false);
    React.useEffect(() => {
        checkAuthorize();
    }, [])

    const checkAuthorize = () => {

    }

    return <NavigationContainer>
        <Main />
    </NavigationContainer>
})

export default App;