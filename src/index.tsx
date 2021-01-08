import * as React from "react";
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Conversation } from './scenes/Conversation';
import { Settings } from './scenes/Settings';

const Tab = createBottomTabNavigator();

export const Main = React.memo(() => {
    return <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
            activeTintColor: '#000',
        }}
    >
        <Tab.Screen name="Home" component={Conversation}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="chatbubble" size={size} color={color} />
                )
            }}
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