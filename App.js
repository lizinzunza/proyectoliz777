import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen.js';
import HomeScreen from './screens/HomeScreen.js';
import Gallery from './screens/gallery.js';
import Especies from './screens/especies.js';
import RegisterScreen from './screens/registerScreen.js';




const Stack = createStackNavigator();

const AppNavigator = () => {


    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Gallery" component={Gallery} />
                <Stack.Screen name="Especies" component={Especies} />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;