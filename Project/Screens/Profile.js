import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    Keyboard,
    KeyboardAvoidingView
} from 'react-native'
import { images, colors, icons, fontSizes } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
    user as UserRepository,
    population as PopulationRepository
} from '../repositories'
import { SafeAreaView } from 'react-navigation';
import { converDatetimeToString } from '../utilies/DateTime';

function Profile(props) {
    // UserRepository.getUserDetail()

    const [user, setUser] = useState({})
    useEffect(() => {
        UserRepository.getUserDetail()
            .then(responseUser => setUser(responseUser))
    }, [])

    const { dateofbirth, email,
        gender, userId, address,
        username, url, phone, registerdate } = user
    return <SafeAreaView style={{
        flex: 1,
        backgroundColor: 'green',
        paddingTop: 50,
        paddingStart: 20,
    }} >
        <Image style={{
            width: 160,
            height: 160,
            resizeMode: 'cover',
            borderRadius: 80,
            alignSelf: 'center',
            marginBottom: 20
        }}
            source={{
                uri: url,
            }} />
        <View style={{ flexDirection: 'row' }}  >
            <Text style={{
                fontWeight: 'bold', fontSize: fontSizes.h5
            }}>Username: </Text>
            <Text>{username}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}  >
            <Text style={{
                fontWeight: 'bold', fontSize: fontSizes.h5
            }}> Email: </Text>
            <Text>{email}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}  >
            <Text style={{
                fontWeight: 'bold', fontSize: fontSizes.h5
            }} > Date Of Birth: </Text>
            <Text>{converDatetimeToString(dateofbirth)}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}  >
            <Text style={{
                fontWeight: 'bold', fontSize: fontSizes.h5
            }}>Gender: </Text>
            <Text>{gender}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}  >
            <Text style={{
                fontWeight: 'bold', fontSize: fontSizes.h5
            }}>address: </Text>
            <Text>{address}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}  >
            <Text style={{
                fontWeight: 'bold', fontSize: fontSizes.h5
            }}>Phone: </Text>
            <Text>{phone}</Text>
        </View>
    </SafeAreaView>
}
export default Profile