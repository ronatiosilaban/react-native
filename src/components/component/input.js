import { KeyboardAvoidingView, View, TextInput, TouchableOpacity, } from "react-native";
import { StyleSheet } from "react-native";
import API from '../../../config/todo';
import React, { useState } from 'react';




import { Ionicons } from '@expo/vector-icons';

// export default function input(props) {

//     const [state, setState] = useState();

//     const handleAddTask = async (value) => {
//         props.addTask(value);

//         const response = await API.post("/todo", { name: state })
//         setState(null);
//     }

//     return <>
//         <KeyboardAvoidingView
//             style={stylelist.container}
//         >
//             <TextInput style={stylelist.input} value={state} onChangeText={text => setState(text)} placeholder={'Input Your Todo'} placeholderTextColor={'#930707'} />
//             <TouchableOpacity onPress={() => handleAddTask(state)}>
//                 <View style={stylelist.button}>
//                     <Ionicons name="send" size={24} color="black" />
//                 </View>
//             </TouchableOpacity>
//         </KeyboardAvoidingView>
//     </>

// }
const InputFile = (props) => {
    const [states, setStates] = useState();

    const handleAddTask = async (value) => {
        props.addTask(value);

        const response = await API.post("/todo", { name: states })

        setStates(null);
    }

    return (
        <>
            <KeyboardAvoidingView
                style={stylelist.container}
            >
                <TextInput style={stylelist.input} value={states} onChangeText={text => setStates(text)} placeholder={'Input Your Todo'} placeholderTextColor={'#930707'} />
                <TouchableOpacity onPress={() => handleAddTask(states)}>
                    <View style={stylelist.button}>
                        <Ionicons name="send" size={24} color="black" />
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </>
    );
}
const stylelist = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        position: 'absolute',
        bottom: 20,
        marginTop: 30
    },
    input: {
        width: "98%",
        backgroundColor: 'white',
        padding: 10,
        marginRight: 10,
        color: 'black',
        backgroundColor: 'rgb(254,205,211)',
        borderRadius: 15

    },
    Button: {
        width: "20%",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        textAlign: "right",
        padding: 5

    }

});

export default InputFile;