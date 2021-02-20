import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from "react-native";
import { Button } from 'react-native-paper';
import { AuthStore } from "../../stores";

const Stack = createStackNavigator();

export const Settings = React.memo(() => {
    return <Stack.Navigator>
        <Stack.Screen name="Settings" component={SettingsContent} />
    </Stack.Navigator>
})

const SettingsContent = React.memo(() => {
    return <View>
        <Text>Settings Detail</Text>
        <Button onPress={AuthStore.onSignOut}>Logout</Button>
    </View>


})