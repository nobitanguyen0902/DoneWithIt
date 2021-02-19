import * as React from "react";
import { Dimensions, StyleSheet, View, Image, Text } from "react-native";
import { Button } from "react-native-paper";
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStore, PageStore } from '../../stores';
import { Layout } from '../../layouts/layout';

const window = Dimensions.get('window');
const LOGIN_BACKGROUND = require('../../assets/login_bg.png');
const LOGIN_LOGO = require('../../assets/login_logo.png');

const Stack = createStackNavigator();

export const SignIn = React.memo(() => {
    return <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Login" component={Content} />
    </Stack.Navigator>
})

const Content = React.memo(() => {

    const onChangeLanguage = () => {
        PageStore.onSetLanguage();
    }

    return <Layout>
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logoImage} resizeMode={'contain'}
                    source={LOGIN_LOGO}
                />
            </View>
            <View style={styles.formContainer}>
                <Button contentStyle={styles.btnLogin} color='#FFF'
                    labelStyle={{ fontSize: 14 }}
                    onPress={() => AuthStore.onSignIn()}>Đăng nhập</Button>
            </View>
            <View style={styles.formContainer}>
                <Button contentStyle={styles.btnLogin} color='#FFF'
                    labelStyle={{ fontSize: 14 }}
                    onPress={onChangeLanguage}>Ngôn ngữ</Button>
                <Text>{PageStore.translate("layout:language:english")}</Text>
            </View>
            <View style={styles.bgContainer}>
                <Image
                    style={{ width: window.width, height: window.height / 2 }}
                    source={LOGIN_BACKGROUND}
                />
            </View>
        </View>
    </Layout>
})

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logoContainer: {
        alignItems: 'center',
        paddingTop: 40
    },
    logoImage: {
        height: 200,
        width: window.width * 0.6
    },
    formContainer: {
        paddingLeft: window.width * 0.2,
        paddingRight: window.width * 0.2
    },
    btnLogin: {
        backgroundColor: '#2962ff',
        paddingVertical: 10
    },
    labelBtnLogin: {
        paddingTop: 10,
        color: '#FFF'
    },
    bgContainer: {
        position: 'absolute',
        right: 0,
        left: 0,
        bottom: 0
    }
})