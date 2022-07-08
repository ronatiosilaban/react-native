import * as React from "react";

import { useTheme } from "native-base";

import { NavigationContainer } from "@react-navigation/native";

import 'react-native-gesture-handler';

// Import Stack Navigation
import { createStackNavigator } from "@react-navigation/stack";

//Import Bottom Tab Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
// Import Screen

import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();

//Create Bottom Tab Navigation
const Tab = createBottomTabNavigator()


import Todo from "./src/components/todo";
import Calculator from "./src/components/calculator";

function MyTab() {
    const theme = useTheme();

    return (
        <Tab.Navigator
            initialRouteName="Todo"
            screenOptions={({ route }) => ({
                headerMode: "screen",
                headerTintColor: "white",
                headerStyle: { backgroundColor: theme.colors.secondary["300"] },
                tabBarStyle: { backgroundColor: 'rgb(253,164,175)' },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName

                    if (route.name == "Todo") {
                        iconName = focused ? "message-bookmark" : "message-bookmark-outline"
                    } else if (route.name == "Calculator") {
                        iconName = focused ? "calculator-variant" : "calculator-variant-outline"
                    }

                    return <MaterialCommunityIcons name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: theme.colors.secondary["800"],
                tabBarInactiveTintColor: "black"
            })}
        >
            <Tab.Screen name="Todo" component={Todo} options={{ headerShown: false }} />
            <Tab.Screen name="Calculator" component={Calculator} options={{ headerShown: false }} />

        </Tab.Navigator>
    )
}

export default function Container() {
    const theme = useTheme();


    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Todo"
                screenOptions={{
                    headerMode: "screen",
                    headerTintColor: "white",
                    headerStyle: { backgroundColor: theme.colors.secondary["300"] },
                }}
            >
                <Stack.Screen
                    name="Calculator"
                    component={MyTab}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}