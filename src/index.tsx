import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { AppContainer } from './navigators';
import { DefaultTheme, configureFonts, Provider as PaperProvider } from 'react-native-paper';
import { initFonts, fontConfig } from './theme/fonts';

interface IAuthContextProps {
    onSetAuthorize: Function
}

export const AuthContext = React.createContext({} as IAuthContextProps);

const App = React.memo(() => {
    React.useEffect(() => {
        initFonts();
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
        <SafeAreaProvider>
            <NavigationContainer>
                <AppContainer />
            </NavigationContainer>
        </SafeAreaProvider>
    </PaperProvider>
})

export default App;