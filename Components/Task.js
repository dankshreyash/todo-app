import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Task({ text }) {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>



                <View style={styles.square} />
                <Text style={styles.itemText}>{text}</Text>

            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: "space-between",
        marginBottom: 20,
        alignItems: 'center'
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        backgroundColor: "#55BCF6",
        height: 24,
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15
    },
    itemText: {
        maxWidth: '80%',

    },
    circular: {
        width: 12,
        height: 12,
        borderColor: "#55BCF6",
        borderWidth: 2,
        borderRadius: 5,
    }
})