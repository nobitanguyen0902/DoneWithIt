import * as Font from "expo-font";

export const initFonts = async () => {
    await Font.loadAsync({
        "Roboto-Regular": require("./roboto-regular.ttf"),
        "Roboto-Medium": require("./roboto-medium.ttf"),
        "Roboto-Bold": require("./roboto-bold.ttf"),
        "Roboto-Italic": require("./roboto-italic.ttf")
    })
}

export const fontConfig = {
    default: {
        regular: {
            fontFamily: 'Roboto-Regular',
            fontWeight: 400 as any
        },
        medium: {
            fontFamily: 'Roboto-Medium',
            fontWeight: 600 as any
        },
        light: {
            fontFamily: 'Roboto-Light',
            fontWeight: 300 as any
        },
        thin: {
            fontFamily: 'Roboto-Thin',
            fontWeight: 200 as any
        }
    }
}