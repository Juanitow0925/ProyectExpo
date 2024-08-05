import { Text, View, Button, StyleSheet } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export const HomeScreen = () => {

    const navigation = useNavigation();

    return (
        <View>
            <Text style={styles.titleHomeScreen}>
                HomeScreen
            </Text>

            <TouchableOpacity
                style={styles.touchableStyle}
                onPress={() => navigation.navigate("StackScreen")}  
            >
                <Text style={styles.textButtonStack}>
                    Go to stack screen
                </Text>  
            </TouchableOpacity>

            <Button title='Ingresar' onPress={() => navigation.navigate("StackScreen")}  
            />
        </View>
    )
}

const styles = StyleSheet.create({
    titleHomeScreen: {
        fontSize: 40,
        textAlign: "center",
        marginTop: "20%"
    },
    touchableStyle: {
        backgroundColor: "purple",  
        padding: 10,
        marginTop: "20%",
        width: "50%",
        alignSelf: "center",
        borderRadius: 10,
    },
    textButtonStack: {
        fontSize: 15,
        textAlign: "center",
        color: "white"
    }
})

export default HomeScreen;
