import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const todosItem = (props) => {
    return (
        <View >
            <View >
                <Text style={styles.container}>{props.state}</Text>
                <TouchableOpacity onPress={() => props.deleteTask()} style={{ position: 'absolute', padding: 8 }}>
                    <MaterialIcons name="delete" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(254,205,211)',
        padding: 10,
        justifyContent: 'center',
        color: 'black',
        borderRadius: 20,
        marginBottom: 10,
        textAlign: 'center'

    },
});

export default todosItem;