import * as React from "react";
import { ScrollView, StyleSheet, View } from 'react-native';
import { Message } from './Message';
import { Editor } from './Editor';

export const Detail = React.memo(() => {
    return <View style={styles.container}>
        <ScrollView>
            <View style={styles.listMessage}>
                <Message />
            </View>
        </ScrollView>
        <View style={styles.controls}>
            <Editor />
        </View>
    </View>
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    listMessage: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        padding: 16
    },
    controls: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: 80,
        padding: 16
    }
})