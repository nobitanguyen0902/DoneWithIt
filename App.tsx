import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Main } from './src';

const App = React.memo(() => {
    const [isLoading, onSetLoading] = React.useState(false);
    React.useEffect(() => {
        checkAuthorize();
    }, [])

    const checkAuthorize = () => {

    }

    return <SafeAreaProvider>
        <NavigationContainer>
            <Main />
        </NavigationContainer>
    </SafeAreaProvider>
})

export default App;