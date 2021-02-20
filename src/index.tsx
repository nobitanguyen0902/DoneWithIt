import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { AppContainer } from './navigators';
import { DefaultTheme, configureFonts, Provider as PaperProvider } from 'react-native-paper';
import { initFonts, fontConfig } from './theme/fonts';
// import { I18nextProvider } from 'react-i18next';
// import i18next from './services/languages';
import { AuthStore } from './stores';

interface IAuthContextProps {
    onSetAuthorize: Function
}

export const AuthContext = React.createContext({} as IAuthContextProps);

const App = React.memo(() => {
    React.useEffect(() => {
        initFonts();
        AuthStore.loadAuthInfo();
    }, [])

    const theme = {
        ...DefaultTheme,
        fonts: configureFonts(fontConfig),
        colors: {
            ...DefaultTheme.colors,
            primary: '#2962ff'
        }
    }

    return <PaperProvider theme={theme}>
        {/* <I18nextProvider i18n={i18next}> */}
            <SafeAreaProvider>
                <NavigationContainer>
                    <AppContainer />
                </NavigationContainer>
            </SafeAreaProvider>
        {/* </I18nextProvider> */}
    </PaperProvider>
})

export default App;