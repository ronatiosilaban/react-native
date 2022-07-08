import { StyleSheet, View, Text, TouchableOpacity, } from 'react-native'
import { useState, useEffect } from 'react';
import { Box } from "native-base";



export default function Calculator() {
    const [state, setState] = useState({

        results: 0,

    });


    const inputNumber = (value) => {
        if (state.results == 0) {
            setState({ results: value })
        }
        else {
            setState({ results: state.results + '' + value })
        }
    }

    const counts = () => {
        let count = eval(state.results);
        setState({ results: count })

    }

    return (
        <Box bg="danger.300" flex={1} alignItems="center" justifyContent="center" >
            <View>
                <Text style={styles.display}>Display</Text>
            </View>
            <View style={{ backgroundColor: 'rgb(236,236,236)', borderRadius: 10, margin: 5, marginBottom: 10, justifyContent: 'center' }}>
                <Text style={styles.count}>{state.results}</Text>
            </View>
            <View style={styles.width}>
                <TouchableOpacity
                    onPress={() => inputNumber(state.results = 0)}>
                    <Text style={styles.clear}>clear</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', }}>
                    <TouchableOpacity style={styles.container}
                        onPress={() => inputNumber(1)}>
                        <Text style={styles.text} >1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container}
                        onPress={() => inputNumber(2)}>
                        <Text style={styles.text}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylelist.container}
                        onPress={() => inputNumber('-')}>
                        <Text style={styles.text}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylelist.container}
                        onPress={() => inputNumber('+')}>
                        <Text style={styles.text}>+</Text>
                    </TouchableOpacity>
                </View >
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.container}
                        onPress={() => inputNumber(3)}>
                        <Text style={styles.text}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container}
                        onPress={() => inputNumber(4)}>
                        <Text style={styles.text}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylelist.container}
                        onPress={() => inputNumber('/')}>
                        <Text style={styles.text}>/</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylelist.container}
                        onPress={() => inputNumber('*')}>
                        <Text style={styles.text}>x</Text>
                    </TouchableOpacity>
                </View >
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.container}
                        onPress={() => inputNumber(5)}>
                        <Text style={styles.text}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container}
                        onPress={() => inputNumber(6)}>
                        <Text style={styles.text}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylelist.container}
                        onPress={() => inputNumber('%')}>
                        <Text style={styles.text}>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylelist.container}
                        onPress={() => counts()}>
                        <Text style={styles.text}>=</Text>
                    </TouchableOpacity>
                </View >
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.container}
                        onPress={() => inputNumber(7)}>
                        <Text style={styles.text}
                        >7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container}
                        onPress={() => inputNumber(8)}>
                        <Text style={styles.text}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container}
                        onPress={() => inputNumber(9)}>
                        <Text style={styles.text}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container}
                        onPress={() => inputNumber(0)}>
                        <Text style={styles.text}>0</Text>
                    </TouchableOpacity>
                </View >
            </View >

        </Box>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10,
        margin: 5,
        backgroundColor: 'rgb(255,87,87)',

    },
    text: {
        fontSize: 24,
        textAlign: 'center',
        color: 'white'

    },
    display: {
        fontSize: 20,
        color: 'white',
        width: 250
    },
    count: {
        fontSize: 30,
        color: 'black',
        textAlign: 'right',
        marginHorizontal: 10,
        padding: 15,
        width: 250,
        justifyContent: 'center',
        textAlign: 'right'

    },
    clear: {
        fontSize: 30,
        color: 'white',
        textAlign: 'right',
        marginHorizontal: 10,
        marginBottom: 5

    },
    width: {
        width: 280,
        marginBottom: 200,
    }
});


const stylelist = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        borderRadius: 5,
        margin: 5,
        backgroundColor: 'rgb(147,7,7)',
    },
});
  //
