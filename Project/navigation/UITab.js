import * as React from 'react'
import {
    Settings,
    ProductGridView,
    Foodlist,
    Profile,
    Chat,
    Home
} from '../Screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { fontSizes, colors } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import 'react-native-gesture-handler'
import { View } from 'react-native'

const Tab = createBottomTabNavigator()
const screenOptions = ({ route }) => ({
    headerShown: false,
    tabBarActiveTinColor: 'white',
    tabBarInactiveTinColor: colors.inactive,
    tabBarActiveBackgroundColor: colors.primary,
    tabBarInactiveBackgroundColor: colors.primary,
    tabBarBackground: () => (
        <View style={{ backgroundColor: colors.primary, flex: 1 }}></View>
    ),
    tabBarIcon: ({ focused, color, size }) => {
        return <Icon
            style={{
                paddingTop: 5
            }}
            name={route.name == "ProductGridView" ? "align-center>" :
                (route.name == "Home" ? "newspaper" :
                    (route.name == "Settings" ? "cogs" :
                        (route.name == "Profile" ? "user" :
                            (route.name == "Chat" ? "comment-dots" : "")
                        )
                    )
                )
            }
            size={20}
            color={focused ? 'white' : colors.inactive} />
    }
})
function UITab(props) {
    return <Tab.Navigator screenOptions={screenOptions}
        style={{ flexDirection: 'row', }}
    >
        {/* <Tab.Screen
            name={"Products"}
            component={ProductGridView}
            options={{
                tabBarLable: 'products',
                tabBarLabelStyle: {
                    fontSize: fontSizes.h6
                }
            }}
        /> */}
        <Tab.Screen
            name={"Home"}
            component={Home}
            options={{
                tabBarLabel: 'Home',
                tabBarLabelStyle: {
                    fontSize: fontSizes.h6
                }
            }} />
        <Tab.Screen
            name={"Profile"}
            component={Profile}
            options={{
                tabBarLable: 'Profile',
                tabBarLabelStyle: {
                    fontSize: fontSizes.h6
                }
            }}
        />
        <Tab.Screen
            name={"Chat"}
            component={Chat}
            options={{
                tabBarLable: 'products',
                tabBarLabelStyle: {
                    fontSize: fontSizes.h6
                }
            }}
        />
        <Tab.Screen
            name={"Settings"}
            component={Settings}
            options={{
                tabBarLable: 'Settings',
                tabBarLabelStyle: {
                    fontSize: fontSizes.h6
                }
            }}
        />
    </Tab.Navigator>
}
export default UITab