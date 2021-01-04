import * as React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import { List } from "./List";

export const Inbox = React.memo(() => {
    return <View>
        <InputSearch />
        <List />
    </View>
})

export const InputSearch = React.memo(() => {
    const [value, onChangeText] = React.useState('');

    return <View style={styles.searchInputContainer}>
        <View style={[styles.hrvFlex, styles.hrvFlexAlignItemCenter]}>
            <View style={styles.hrvFlexItem}>
                <EvilIcons name="search" size={24} color="black" />
            </View>
            <View style={styles.hrvFlexItemFull}>
                <TextInput
                    style={styles.searchInput}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    placeholder={"Search"}
                />
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
    hrvFlexAlignItemCenter: {
        alignItems: "center"
    },
    searchInputContainer: {
        marginLeft: 16,
        marginRight: 16,
        marginTop: 8,
        marginBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 4,
        backgroundColor: "#eee"
    },
    searchInput: {
        height: 40
    }
})