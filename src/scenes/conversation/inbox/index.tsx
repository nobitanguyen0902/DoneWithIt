import * as React from "react";
import { observer } from 'mobx-react';
import { StyleSheet, View, FlatList } from "react-native";
import { InputSearch } from "./search";
import { Item } from "./item";
import { InboxStore } from "../../../stores";

export const Inbox = observer(() => {
    React.useEffect(() => {
        InboxStore.onGetListConversation();
    }, [])

    return <View style={styles.container}>
        {InboxStore.listConversations && InboxStore.listConversations.length > 0
            ? <FlatList
                ListHeaderComponent={InputSearch}
                data={InboxStore.listConversations}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.id}
            />
            : null}
    </View>
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    }
})

const listData = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba0',
        name: 'Nôbita Nguyễn',
        snippet: 'Xin chao'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f639',
        name: 'Nguyễn Thái Anh',
        snippet: 'Xin chao'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d728',
        name: 'Phạm Ngọc Minh Thanh',
        snippet: 'Xin chao'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba7',
        name: 'Phan Nguyễn Mạnh Huy',
        snippet: 'Xin chao'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f636',
        name: 'Nguyễn Phúc',
        snippet: 'Xin chao'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6362',
        name: 'Nguyễn Phúc',
        snippet: 'Xin chao'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6363',
        name: 'Nguyễn Phúc',
        snippet: 'Xin chao'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6364',
        name: 'Nguyễn Phúc',
        snippet: 'Xin chao'
    }
];