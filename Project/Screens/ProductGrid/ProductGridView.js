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
import GridItem from './GridItem';
function ProductGridView(props)
{
    const [product , setProduct] = useState([
        {
            productname : 'May Hut Bui ncc',
            url : 'https://dreamevietnam.vn/wp-content/uploads/2022/01/dreamevietnam-robot-hut-bui-lau-nha-dreame-d9-max-avarta.jpg',
            price: 500,
            specifitations: [
                'Dry clean',
                'cyclone fillter',
                'convinience core',
                'the same shit'
            ],
            reviews : 19,
            starts : 5,
        },
        {
            productname : 'Tu lanh',
            url : 'https://s.meta.com.vn/Data/image/2021/10/02/tu-lanh-hitachi-6-cua-inverter-735-lit-r-zx740kv-1.jpg',
            price: 1200,
            specifitations: [
                'Dry clean',
                'cyclone fillter',
                'convinience core'
            ],
            reviews : 123,
            starts : 4,
        },
        {
            productname : 'May lanh',
            url : 'https://maylanhgiasi.com/wp-content/uploads/2017/02/may-lanh-reetech-rt12.jpg',
            price: 750,
            specifitations: [
                'cyclone fillter',
                'convinience core'
            ],
            reviews : 222,
            starts : 3,
        },
        {
            productname : 'G63 đanh Golf',
            url : 'https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/22/photo1647918565447-1647918565543359042692.jpg',
            price: 6000,
            specifitations: [
                'cyclone fillter',
                'Stronger',
                'Hien Ho singer like that'
            ],
            reviews : 302,
            starts : 2,
        },
        {
            productname : 'Lo nuong',
            url : 'https://kaffbinhduong.vn/wp-content/uploads/2020/08/KF-IK6085O.png',
            price: 250,
            specifitations: [
                'cyclone fillter',
                'convinience core',
                'speed '
            ],
            reviews : 1200,
            starts : 1,
        },
        {
            productname : 'Lo nuong',
            url : 'https://kaffbinhduong.vn/wp-content/uploads/2020/08/KF-IK6085O.png',
            price: 250,
            specifitations: [
                'cyclone fillter',
                'convinience core',
                'speed '
            ],
            reviews : 1200,
            starts : 1,
        },
        {
            productname : 'AAAAAA',
            url : 'https://kaffbinhduong.vn/wp-content/uploads/2020/08/KF-IK6085O.png',
            price: 250,
            specifitations: [
                'This real',
                'that is joke'
            ],
            reviews : 1200,
            starts : 1,
        },
        {
            productname : 'BBBB',
            url : 'https://kaffbinhduong.vn/wp-content/uploads/2020/08/KF-IK6085O.png',
            price: 250,
            specifitations: [
                'cyclone fillter',
                'convinience core',
                'speed '
            ],
            reviews : 1200,
            starts : 1,
        },
        {
            productname : 'CCCCCC',
            url : 'https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/332541782_3443739102619338_8265267943022316021_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dbeb18&_nc_ohc=W71PlYIUYsUAX8gtVPP&_nc_ht=scontent.fsgn16-1.fna&oh=00_AfANYuDP8euVByD65vPPbGmXjMkbEPxwcQ_H_vKm1GY9iQ&oe=63F9BC38',
            price: 2500,
            specifitations: [
                'hahaha',
                'that is joke'
            ],
            reviews : 1210,
            starts : 5,
        },
        {
            productname : 'DDDDD',
            url : 'https://kaffbinhduong.vn/wp-content/uploads/2020/08/KF-IK6085O.png',
            price: 2510,
            specifitations: [
                'This real',
                'that is joke'
            ],
            reviews : 12020,
            starts : 3,
        },
        {
            productname : 'EEEEEE',
            url : 'https://kaffbinhduong.vn/wp-content/uploads/2020/08/KF-IK6085O.png',
            price: 270,
            specifitations: [
                'This real',
                'hahaha'
            ],
            reviews : 200,
            starts : 4,
        },
    ])
    return <View style={{
        flex: 1,
        backgroundColor : 'white'
    }} >
        <FlatList
            style = {{marginTop: 5}}
            data = {product}
            numColumns = {2}
            keyExtractor = {item => item.productname}
            renderItem = {({item ,index}) => <GridItem 
                    item = {item} 
                    index = {index}
                    onPress = {() => {
                        let cloneProducts = product.map(eachproduct => {
                        if (item.productname == eachproduct.productname) {
                            return {
                                ...eachproduct, isSaved: eachproduct.isSaved == false
                                    || eachproduct.isSaved == undefined
                                    ? true : false
                            }
                        }
                        return eachproduct
                    })
                    setProduct(cloneProducts)}} />}
        />
    </View> 
}

export default ProductGridView