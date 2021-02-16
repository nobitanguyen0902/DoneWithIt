import * as React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { AppRoute } from './app.routes';
import { SignIn } from '../scenes/auth';

const Stack = createStackNavigator();

export const AuthNavigator = () => (
    <Stack.Navigator initialRouteName={AppRoute.SIGN_IN} headerMode='none'>
        <Stack.Screen
            options={{
                header: undefined,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
            name={AppRoute.SIGN_IN}
            component={SignIn}
        />
    </Stack.Navigator>
);