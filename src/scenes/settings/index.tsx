import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import * as Notifications from 'expo-notifications';
import { AppState, View, Text, Alert } from "react-native";
import { Button, Switch } from 'react-native-paper';
import * as Permissions from 'expo-permissions';
import * as Facebook from 'expo-facebook';
import { FacebookUserModel } from '../../models/page';
import { AuthStore, PageStore } from "../../stores";
import { Configs } from "../../configs";

const Stack = createStackNavigator();

export const Settings = React.memo(() => {
    return <Stack.Navigator>
        <Stack.Screen name="Settings" component={SettingsContent} />
    </Stack.Navigator>
})

const SettingsContent = React.memo(() => {
    const [appState, onSetAppState] = React.useState(AppState.currentState);
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const [token, onSetToken] = React.useState("");

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

    const onLoginFb = async () => {
        try {
            await Facebook.initializeAsync({
                appId: Configs.facebookAppId
            });

            var listPermissions = ['email', 'manage_pages', 'publish_pages', 'read_page_mailboxes', 'pages_messaging', 'pages_messaging_subscriptions', 'pages_messaging_phone_number', 'ads_management', 'business_management', 'instagram_basic', 'instagram_manage_comments', 'instagram_manage_insights', 'instagram_manage_messages']
            const result = await Facebook.logInWithReadPermissionsAsync({
                permissions: listPermissions
            });

            if (result && result.type === 'success') {
                // Get the user's name using Facebook's Graph API
                var response = await fetch(`https://graph.facebook.com/me?fields=id,name,email&access_token=${result.token}`);
                var resultjson = await response.json();
                Alert.alert('Logged in!', `Hi ${resultjson.name}!,${resultjson.email}!,${resultjson.id}!,${result.token}!`);
                onSetToken(result.token)
                // var postData = {
                //     channel: 1,
                //     name: "",
                //     email: "",
                //     phone: "",
                //     ex_social_id: "",
                //     token: ""
                // } as FacebookUserModel;
                // await PageStore.onSetAuthorizeFacebookUser(postData);
            } else {
                // type === 'cancel'
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    }

    const _handleAppStateChange = async (nextAppState) => {
        if (appState.match(/inactive|background/) && nextAppState === 'active') {
            const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
            if (status !== 'granted') {
                setIsSwitchOn(false);
            }
        }

        onSetAppState(nextAppState);
    }

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
            <Text>facebookAppId: {Configs.facebookAppId}</Text>
            <Text selectable>{token}</Text>
        </View>
        <View>
            <Text>Action Login Facebook</Text>
            <Button onPress={onLoginFb}>Login Facebook</Button>
        </View>
        <View>
            <Text>Action Logout</Text>
            <Button onPress={AuthStore.onSignOut}>Logout</Button>
        </View>
    </View>
})