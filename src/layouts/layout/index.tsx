import * as React from "react";
import { StyleSheet, View } from "react-native";
import Constants from 'expo-constants';

export const Layout = React.memo((props) => {
    return <View style={styles.container}>{props.children}</View>
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#FFF'
    }
});