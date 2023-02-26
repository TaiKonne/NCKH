import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList,
} from 'react-native';

import { images, colors, icons, fontSizes } from '../../constants'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import PicItem from './PicItem';
import { UIHeader } from '../../components';
function PicStorage(props)
{
    const [pic , setPic] = useState([
        {
            url : 'https://randomuser.me/api/portraits/women/10.jpg',
            id : 1
        },
        {
            url : 'https://randomuser.me/api/portraits/women/20.jpg',
            id : 2
        },
        {
            url : 'https://randomuser.me/api/portraits/women/30.jpg',
            id : 3
        },
        {
            url : 'https://randomuser.me/api/portraits/women/40.jpg',
            id : 4
        },
        {
            url : 'https://randomuser.me/api/portraits/women/50.jpg',
            id : 5
        },
        {
            url : 'https://randomuser.me/api/portraits/women/60.jpg',
            id : 6
        },
        {
            url : 'https://randomuser.me/api/portraits/women/70.jpg',
            id : 7
        },
        {
            url : 'https://randomuser.me/api/portraits/women/80.jpg',
            id : 8
        },
        {
            url : 'https://randomuser.me/api/portraits/women/90.jpg',
            id : 9
        },
        {
            url : 'https://randomuser.me/api/portraits/men/40.jpg',
            id : 10
        },
        {
            url : 'https://randomuser.me/api/portraits/men/10.jpg',
            id : 11
        },
        {
            url : 'https://randomuser.me/api/portraits/men/20.jpg',
            id : 12
        },
        {
            url : 'https://randomuser.me/api/portraits/men/30.jpg',
            id : 13
        },
        {
            url : 'https://randomuser.me/api/portraits/men/50.jpg',
            id : 14
        },
        {
            url : 'https://randomuser.me/api/portraits/men/60.jpg',
            id : 15
        },
        {
            url : 'https://randomuser.me/api/portraits/men/70.jpg',
            id : 16
        },
        {
            url : 'https://randomuser.me/api/portraits/men/80.jpg',
            id : 17
        },
        {
            url : 'https://randomuser.me/api/portraits/men/90.jpg',
            id : 18
        },
        {
            url : 'https://randomuser.me/api/portraits/women/10.jpg',
            id : 18
        },
    
    ])
    const {navigation, route} = props
    //functions of navigate to/back
    const {navigate, goBack} = navigation
    return <View style={{
        flex: 1,
        backgroundColor : 'white'
    }} >
        <UIHeader 
            title={'Storage'}  
            leftIconName = {"arrow-left"}
            rightIconName = {"search"}
            onPressLeftIcon={()=>{
               goBack()
            }}
            onPressRightIcon={()=>{
                alert('press right icon')
            }}
        />
        <FlatList
            data ={pic}
            numColumns={3}
            renderItem = {({item}) => <PicItem 
                onPress ={()=> {
                    alert(`your press ${item.id}`)
                }}
                item = {item} key = {item.id}
            />}
        />
    </View> 
}

export default PicStorage