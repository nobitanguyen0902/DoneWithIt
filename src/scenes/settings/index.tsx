import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import * as Notifications from 'expo-notifications';
import { AppState, View, Text } from "react-native";
import { Button, Switch } from 'react-native-paper';
import * as Permissions from 'expo-permissions';
import { AuthStore } from "../../stores";

const Stack = createStackNavigator();

export const Settings = React.memo(() => {
    return <Stack.Navigator>
        <Stack.Screen name="Settings" component={SettingsContent} />
    </Stack.Navigator>
})

const SettingsContent = React.memo(() => {
    const [appState, onSetAppState] = React.useState(AppState.currentState);
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    React.useEffect(() => {
        // var isValid = AuthStore.onCheckPermission();
        // console.log(isValid)
        // if (!isValid)
        //     setIsSwitchOn(isValid)
    }, [])

    React.useEffect(() => {
        _addEventListenerAppState();
        return () => {
            _removeEventListenerAppState();
        }
    }, [appState])

    const onToggleSwitch = (isSwitch) => {
        setIsSwitchOn(!isSwitchOn);
        if (isSwitch)
            AuthStore.onSetNoitication()
        else
            AuthStore.onRemovetNoitication()
    }

    const schedulePushNotification = async () => {
        if (!isSwitchOn)
            return;

        await Notifications.scheduleNotificationAsync({
            content: {
                title: "You've got mail! 📬",
                body: 'Here is the notification body',
                data: { data: 'goes here' },
            },
            trigger: { seconds: 2 },
        });
    }

    const _handleAppStateChange = async (nextAppState) => {
        console.log('_handleAppStateChange', appState, nextAppState)
        if (appState.match(/inactive|background/) && nextAppState === 'active') {
            const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
            if (status !== 'granted') {
                setIsSwitchOn(false);
            }
        }

        onSetAppState(nextAppState);
    };

    const _addEventListenerAppState = () => {
        AppState.addEventListener('change', nextAppState => _handleAppStateChange(nextAppState));
    }

    const _removeEventListenerAppState = () => {
        AppState.removeEventListener('change', nextAppState => _handleAppStateChange(nextAppState));
    }

    return <View>
        <View>
            <Text>Settings Detail</Text>
        </View>
        <View>
            <Text>Action Notification</Text>
            <View>
                <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
            </View>
            <Button onPress={schedulePushNotification}>Press to schedule a notification</Button>
        </View>
        <View>
            <Text>Action Logout</Text>
            <Button onPress={AuthStore.onSignOut}>Logout</Button>
        </View>
    </View>
})