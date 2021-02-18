import * as React from "react";
import { Text } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const Settings = React.memo(() => {
    return <Stack.Navigator>
        <Stack.Screen name="Settings" component={SettingsContent} />
    </Stack.Navigator>
})

const SettingsContent = React.memo(() => {
    return <Text>Settings Detail</Text>
})