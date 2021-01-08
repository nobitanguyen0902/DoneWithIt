import * as React from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Inbox } from "./Inbox";

export const Conversation = React.memo(() => {
    return <SafeAreaView>
        <Inbox />
    </SafeAreaView>
})