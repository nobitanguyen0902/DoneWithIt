import { Alert, Linking } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

export default class Core {
    static async checkPermission() {
        const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        return status !== 'granted' ? false : true;
    }

    static async registerNotification() {
        try {
            console.log('existingStatus call')
            const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);

            console.log('existingStatus', existingStatus)
            console.log('Permissions', Permissions.NOTIFICATIONS)
            let finalStatus = existingStatus;
            if (existingStatus !== 'granted') {
                const { status, canAskAgain } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
                console.log('status', status);
                console.log('canAskAgain', canAskAgain);
                finalStatus = status;
            }
            if (existingStatus !== "granted") {
                Alert.alert(
                    "No Notification Permission",
                    "please goto setting and on notification permission manual",
                    [
                        { text: "cancel", onPress: () => console.log("cancel") },
                        { text: "Allow", onPress: () => Linking.openURL("app-settings:") },
                    ],
                    { cancelable: false }
                );
                return;
            }

            if (finalStatus !== 'granted') {
                alert('Failed to get push token for push notification!');
                return;
            }
            console.log('finalStatus', finalStatus)
            let token = await Notifications.getExpoPushTokenAsync();

            const body = {
                device_id: Constants.deviceId,
                token
            }
            console.log('token', token);
            console.log('body', body);
            // let url = `${defaultUrl}/notify/mobile`;
            // await HaravanAPI.CallApi(url, 'POST', body);
            // if (userInfo.email === "hungitdl@gmail.com") {
            //     alert(token)
            // }
            return true;
        } catch (error) {
            console.log("ERROR:", error);
            return true;
        }
    }

    static async removeNotificationToken() {
        try {
            let token = await Notifications.getExpoPushTokenAsync();
            // let url = `${defaultUrl}/notify/mobile/remove?token=${encodeURIComponent(token)}`;
            // const result = await HaravanAPI.CallApi(url, 'DELETE');
        } catch (error) {
            console.log(error)
        }
    }
}