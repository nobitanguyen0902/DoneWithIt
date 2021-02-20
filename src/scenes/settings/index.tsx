import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import * as Notifications from 'expo-notifications';
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
    const schedulePushNotification = async () => {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "You've got mail! 📬",
                body: 'Here is the notification body',
                data: { data: 'goes here' },
            },
            trigger: { seconds: 2 },
        });
    }

    return <View>
        <Text>Settings Detail</Text>
        <Text>Action Notification</Text>
        <Button onPress={AuthStore.onSetNoitication}>Notification</Button>
        <Button onPress={schedulePushNotification}>Press to schedule a notification</Button>
        <Text>Action Logout</Text>
        <Button onPress={AuthStore.onSignOut}>Logout</Button>
    </View>
})