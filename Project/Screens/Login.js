import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    LogBox,
} from 'react-native'

import { images, colors, icons, fontSizes } from '../constants'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { UIButton } from '../components'
const styles = ({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
function Login(Props) {
    return <View style={{
        flex: 100,
        backgroundColor: 'white'
    }}>
        <View
            style={{
                backgroundColor: 'red',
                height: '40%',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Image
                source={images.icon_truong1}
                style={{
                    backgroundColor: 'red',
                    height: 120,
                    width: 200
                }}
            />
            <Text
                style={{
                    fontSize: 35,
                    fontWeight: 'bold',
                    color: 'black',
                    marginTop: 25,
                    width: 90,
                    backgroundColor: 'blue',
                    // alignSelf: 'center',

                }}>
                Login
            </Text>
        </View>
        <View
            style={{
                backgroundColor: 'green',
                height: '40%',
                justifyContent: 'center',
                // alignItems: 'center',
            }}>
            <UIButton

                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                title={'NEXT'}


            />
        </View>
    </View >
}

export default Login;