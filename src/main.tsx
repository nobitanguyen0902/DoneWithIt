import * as React from "react";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { PageStore } from './stores';
import { Conversation } from './scenes/Conversation';
import { Settings } from './scenes/Settings';

const Tab = createBottomTabNavigator();

export const Main = React.memo(() => {
    React.useEffect(() => {
        console.log('Call Api')
        PageStore.onGetListPage();
    }, [])

    return <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
            activeTintColor: '#000'
        }}
    >
        <Tab.Screen name="Home" component={Conversation}
            options={({ route }) => ({
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="chatbubble" size={size} color={color} />
                ),
                tabBarVisible: getTabBarVisible(route)
            })}
        />
        <Tab.Screen name="Settings" component={Settings}
            options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="people" size={size} color={color} />
                )
            }}
        />
    </Tab.Navigator>
})

const getTabBarVisible = (route: any) => {
    // If the focused route is not found, we need to assume it's the initial screen
    // This can happen during if there hasn't been any navigation inside the screen
    // In our case, it's "Feed" as that's the first screen inside the navigator
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

    switch (routeName) {
        case 'Home':
        case 'Chats':
            return true;
        default:
            return false;
    }
}