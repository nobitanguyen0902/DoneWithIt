import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Inbox } from "./Inbox";
import { Detail } from './Detail';

const Stack = createStackNavigator();

export const Conversation = React.memo(() => {
    return <Stack.Navigator>
        <Stack.Screen name="Home" component={Inbox} />
        <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
})