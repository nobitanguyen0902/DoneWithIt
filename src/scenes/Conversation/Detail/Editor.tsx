import * as React from "react";
import { ScrollView, StyleSheet, View, Text, TextInput } from 'react-native';

export const Editor = React.memo(() => {
    return <TextInput
        multiline
        numberOfLines={4}
        maxLength={40}
        style={styles.input}
    />
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    input: {
        backgroundColor: "#EEE",
        height: 40,
        borderRadius: 30
    }
})