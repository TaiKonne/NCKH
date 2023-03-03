import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    Keyboard,
} from 'react-native'
import { images, colors, icons, fontSizes } from '../../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { UIHeader } from '../../components'
import MessengerItem from './MessengerItem'
import { TextInput } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
    auth,
    onAuthStateChanged,
    firebaseDatabaseRef,
    firebaseSet,
    firebaseDatabase
} from '../../Firebase/firebase'

function Messenger(props) {
    const [typedText, setTypedText] = useState('')
    const [chatHistory, setChatHistory] = useState([
        {
            url: 'https://randomuser.me/api/portraits/men/70.jpg',
            showUrl: true,
            isSender: true,
            messenger: "Hello",
            timestamp: 1641654238000,
        },
        {
            url: 'https://randomuser.me/api/portraits/men/70.jpg',
            showUrl: false,
            isSender: true,
            messenger: "How are you ?",
            timestamp: 1641654298000,
        },
        {
            url: 'https://randomuser.me/api/portraits/men/70.jpg',
            showUrl: false,
            isSender: true,
            messenger: "How about your work ? Do you want go out and have dinner with me in 5 start restaurant ",
            timestamp: 1641654538000,
        },
        {
            url: 'https://randomuser.me/api/portraits/women/50.jpg',
            showUrl: true,
            isSender: false,
            messenger: "Yes",
            timestamp: 1641654598000,
        },
        {
            url: 'https://randomuser.me/api/portraits/women/50.jpg',
            showUrl: false,
            isSender: false,
            messenger: "I am fine",
            timestamp: 1641654598000,
        },
        {
            url: 'https://randomuser.me/api/portraits/men/70.jpg',
            showUrl: true,
            isSender: true,
            messenger: "Let's go out",
            timestamp: 1641654778000,
        },
    ])
    const { url, name, userId } = props.route.params.user
    const { navigate, goBack } = props.navigation
    return <View style={{
        flexDirection: 'column',
        flex: 1,

    }}>
        <UIHeader
            title={name}
            leftIconName={"arrow-left"}
            rightIconName={"ellipsis-v"}
            onPressLeftIcon={() => {
                goBack()
            }}
            onPressRightIcon={() => {
                alert('press right icon')
            }}
        />
        <FlatList style={{
            flex: 1,
            // backgroundColor: 'red',
        }}
            data={chatHistory}
            renderItem={({ item }) => {
                return <MessengerItem
                    onPress={() => {
                        alert(`your press ${item.timestamp}`)
                    }}
                    item={item} key={`${item.timestamp}`} />
            }}
        />
        <View style={{
            height: 50,
            // backgroundColor: 'red',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderWidth: 0.5,
            borderColor: 'gray'
            // borderTopColor:'black'
        }}>
            <TextInput style={{
                color: 'black',
                paddingStart: 10,
                width: '90%'

            }}
                onChangeText={(typedText) => {

                    setTypedText(typedText)
                }}
                keyboardType='Chat'
                placeholderTextColor={'gray'}
                value={typedText}
                placeholder='Chat ...'
            />
            <TouchableOpacity onPress={async () => {
                if (typedText.trim().length == 0) {
                    return
                }
                let stringUser = await AsyncStorage.getItem("user")
                let myUserId = JSON.parse(stringUser).userId
                let myFriendUserId = props.route.params.user.userId
                let newMessengerObject = {
                    //fake
                    url: 'https://randomuser.me/api/portraits/men/70.jpg',
                    showUrl: false,
                    isSender: true,
                    messenger: typedText,
                    timestamp: (new Date()).getTime(),
                }
                Keyboard.dismiss()
                firebaseSet(firebaseDatabaseRef(
                    firebaseDatabase,
                    `chats/${myUserId} - ${myFriendUserId}`
                ), newMessengerObject).then(() => {
                    setTypedText('')
                })
            }}>
                <Icon style={{
                    // padding: 10,
                    // paddingStart: 5,
                    // backgroundColor: 'white',
                    // width: 50
                    // color:'blue'
                }}
                    name='paper-plane' size={20} color={colors.primary}
                />
            </TouchableOpacity>
        </View>
    </View>
}
export default Messenger