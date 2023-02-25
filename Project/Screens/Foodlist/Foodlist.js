import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
} from 'react-native';

import { images, colors, icons, fontSizes } from '../../constants'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { UIButton } from '../../components'
import Fooditem from './Fooditem';
import { TextInput } from 'react-native-paper';
function Foodlist(props) {
    const [foods, setFoods] = useState([
        {
            name: 'La casa Pasadaasdada',
            url: 'https://www.syracuse.com/resizer/G1-DVqySffpdZIzFreUQjZEPp1M=/arc-anglerfish-arc2-prod-advancelocal/public/4F2YJWUWPJCERCFA5JD6HESA6A.jpg',
            status: 'COMMING SOON',
            price: 123.56,
            website: 'www.piza.com',
            SocialNetwork:
            {
                facebook: 'https://www.facebook.com',
                instagram: 'https://www.zalo.com',
            }
        },
        {
            name: 'La caa',
            url: 'https://www.syracuse.com/resizer/G1-DVqySffpdZIzFreUQjZEPp1M=/arc-anglerfish-arc2-prod-advancelocal/public/4F2YJWUWPJCERCFA5JD6HESA6A.jpg',
            status: 'OPENING NOW',
            price: 56,
            website: 'https://baonghean.vn',
            SocialNetwork:
            {
                facebook: 'https://www.facebook.com',
                twitter: 'https://www.zalo.com',
            }
        },
        {
            name: 'Pasadaasdada',
            url: 'https://www.syracuse.com/resizer/G1-DVqySffpdZIzFreUQjZEPp1M=/arc-anglerfish-arc2-prod-advancelocal/public/4F2YJWUWPJCERCFA5JD6HESA6A.jpg',
            status: 'CLOSING SOON',
            price: 23.56,
            website: 'www.abc.com',
            SocialNetwork:
            {
                // Facebook: 'https://www.facebook.com',
                instagram: 'https://www.zalo.com',
            }
        },
        {
            name: 'adaasdadssssssssss',
            url: 'https://www.syracuse.com/resizer/G1-DVqySffpdZIzFreUQjZEPp1M=/arc-anglerfish-arc2-prod-advancelocal/public/4F2YJWUWPJCERCFA5JD6HESA6A.jpg',
            status: 'CLOSING SOON',
            price: 143.56,
            website: 'www.zzzzz.com',
            SocialNetwork:
            {
                facebook: 'https://www.facebook.com',
                // Zalo : 'https://www.zalo.com',
            }
        },
        {
            name: 'adaasdada',
            url: 'https://www.syracuse.com/resizer/G1-DVqySffpdZIzFreUQjZEPp1M=/arc-anglerfish-arc2-prod-advancelocal/public/4F2YJWUWPJCERCFA5JD6HESA6A.jpg',
            status: 'OPENING NOW',
            price: 123.56,
            website: 'https://baonghean.vn/14-mon-an-tay-ban-nha-nhat-dinh-phai-thu-trong-doi-post116331.html',
            SocialNetwork:
            {
                facebook: 'https://www.facebook.com',
                // Zalo : 'https://www.zalo.com',
            }
        },
        {
            name: 'adaasdadaaaaaaaaaaaaaaa',
            url: 'https://www.syracuse.com/resizer/G1-DVqySffpdZIzFreUQjZEPp1M=/arc-anglerfish-arc2-prod-advancelocal/public/4F2YJWUWPJCERCFA5JD6HESA6A.jpg',
            status: 'CLOSING SOON',
            price: 123.56,
            website: 'https://baonghean.vn/14-mon-an-tay-ban-nha-nhat-dinh-phai-thu-trong-doi-post116331.html',
            SocialNetwork:
            {
                facebook: 'https://www.facebook.com',
                // Zalo : 'https://www.zalo.com',
            }
        },])

    const [catagories, setcatagories] = useState([
        {
            name: 'BBQ',
            url: 'https://st.depositphotos.com/2235295/2442/i/450/depositphotos_24429441-stock-photo-hot-barbecue-label.jpg',
        },
        {
            name: 'Breakfast',
            url: 'https://cdn.vectorstock.com/i/preview-1x/49/92/breakfast-delicious-scrambled-eggs-with-steam-logo-vector-45184992.jpg',
        },
        {
            name: 'Coffee',
            url: 'https://st.depositphotos.com/2235295/2442/i/450/depositphotos_24429441-stock-photo-hot-barbecue-label.jpg',
        },
        {
            name: 'Beer',
            url: 'https://st.depositphotos.com/2235295/2442/i/450/depositphotos_24429441-stock-photo-hot-barbecue-label.jpg',
        },
        {
            name: 'Meat',
            url: 'https://st.depositphotos.com/2235295/2442/i/450/depositphotos_24429441-stock-photo-hot-barbecue-label.jpg',
        },
        {
            name: 'Fish',
            url: 'https://st.depositphotos.com/2235295/2442/i/450/depositphotos_24429441-stock-photo-hot-barbecue-label.jpg',
        },
        {
            name: 'Girls',
            url: 'https://st.depositphotos.com/2235295/2442/i/450/depositphotos_24429441-stock-photo-hot-barbecue-label.jpg',
        },
        {
            name: 'Boys',
            url: 'https://st.depositphotos.com/2235295/2442/i/450/depositphotos_24429441-stock-photo-hot-barbecue-label.jpg',
        }
    ])

    const [searchtext , setsearchtext] = useState('')
    const filteredFood = () => foods.filter(eachfood => eachfood.name.toLowerCase()
                            .includes(searchtext.toLowerCase()))
    filteredFood()
    return <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View>
            <View style={{
                marginHorizontal : 10,
                marginVertical: 10,
                flexDirection : 'row',
                alignItems : 'center'
            }}> 
                <Icon 
                    style={{
                        position: 'absolute',
                        top: 12, 
                        left : 10
                    }}
                    name='search' size={20}  color={'black'} />
                <TextInput
                    autoCorrect= {false}
                    onChangeText = {(text) => {
                        setsearchtext(text)
                    }}
                    style={{
                        backgroundColor: colors.inactive,
                        height: 40,
                        flex: 1,
                        paddingStart: 20,
                        marginEnd: 8,
                        borderRadius: 5,
                        opacity: 0.8
                    }} />
                <Icon name='bars' size={30}  color={'black'} />
            </View>
            <View style={{
                height: 100
            }}>
                <View style={{
                    height: 1,
                    backgroundColor: colors.inactive,
                    
                }} />
                <FlatList
                    horizontal= {true}
                    data={catagories}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => {
                        return <TouchableOpacity 
                            onPress={() => {
                                alert (`Your press ${item.name}`)
                            }}
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Image style={{
                                width: 40,
                                height: 40,
                                resizeMode: 'cover',
                                borderRadius: 25,
                                margin: 10
                            }}
                                source={{
                                    uri: item.url,
                                }} />
                            <Text style={{
                                color: ' black',
                                fontSize: fontSizes.h6
                            }} >{item.name}</Text>
                        </TouchableOpacity>
                    }}
                    style={{
                        flex: 1,
                        // backgroundColor:'red'
                    }} >
                    
                </FlatList>
                <View style={{
                    height: 1,
                    backgroundColor: colors.inactive
                }} />
            </View>
            </View>
            {/* <ScrollView>
                {foods. map(eachfood => <Fooditem food = {eachfood} key ={eachfood.name} />)}
            </ScrollView> */}
            {filteredFood().length > 0 ? <FlatList
                data={filteredFood()}
                renderItem={({ item }) => {
                    return <Fooditem
                        onPress={() => {
                            alert(`your press ${item.name}`)
                        }}
                        food={item} key={item.name} />
                }}
                keyExtractor={eachfood => eachfood.name}
            /> : <View style={{
                flex: 1,
                justifyContent : 'center',
                alignItems : 'center'
            }}>
                <Text style={{
                    color : 'black',
                    fontSize: fontSizes.h3,
                }}> NOT FOUND</Text>
                </View> }
        
    </View>
}
export default Foodlist