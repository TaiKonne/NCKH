import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    FlatList
} from 'react-native'
import { images, colors, icons, fontSizes } from '../../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { UIHeader } from '../../components'
import ChatItem from './ChatItem'
import {
    auth,
    firebaseDatabase,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
    onAuthStateChanged,
    getDatabase,
    firebaseDatabaseRef,
    firebaseSet,
    child,
    get,
    onValue,
} from '../../Firebase/firebase'
import AsyncStorage from '@react-native-async-storage/async-storage'
function Chat(props) {
    const [users, setusers] = useState([
        // {
        //     url: 'http://randomuser.me/api/portraits/women/10.jpg',
        //     name: 'Hồng Vân',
        //     firstMessage: 'Dem qua Tai tuyet lam <3',
        //     numberofmessageunread: 3
        // },
    ])
    const { navigation, route } = props
    const { navigate, goBack } = navigation

    useEffect(() => {
        onValue(firebaseDatabaseRef(firebaseDatabase, 'users'), async (snapshot) => {
            if (snapshot.exists()) {
                let snapshotObject = snapshot.val()
                let stringUser = await AsyncStorage.getItem("user")
                let myUserId = JSON.parse(stringUser).userId
                setusers(Object.keys(snapshotObject).
                    filter(eachKey => eachKey != myUserId).map(eachKey => {
                        let eachObject = snapshotObject[eachKey]
                        return {
                            //profile mặc định của url
                            url: 'https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/308603103_805948500437474_2230413659663098451_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3oKzIsQAkdoAX9bHwIy&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfAAklXdyT-NAnXYzXWj4PBzZ_2QOijwG3n33TZT-SDyLQ&oe=640452BD',
                            name: eachObject.email,
                            email: eachObject.email,
                            accessToken: eachObject.accessToken,
                            numberOfUnreadMessages: 0,
                            userId: eachKey,
                        }
                    }))
            }
            else {
                console.log("Không có dữ liệu được xác định")
            }
        })
    }, [])

    return <View style={{
        flexDirection: 'column',

    }}>
        <UIHeader
            title={"Notifications"}
            leftIconName={"arrow-left"}
            rightIconName={"search"}
            onPressLeftIcon={() => {
                alert('press left icon')
            }}
            onPressRightIcon={() => {
                alert('press right icon')
            }}
        />
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginStart: 10
        }}>
            <Text style={{
                color: 'black',
                fontSize: fontSizes.h6,
            }} >10 unread message</Text>
            <Icon
                style={{ padding: 15 }}
                name={'search'}
                size={15}
                color={'black'}
                onPress={() => {
                    alert('You press delete')
                }}
            />
        </View>
        <FlatList style={{

        }}
            data={users}
            renderItem={({ item }) => <ChatItem
                onPress={() => {
                    navigate('Messenger', { user: item })
                }}
                user={item} key={item.url} />}
        />
    </View>
}
export default Chat