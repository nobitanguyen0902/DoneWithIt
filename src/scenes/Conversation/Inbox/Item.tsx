import * as React from "react";
import { StyleSheet, Image, View, Text, TouchableHighlight } from "react-native";
import { useNavigation } from '@react-navigation/native';

export const Item = React.memo((props: any) => {
    const { item } = props;
    const navigation = useNavigation();

    const onClickItem = () => {
        navigation.navigate('Detail');
    }

    return <TouchableHighlight
        onPress={onClickItem}
        underlayColor="rgba(178,212,255,.5)"
    >
        <View style={styles.item}>
            <View style={styles.hrvFlex}>
                <View style={styles.hrvFlexItem}>
                    <View style={styles.boxImage}>
                        <Image
                            style={styles.image}
                            source={{
                                uri: "https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-1/p100x100/71074567_2633490643338562_124928332214042624_o.jpg?_nc_cat=100&ccb=2&_nc_sid=7206a8&_nc_ohc=FCNngMQwfWYAX-aFYRc&_nc_ht=scontent.fsgn5-5.fna&tp=6&oh=35e720e904b3bda2b4dc048fe330da93&oe=6018BE4F"
                            }}
                        />
                    </View>
                </View>
                <View style={styles.hrvFlexItemFull}>
                    <View style={styles.boxInfo}>
                        <View style={styles.hrvFlex}>
                            <View style={styles.hrvFlexItemFull}>
                                <Text style={styles.title} numberOfLines={1}>{item.name}</Text>
                            </View>
                            <View style={styles.hrvFlexItem}>
                                <Text style={styles.date}>Dec 31,2021</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.boxInfo}>
                        <View style={styles.hrvFlex}>
                            <View style={styles.hrvFlexItem}>
                                <Text style={styles.content} numberOfLines={1}>{item.snippet}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    </TouchableHighlight>
})

const styles = StyleSheet.create({
    container: {

    },
    hrvFlex: {
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
    item: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16
    },
    boxImage: {
        flexBasis: 36,
        borderRadius: 50,
        overflow: "hidden"
    },
    image: {
        width: 64,
        height: 64,
        resizeMode: "stretch"
    },
    boxInfo: {
        marginBottom: 4
    },
    title: {
        fontSize: 14,
        fontWeight: "bold"
    },
    content: {
        fontSize: 14,
        color: "#6c798f"
    },
    date: {
        fontSize: 12
    }
});