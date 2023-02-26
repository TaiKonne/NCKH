import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Keyboard,
    Dimensions,
    Alert,
} from 'react-native'
import { images, colors, icons, fontSizes } from '../../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { screenWidth } from '../../utilies/Device';
import { FlatList } from 'react-native-gesture-handler';

function ListFriendItem(props) {
    // const { onPress } = props
    const { url, username } = props.item
    return <View style={{
        flexDirection: 'row',
        flex: 1,
        padding: 5,
    }}>
        <TouchableOpacity 
            onPress={() => {
                alert("go to each Profile")
            }}
            style={{
                flexDirection:'row'
        }}>
            <Image
                style={{
                    width: 50,
                    height: 50,
                    resizeMode: 'cover',
                    borderRadius: 25,
                    marginRight: 15,
                    marginStart: 10,
                }}
                source={{ uri: url }} />
            <View style={{
                width: screenWidth * 0.7,
                flexDirection: 'row',
            }}>
                <View>
                    <Text style={{
                        color: 'black',
                        fontSize: fontSizes.h5,
                        paddingVertical: 15,
                        paddingHorizontal: 7,
                        backgroundColor: colors.messenger,
                    }}>{username}</Text>
                </View>
                <View style={{ width: 20 }}></View>
            </View>
        </TouchableOpacity>
    </View>
}
export default ListFriendItem