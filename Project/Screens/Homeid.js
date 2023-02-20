import React, { useState, useEffect } from 'react';
import { SearchBar } from 'react-native-elements';
import {
    Image,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    ScrollView, StyleSheet
} from 'react-native'
import { icons, images, colors } from '../constants/index.js'
import { UIButton } from '../components'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { Avatar } from 'react-native-paper';
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

function Homeid(props) {
    let { name, avatar, status, video, ima, interact } = props.user //destructuring

    return (
        <View>
            <View style={{  // status
                // borderWidth: 1,
                // borderColor: 'black',
                height: 'auto',
                marginVertical: 6,
                justifyContent: 'center',
                backgroundColor: 'white'
                // alignItems: 'center',
            }}>
                <View style={{ // avatar and content status
                    height: 50,
                    // borderWidth: 1,
                    // borderColor: 'green',
                    width: '100%',
                    flexDirection: 'row',
                    marginLeft: 6,
                    marginRight: 6,
                }}>
                    <Avatar.Image size={50} source={{
                        uri: avatar
                    }} />
                    <Text style={{
                        fontWeight: 'bold',
                        color: 'black',
                        fontSize: 15,
                        height: 40,
                        marginLeft: 12,
                        marginTop: 5
                    }}>
                        {name}
                    </Text>
                </View>
                <View style={{ // text
                    marginVertical: 5,
                    // borderWidth: 1,
                    // borderColor: 'yellow',
                    color: 'black',
                    marginLeft: 6,
                    marginRight: 6,
                }}>
                    <Text
                        style={{ //hashtag
                            fontSize: 16,
                            color: 'black',
                        }}>
                        {status}
                    </Text>
                </View>
                <View style={{ // video or image
                    alignItems: 'center',

                }}>
                    <Image source={images.hoa_giay_1} style={{
                        width: '100%',
                        height: 400
                    }} />
                </View>
                <View style={{
                    borderWidth: 1,
                    borderColor: 'green',
                    height: 70
                }}>

                </View>
            </View>
        </View>
    )
};
var styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});
export default Homeid