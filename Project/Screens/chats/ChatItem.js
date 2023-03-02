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

function _getColorFromStatus(status) {
    if (status.toLowerCase().trim() == 'opening now')
        return colors.success;
    else if (status.toLowerCase().trim() == 'closing soon')
        return colors.alert;
    else if (status.toLowerCase().trim() == 'comming soon')
        return colors.warning;
    else return colors.success;
}

function ChatItem(props) {
    let {
        name,
        url,
        firstMessage,
        numberofmessageunread,
        userId,
    } = props.user
    const { onPress } = props
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                height: 80,
                paddingTop: 20,
                paddingStart: 10,
                flexDirection: 'row'
            }}>
            <View>
                <Image style={{
                    width: 50,
                    height: 50,
                    resizeMode: 'cover',
                    borderRadius: 25,
                    marginRight: 15,
                    marginStart: 10,
                }}
                    source={{ uri: url, }} />
                {numberofmessageunread > 0 ? <Text style={{
                    backgroundColor: 'red',
                    position: 'absolute',
                    right: 10,
                    fontSize: fontSizes.h6 * 0.8,
                    borderRadius: 10,
                    fontWeight: 'bold',
                    paddingHorizontal: numberofmessageunread > 9 ? 2 : 4,
                }}>{numberofmessageunread}</Text> : ""}
            </View>
            <View style={{
                flexDirection: 'column'
            }}>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    fontWeight: 'bold',
                }} >{name}</Text>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: colors.inactive
                }} >{firstMessage}</Text>
            </View>
            <View style={{
                flexDirection: 'column',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-end',
            }}>
                <Text style={{
                    color: 'black',
                    fontsize: fontSizes.h6 * 0.8,
                    marginRight: 10,
                }} >5 minutes</Text>
            </View>
        </TouchableOpacity>)
}
export default ChatItem