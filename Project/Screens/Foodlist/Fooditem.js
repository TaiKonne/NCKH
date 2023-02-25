import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    Image
} from 'react-native';
import { images, colors, icons, fontSizes } from '../../constants'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

function _getColorFromStatus(status)
{
    if(status.toLowerCase().trim() == 'opening now')
        return colors.success;
    else if(status.toLowerCase().trim() == 'closing soon')
        return colors.alert;
    else if(status.toLowerCase().trim() == 'comming soon')
        return colors.warning;
    else return colors.success;
}

function Fooditem (props)
{
    let{name, 
        price , 
        SocialNetwork , 
        url , 
        status, 
        website
     } = props.food
    const {onPress} = props
    return(
        <TouchableOpacity 
        onPress={onPress}
        style ={{
        height : 150 ,  
        paddingTop : 20,
        paddingStart:10,
        flexDirection : 'row'
    }}>
    <Image style={{
        width:100, 
        height: 100,
        resizeMode:'cover',
        borderRadius:10,
        marginRight:15
    }}
    
    source={{
        uri: url,
    }}/>
    <View style={{
        flex: 1,
        marginRight:10
    }}>
        <Text style ={{ 
            color:'black',
            fontSize :fontSizes.h6,
            fontWeight: 'bold',
        }}>{name}</Text>
        <View style={{
            height:1,
            backgroundColor: 'black'
        }}/>
        <View style={{
            flexDirection:'row'
        }}>
            <Text style ={{ 
                color:colors.inactive,
                fontSize :fontSizes.h6,
                fontWeight: 'bold',
            }}>Status: </Text>
            <Text style ={{ 
                color:_getColorFromStatus(status),
                fontSize :fontSizes.h6,
            }}>{status.toUpperCase()}</Text>
        </View>
        <Text style ={{ 
                color:colors.inactive,
                fontSize :fontSizes.h6,
                fontWeight: 'bold',
            }}>Price: {price} </Text>
        <Text style ={{ 
                color:colors.inactive,
                fontSize :fontSizes.h6,
                fontWeight: 'bold',
            }}>Food Type : Pizza </Text>
        <Text style ={{ 
                color:colors.inactive,
                fontSize :fontSizes.h6,
                fontWeight: 'bold',
            }}>Website: {website} </Text>
        <View style = {{
            flexDirection: 'row',
        }}>
            {SocialNetwork ['facebook'] != undefined && <Icon 
                style={{
                    paddingEnd : 5
                }} 
                name='facebook' 
                size={18} color = {colors.inactive} />}
            {SocialNetwork ['twitter'] != undefined && <Icon 
                style={{
                    paddingEnd : 5
                }} 
                name='twitter' 
                size={18} color = {colors.inactive} />}
            {SocialNetwork ['instagram'] != undefined && <Icon 
                style={{
                    paddingEnd : 5
                }} 
                name='instagram' 
                size={18} color = {colors.inactive} />}
        </View>
    </View>
    </TouchableOpacity>)
}
export default Fooditem