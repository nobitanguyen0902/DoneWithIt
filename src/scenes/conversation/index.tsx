import * as React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableHighlight } from "react-native-gesture-handler";
import { MaterialIcons } from '@expo/vector-icons';
import { Inbox } from "./inbox";
import { Detail } from './detail';
import { Profile } from './profile';

const Stack = createStackNavigator();

export const Conversation = React.memo(() => {
    const navigation = useNavigation();

    return <Stack.Navigator>
        <Stack.Screen name="Chats" component={Inbox} />
        <Stack.Screen name="Detail" component={Detail}
            options={{
                headerTitle: "",
                headerLeft: (props) => {
                    return <View style={styles.container}>
                        <TouchableHighlight
                            underlayColor="transparent"
                            onPress={() => navigation.navigate("Chats")}
                        >
                            <View style={styles.navigationBack}>
                                <MaterialIcons name="arrow-back-ios" size={20} color="black" />
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={{ flex: 1 }}
                            underlayColor="transparent"
                            onPress={() => navigation.navigate("Profile")}
                        >
                            <View style={[styles.hrvFlex, styles.hrvFlexAlignItemCenter]}>
                                <View style={styles.hrvFlexItem}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: "https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-1/p100x100/71074567_2633490643338562_124928332214042624_o.jpg?_nc_cat=100&ccb=2&_nc_sid=7206a8&_nc_ohc=FCNngMQwfWYAX-aFYRc&_nc_ht=scontent.fsgn5-5.fna&tp=6&oh=35e720e904b3bda2b4dc048fe330da93&oe=6018BE4F"
                                        }}
                                    />
                                </View>
                                <View style={styles.hrvFlexItemFull}>
                                    <Text style={styles.headerTitle} numberOfLines={1}>Nobita Nguyen</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                    </View>
                }
            }}
        />
        <Stack.Screen name="Profile" component={Profile}
            options={{
                headerTitle: "",
                headerLeft: (props) => {
                    return <View style={styles.container}>
                        <TouchableHighlight
                            underlayColor="transparent"
                            onPress={() => navigation.navigate("Detail")}
                        >
                            <View style={styles.navigationBack}>
                                <MaterialIcons name="arrow-back-ios" size={20} color="black" />
                            </View>
                        </TouchableHighlight>
                    </View>
                }
            }}
        />
    </Stack.Navigator>
})

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16
    },
    hrvFlex: {
        flex: 1,
        flexDirection: "row",
        marginTop: -8,
        marginLeft: -8
    },
    hrvFlexItem: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        marginTop: 8,
        marginLeft: 8
    },
    hrvFlexItemFull: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        marginTop: 8,
        marginLeft: 8
    },
    hrvFlexAlignItemCenter: {
        alignItems: "center"
    },
    navigationBack: {
        paddingRight: 12
    },
    image: {
        width: 32,
        height: 32,
        resizeMode: "stretch",
        borderRadius: 100
    },
    headerTitle: {
        fontWeight: "bold"
    }
})