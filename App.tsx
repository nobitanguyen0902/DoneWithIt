import * as React from 'react';
import * as AppAuth from 'expo-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { AppContainer } from './src/navigators';
import { DefaultTheme, configureFonts, Provider as PaperProvider } from 'react-native-paper';
import { initFonts, fontConfig } from './src/theme/fonts';
import { Configs } from './src/configs';

interface IAuthContextProps {
    onSetAuthorize: Function,
    onSignInAsync: Function
}

const authConfig = {
    issuer: `https://accounts.${Configs.authority}`,
    clientId: Configs.clientid,
    clientSecret: Configs.secret,
    scopes: Configs.scopes,
};

export const AuthContext = React.createContext({} as IAuthContextProps);

const App = React.memo(() => {
    const [isAuthorize, onSetAuthorize] = React.useState(false);

    React.useEffect(() => {
        initFonts();
    }, [])

    const onSignInAsync = async () => {
        try {
            let _config = {
                ...authConfig,
                additionalParameters: false
                    ? { register: String(false) }
                    : { prompt: 'login' as any },
            };

            const authState = await AppAuth.authAsync(_config);

            const userInfo = await getUserInfo(authState.accessToken);

            if (userInfo && userInfo.email && userInfo.sub) {
                const infoLogin = {
                    deny: false,
                    auth: { ...authState, access_token: authState.accessToken },
                    userInfo: { ...userInfo },
                };

                await _setAuthInfo(infoLogin);
                return infoLogin;
            } else {
                return null;
            }
        } catch (e) {
            if (e.message !== 'ERR_APP_AUTH: User cancelled.') {
                // Sentry
            }
            return null;
        }
    };

    const getUserInfo = async (accessToken: string) => {
        const { authority } = Configs;
        const response = await fetch(
            `https://accounts.${authority}/connect/userinfo`,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );

        if (response.status === 401 || response.status === 403) {
            return null;
        } else {
            return await response.json();
        }
    };

    var authContext = {
        onSetAuthorize: onSetAuthorize,
        onSignInAsync: onSignInAsync
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

export const AuthInfo = '@haravan-social:authinfo';

async function _setAuthInfo(authInfo) {
    await AsyncStorage.setItem(AuthInfo, JSON.stringify(authInfo));
}

async function _clearAuthInfo() {
    await AsyncStorage.removeItem(AuthInfo);
}