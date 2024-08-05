import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FontAwesome from '@expo/vector-icons/FontAwesome';

// Screen imports
import HomeScreen from "./screens/HomeScreen";
import SettingScreen from "./screens/SettingScreen";
import StackScreen from "./screens/StackScreen";

const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
    return (
        <HomeStackNavigator.Navigator initialRouteName="HomeScreen">
            <HomeStackNavigator.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
            <HomeStackNavigator.Screen
                name="StackScreen"
                component={StackScreen}
            />
        </HomeStackNavigator.Navigator>
    );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                tabBarActiveTintColor: "purple"
            }}
        >
            <Tab.Screen
                name="Home"
                component={MyStack}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="home" size={24} color="black" />
                    ),
                    tabBarBadge: 3,
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingScreen}
                options={{
                    tabBarLabel: "Setting",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="setting" size={24} color="black" />
                    ),
                    tabBarBadge: 3,
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    );
}

export default function navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}
