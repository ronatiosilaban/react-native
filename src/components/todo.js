// import * as React from "react";
// import { StyleSheet } from 'react-native';
import React, { useState, useEffect } from "react";
import { StyleSheet, Pressable, View, FlatList, TouchableOpacity, ScrollView } from "react-native";
import Modal from "react-native-modal";
import Input from './component/input';
import TodosItem from './component/delete'
import { MaterialIcons } from '@expo/vector-icons';
import {
    Box,
    Text,
    Heading,
    VStack,
    FormControl,
    s


} from "native-base";

import API from '../../config/todo'


export default function YourTodo() {
    const [state, setState] = useState([]);

    const todos = async () => {
        const response = await API.get("/todo")
        return setState(response.data)
    }

    useEffect(() => {
        todos()
    }, [])

    const addTask = (states) => {
        console.log(state)
        if (states == null) return;
        setState([...states, state]);
        // Keyboard.dismiss();

    }

    const deleteTask = async (deleteIndex, id) => {
        const response = await API.delete("/todo/" + id)
        setState(state.filter((value, index) => index != deleteIndex));
    }

    return <Box
        safeArea
        bg="danger.300"
        flex={1}
        p={5}
        w="100%"
        mx="auto"

    >

        <Heading size="lg" color="white" fontFamily="body" fontWeight={400} style={{ flex: 1, justifyContent: "center", paddingTop: 50 }}>
            Todo List
        </Heading>
        <View style={{ flex: 15, borderRadius: 20, marginBottom: 20 }}>
            <VStack space={2} mt={5}>
                <ScrollView style={{ marginBottom: 50 }}>
                    {
                        state.map((state, index) => {
                            return (
                                <View key={index} >
                                    <TodosItem state={state.name} deleteTask={() => deleteTask(index, state?._id)} />
                                </View>
                            );
                        })
                    }
                </ScrollView>
            </VStack>



        </View>
        <Input addTask={addTask} />
    </Box >;

}




const stylelist = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(254,205,211)',
        padding: 10,
        justifyContent: 'center',
        color: 'black',
        borderRadius: 20,
        marginBottom: 10,
        textAlign: 'center'

    },
    containers: {
        // marginHorizontal: 20,
        // borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        position: 'absolute',
        bottom: 20,
        marginTop: 30
    },
    input: {
        backgroundColor: 'white',
        padding: 10,
        color: 'black',
        backgroundColor: 'rgb(254,205,211)'



    },
    button: {
        width: 50,
        height: 40,
        display: 'flex',


    },
    icon: {
        margin: 5,
        paddingLeft: 5,
        paddingRight: 10,
        marginLeft: 10,
        marginRight: 10,
        width: '100%',
        display: "flex"

    },
    icons: {
        margin: 10,
        marginRight: 10,
        marginLeft: 10
    },
    iconis: {


    },
    list: {
        paddingRight: 10,
        marginLeft: 20,
        textAlign: 'right',
        justifyContent: 'center',
        marginLeft: 5
    },
    Button: {
        width: "20%",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        textAlign: "right",
        padding: 5

    }

});

{/* <View style={stylelist.icon} >
                        <Text _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }} style={stylelist.container}>
                            <View style={stylelist.icons}>
                                <Pressable
                                    onPress={() => setModalVisible(true)}

                                >
                                    <AntDesign name="delete" size={20} color="black" />
                                </Pressable>
                            </View>
                            
                            <Text _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }} style={stylelist.list} >
                                Email
                            </Text >
                        </Text >

                    </View> */}