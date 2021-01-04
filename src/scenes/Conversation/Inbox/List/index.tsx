import * as React from "react";
import { StyleSheet, Image, FlatList, View, Text } from "react-native";

export const List = React.memo(() => {
    return <FlatList
        data={listData}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={item => item.id}
    />
})

export const Item = React.memo((props: any) => {
    const { item } = props;

    return <View style={styles.item}>
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
                            <Text style={styles.title}>{item.name}</Text>
                        </View>
                        <View style={styles.hrvFlexItem}>
                            <Text style={styles.date}>Dec 31,2021</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.boxInfo}>
                    <View style={styles.hrvFlex}>
                        <View style={styles.hrvFlexItem}>
                            <Text style={styles.content}>Xin chào</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    </View>
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
        width: 36,
        height: 36,
        resizeMode: "stretch"
    },
    boxInfo: {

    },
    title: {
        fontSize: 14,
        fontWeight: "bold"
    },
    content: {
        fontSize: 14,
    },
    date: {
        fontSize: 12
    }
});

const listData = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba0',
        name: 'Nôbita Nguyễn',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f639',
        name: 'Nguyễn Thái Anh',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d728',
        name: 'Phạm Ngọc Minh Thanh',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba7',
        name: 'Phan Nguyễn Mạnh Huy',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f636',
        name: 'Nguyễn Phúc',
    }
];