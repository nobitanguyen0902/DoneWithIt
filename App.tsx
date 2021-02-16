import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { AppContainer } from './src/navigators';
import { DefaultTheme, configureFonts, Provider as PaperProvider } from 'react-native-paper';
import { initFonts, fontConfig } from './src/theme/fonts';

interface IAuthContextProps {
    onSetAuthorize: Function
}

export const AuthContext = React.createContext({} as IAuthContextProps);

const App = React.memo(() => {
    const [isAuthorize, onSetAuthorize] = React.useState(false);

    React.useEffect(() => {
        initFonts();
    }, [])

    var authContext = {
        onSetAuthorize: onSetAuthorize
    }

    const theme = {
        ...DefaultTheme,
        fonts: configureFonts(fontConfig),
        colors: {
            ...DefaultTheme.colors,
            primary: '#2962ff'
        }
    }

    return <PaperProvider theme={theme}>
        <AuthContext.Provider value={authContext}>
            <SafeAreaProvider>
                <NavigationContainer>
                    <AppContainer isAuthorize={isAuthorize} />
                </NavigationContainer>
            </SafeAreaProvider>
        </AuthContext.Provider>
    </PaperProvider>
})

export default App;