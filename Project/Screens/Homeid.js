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

import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { Avatar } from 'react-native-paper';
import Video from 'react-native-video'
import VideoPlayer from 'react-native-video-controls'
import Constants_Home from './Constants_Home.js'


function Homeid(props) {
    let { name, avatar, status, video, ima, interact } = props.user //destructuring
    let ID = props.user
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

                {/* constants status return */}
                <Constants_Home cons={ID} />

                <View style={{ // cmt and like
                    borderWidth: 1,
                    borderColor: 'green',
                    height: 70
                }}>

                </View>
            </View>
        </View>
    )

};

export default Homeid