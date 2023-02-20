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
import Video from 'react-native-video'
import VideoPlayer from 'react-native-video-controls'
const vii = require('../front_end/anh_Minh_cau_nguyen.mp4')
function Test_video(props) {
    return (<View style={styles.container}>
        <Video source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}

            style={styles.backgroundVideo}
            controls={true}
            repeat={true}
            posterResizeMode="none"
        //https://www.w3schools.com/html/mov_bbb.mp4
        />
    </View>
    )
}
var styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 'auto',
        height: 400,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,

    },
});
export default Test_video;