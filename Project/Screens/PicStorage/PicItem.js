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
    Alert,
} from 'react-native';

import { images, colors, icons, fontSizes } from '../../constants'
import Icon from 'react-native-vector-icons/dist/FontAwesome'


function PicItem(props) {
    const {item,index , onPress} =props
    return <View style={{
        flex: 0.33, 
        borderWidth: 1,
        borderColor: colors.inactive,
        // backgroundColor:'green'
    }}>
        <TouchableOpacity>
            <View style={{
                flexDirection: 'row',
                // marginTop: 10,
                padding:10
            }} >
                <Image style={{
                    width: 100,
                    height: 100,
                    resizeMode: 'cover',
                    borderRadius: 20,
                }}
                source={{uri: item.url,}} />
            </View>
        </TouchableOpacity>
    </View>
}
export default PicItem