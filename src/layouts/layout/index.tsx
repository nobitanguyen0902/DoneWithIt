import * as React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Constants from 'expo-constants';

export const Layout = React.memo((props) => {
    return <SafeAreaView style={styles.container}>
        <View>{props.children}</View>
    </SafeAreaView>
})

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight
    }
});