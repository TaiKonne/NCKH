import * as React from 'react'

import {
    Image,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import { icons, images, colors, fontSizes } from '../constants'
import { Home } from '../Screens'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StackRouter } from 'react-navigation'

const Tab = createBottomTabNavigator()

function UITab(pros) {
    return <Tab.Navigator initialRouteName='Home'
        screenOptions={{
            headerShown: false
        }}>
        <Tab.Screen name={Home} component={Home} />
    </Tab.Navigator>


}

export default UITab;