import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';
import BottomTab from './bottom_navigation';
import Updates from './Updates';
import Profile from './profile';
import Detail from './detail';


const Stack = createStackNavigator();
const main_navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="BottomTab" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Detail" component={Detail} />
                <Stack.Screen name="Updates" component={Updates} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="BottomTab" component={BottomTab} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default main_navigation;