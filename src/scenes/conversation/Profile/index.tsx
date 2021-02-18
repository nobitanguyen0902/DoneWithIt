import * as React from "react";
import { StyleSheet, View, Text } from 'react-native';

export const Profile = React.memo(() => {
    return <View style={styles.container}>
        <Text>Profile</Text>
    </View>
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    }
})