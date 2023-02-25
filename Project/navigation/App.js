import React, { Component, useState } from 'react'
import {
    Image,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import { icons, images, colors, fontSizes } from '../constants'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StackRouter } from 'react-navigation'
import { Welcome, Login, Home, Register } from '../Screens'
import UITab from './UITab'


const Stack = createNativeStackNavigator()
// the heck
function App(props) {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name={"Welcome"} component={Welcome} />
            <Stack.Screen name={"Login"} component={Login} />
            <Stack.Screen name={"Register"} component={Register} />
            <Stack.Screen name={"UITab"} component={UITab} />
        </Stack.Navigator>
    </NavigationContainer >
}
export default App