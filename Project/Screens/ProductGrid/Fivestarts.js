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
function Fivestarts(props)
{
    const {numberofstars} = props
    return <View style={{
        flexDirection : 'row',
        justifyContent :'flex-end'
    }} >
        {[0,1,2,3,4].map(item => <Icon 
        key = {`${item}`}
        style={{marginEnd: 2}}
        name='star' 
        size={10} 
        color = {item <= numberofstars -1 ? colors.warning : colors.inactive} 
        />)}
    </View>
}
export default Fivestarts