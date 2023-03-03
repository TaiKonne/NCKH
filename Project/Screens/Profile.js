import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    Keyboard,
    KeyboardAvoidingView,
    FlatList
} from 'react-native'
import { images, colors, icons, fontSizes } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
    user as UserRepository,
    population as PopulationRepository
} from '../repositories'
import { SafeAreaView } from 'react-navigation';
import { converDatetimeToString } from '../utilies/DateTime';
import ListFriend from './ListFriend/ListFriend';
import { ScrollView } from 'react-native-gesture-handler';

function Profile(props) {
    // UserRepository.getUserDetail()
    const [add,setAdd]=useState(0);
    const[view,setview] = useState('Theo dõi')


    const [user, setUser] = useState({})
    useEffect(() => {
        UserRepository.getUserDetail()
            .then(responseUser => setUser(responseUser))
    }, [])

    const { dateofbirth, email,
        gender, userId, address,
        username, url, phone, registerdate } = user

    const { navigation, route } = props
    //functions of navigate to/back
    const { navigate, goBack } = navigation
    return <ScrollView style={{
        flex: 1,
        backgroundColor: 'white',
        // paddingTop:50,
        // paddingStart:20,
    }} >
        {/* Background avatar */}
        <View style={{
        }} >
            <ImageBackground source={images.hoa_giay_1}  >
                <Image style={{
                    width: 160,
                    height: 160,
                    resizeMode: 'cover',
                    borderRadius: 80,
                    alignSelf: 'center',
                    marginBottom: 20,
                    marginTop: 20
                }}
                    source={{
                        uri: url,
                    }} />
            </ImageBackground>
            <Text style={{
                fontWeight: 'bold',
                fontSize: fontSizes.h2,
                alignSelf: 'center',
                color: 'black',
                marginBottom: 20
            }}>{username} </Text>
        </View>
        <View style={{ backgroundColor: colors.inactive, height: 1, width: 300, marginBottom: 20, alignSelf: 'center' }}></View>
        {/* button add + ibox*/}
        <View style={{
            flexDirection: 'row',
            // backgroundColor : 'pink'
        }}>
            {/* add friend */}
            <TouchableOpacity onPress={() => {
                // alert('add friend')
                if(add == 0)
                {
                    setview('Đã theo dõi')
                    setAdd(1)
                }
                else 
                {
                    setview('  Theo dõi  ')
                    setAdd(0)
                }
            }}>
                <View style={{
                    backgroundColor: colors.primary,
                    padding: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginStart: 20,
                    borderRadius: 10,

                }}>
                    {/* <Icon
                        style={{ marginEnd: 10 }}
                        name='user-plus'
                        size={20}
                        color={colors.inactive}
                    /> */}
                    {add==0 ? <Icon
                        style={{ marginEnd: 10 }}
                        name='user-plus'
                        size={20}
                        color={colors.inactive}
                    /> : <Icon
                            style={{ marginEnd: 10 }}
                            name='check'
                            size={20}
                            color={colors.inactive}
                        />}
                    <Text style={{
                        fontSize: fontSizes.h4,
                        color: 'black'
                    }} >{view}</Text>
                </View>
            </TouchableOpacity>
            <View style={{ flex: 1 }}></View>
            {/* inbox */}
            <TouchableOpacity onPress={() => {
                alert('Go to Messenger')
                // navigate('Messenger')
            }}>
                <View style={{
                    backgroundColor: colors.primary,
                    paddingVertical: 10,
                    paddingHorizontal: 30,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginEnd: 20,
                    borderRadius: 10,
                    paddingStart: 33

                }}>
                    <Icon
                        style={{
                            marginEnd: 10,
                        }}
                        name='file'
                        size={20}
                        color={colors.inactive}
                    />
                    <Text style={{
                        fontSize: fontSizes.h4,
                        color: 'black',
                    }} >Nhắn tin</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={{
            height: 45,
            padding: 10,
            opacity: 0.3,
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 10,
            marginBottom: 10,
            borderColor: 'black',
            borderWidth: 1,
            flexDirection: 'row'
        }} >
            <Text style={{
                color: 'black',
                fontSize: fontSizes.h3 * 0.9,
                color: 'black',
                fontWeight: 'bold'
            }}>Information</Text>
            <View style={{ flex: 1 }} ></View>
            <TouchableOpacity
                onPress={() => {
                    navigate('Settings')
                }}>
                <Icon
                    style={{ marginEnd: 10 }}
                    name='cogs'
                    size={20}
                    color={colors.inactive}
                />
            </TouchableOpacity>
        </View>
        <View style={{
            flexDirection: 'row',
            paddingVertical: 5,
            alignItems: 'center'
        }} >
            <Text style={{
                color: 'black',
                fontSize: fontSizes.h4,
                paddingStart: 10,
            }}>Date Of Birth:</Text>
            <Text style={{
                color: 'black',
                fontSize: fontSizes.h4,
                paddingStart: 10,
                paddingEnd: 10
            }}>{converDatetimeToString(dateofbirth)}</Text>
        </View>
        <View style={{
            flexDirection: 'row',
            paddingVertical: 5,
            alignItems: 'center'
        }} >
            <Text style={{
                color: 'black',
                fontSize: fontSizes.h4,
                paddingStart: 10,
            }}>Gender: </Text>
            <Text style={{
                color: 'black',
                fontSize: fontSizes.h4,
                paddingStart: 10,
                paddingEnd: 10
            }}>{gender}</Text>
        </View>
        <View style={{
            flexDirection: 'row',
            paddingVertical: 5,
            alignItems: 'center'
        }} >
            <Text style={{
                color: 'black',
                fontSize: fontSizes.h4,
                paddingStart: 10,
            }}>Address: </Text>
            <Text style={{
                color: 'black',
                fontSize: fontSizes.h4,
                paddingStart: 10,
                paddingEnd: 10
            }}>{address}</Text>
        </View>
        <View style={{
            height: 45,
            padding: 10,
            opacity: 0.3,
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 10,
            marginBottom: 10,
            borderColor: 'black',
            borderWidth: 1,
            flexDirection: 'row'
        }} >
            <Text style={{
                color: 'black',
                fontSize: fontSizes.h3 * 0.9,
                color: 'black',
                fontWeight: 'bold'
            }}>Contact</Text>
            <View style={{ flex: 1 }} ></View>
            <TouchableOpacity
                onPress={() => {
                    navigate('Settings')
                }}>
                <Icon
                    style={{ marginEnd: 10 }}
                    name='cogs'
                    size={20}
                    color={colors.inactive}
                />
            </TouchableOpacity>
        </View>
        <View style={{
            flexDirection: 'row',
            paddingVertical: 5,
            alignItems: 'center'
        }} >
            <Text style={{
                color: 'black',
                fontSize: fontSizes.h4,
                paddingStart: 10,
            }}>Phone Number: </Text>
            <Text style={{
                color: 'black',
                fontSize: fontSizes.h4,
                paddingStart: 10,
                paddingEnd: 10
            }}>{phone}</Text>
        </View>
        <View style={{
            flexDirection: 'row',
            paddingVertical: 5,
            alignItems: 'center'
        }} >
            <Text style={{
                color: 'black',
                fontSize: fontSizes.h4,
                paddingStart: 10,
            }}>Email: </Text>
            <Text style={{
                color: 'black',
                fontSize: fontSizes.h4,
                paddingStart: 10,
                paddingEnd: 10
            }}>{email}</Text>
        </View>
        {/* Layout Friends */}
        <View style={{
            height: 45,
            padding: 10,
            opacity: 0.3,
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 10,
            marginBottom: 10,
            borderColor: 'black',
            borderWidth: 1,
            flexDirection: 'row'
        }} >
            <Text style={{
                color: 'black',
                fontSize: fontSizes.h3 * 0.9,
                color: 'black',
                fontWeight: 'bold'
            }}>Friends</Text>
            <View style={{ flex: 1 }} ></View>
            <TouchableOpacity
                onPress={() => {
                    navigate('ListFriend')
                }}>
                <View>
                    <Text style={{
                        fontSize: fontSizes.h4,
                        color: 'black',
                        fontWeight: 'bold'
                    }}>View</Text>
                </View>
            </TouchableOpacity>
        </View>
        {/* Layout Pictures */}
        <View style={{
            height: 45,
            padding: 10,
            opacity: 0.3,
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 10,
            marginBottom: 10,
            borderColor: 'black',
            borderWidth: 1,
            flexDirection: 'row'
        }} >
            <Text style={{
                color: 'black',
                fontSize: fontSizes.h3 * 0.9,
                color: 'black',
                fontWeight: 'bold'
            }}>Pictures</Text>
            <View style={{ flex: 1 }} ></View>
            <TouchableOpacity
                onPress={() => {
                    navigate('PicStorage')
                }}>
                <View>
                    <Text style={{
                        fontSize: fontSizes.h4,
                        color: 'black',
                        fontWeight: 'bold'
                    }}>View</Text>
                </View>
            </TouchableOpacity>
        </View>
    </ScrollView>
}
export default Profile