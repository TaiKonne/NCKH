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
import Fivestarts from './Fivestarts';

function GridItem(props) {
    const {item,index , onPress} =props
    return <View style={{
        flex: 0.5,
        // height: 200,
        marginTop: 5,
        marginRight: 10,
        marginBottom: 5,
        marginLeft: index % 2 == 0 ? 10 : 0,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: colors.inactive,
    }}>
        <View style={{
            flexDirection: 'row',
            marginTop: 10,
        }} >
            <Image style={{
                width: 70,
                height: 90,
                resizeMode: 'cover',
                borderRadius: 20,
                marginRight: 15
            }}
                source={{
                    uri: item.url,
                }} />
            <Text style={{
                color: 'black',
                fontSize: fontSizes.h3,
                fontWeight: 'bold',
                // backgroundColor : 'red',
                flex: 1,
                textAlign: 'right'
            }}>$ {item.price} </Text>
        </View>
        <Text style={{
            color: colors.primary,
            fontSize: fontSizes.h5,
            fontWeight: 'bold',
            marginHorizontal: 10,
            marginTop: 5,
        }}>{item.productname}
        </Text>
        {
            item.specifitations.map(specifitations =>
                <Text
                    key={specifitations}
                    style={{
                        color: 'black',
                        fontSize: fontSizes.h6,
                        paddingHorizontal: 10,
                        paddingBottom: 10
                    }}>* {specifitations}
                </Text>)
        }
        <View style={{
            flexDirection: 'row',
            padding: 10
        }} >
            <TouchableOpacity
                onPress={onPress}
                style={{ flexDirection: 'row' }} >
                <Icon
                    style={{ marginEnd: 5 }}
                    name='heart'
                    size={22}
                    color={item.isSaved == undefined || item.isSaved == false ? colors.inactive : 'red'} />
                <Text style={{
                    color: item.isSaved == undefined || item.isSaved == false ? colors.inactive : 'red',
                    fontSize: fontSizes.h6,
                    width: 60
                }} >Saved for later</Text>
            </TouchableOpacity>
            <View style={{
                flex: 1,

            }} >
                <Fivestarts numberofstars={item.starts} />
                <Text style={{
                    color: colors.success,
                    fontSize: fontSizes.h6 * 0.8,
                    textAlign: 'right',
                    paddingTop: 5
                }} >{item.reviews} reviews</Text>
            </View>
        </View>
    </View>
}
export default GridItem