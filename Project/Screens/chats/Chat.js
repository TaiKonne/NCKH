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
function Chat(props) {
    const [users, setusers] = useState([
        {
            url: 'http://randomuser.me/api/portraits/women/10.jpg',
            name: 'Thu Van',
            firstMessage: 'Dem qua Tai tuyet lam <3',
            numberofmessageunread: 3
        },
        {
            url: 'http://randomuser.me/api/portraits/women/20.jpg',
            name: 'Thao Van',
            firstMessage: 'cho em lam quen nha anh Tai',
            numberofmessageunread: 10
        },
        {
            url: 'http://randomuser.me/api/portraits/women/30.jpg',
            name: 'Thi Van',
            firstMessage: 'con lam ban trai co nha Tai',
            numberofmessageunread: 12
        },
        {
            url: 'http://randomuser.me/api/portraits/women/40.jpg',
            name: 'Xuan Van',
            firstMessage: 'anh Tai co nguoi yeu chua',
            numberofmessageunread: 1
        },
        {
            url: 'http://randomuser.me/api/portraits/women/50.jpg',
            name: 'Minh Van',
            firstMessage: 'hom nao lai gap nhau nha em',
            numberofmessageunread: 6
        },
        {
            url: 'http://randomuser.me/api/portraits/women/60.jpg',
            name: 'Thao Van',
            firstMessage: 'chi rat thich Tai luon',
            numberofmessageunread: 3
        },
        {
            url: 'http://randomuser.me/api/portraits/men/70.jpg',
            name: 'Lê Tuấn Kiệt',
            firstMessage: 'Tai muon have relationship with me',
            numberofmessageunread: 8
        },
        {
            url: 'http://randomuser.me/api/portraits/women/80.jpg',
            name: 'Thao Van',
            firstMessage: 'chi moi chuyen cho Tai 10m tình phí',
            numberofmessageunread: 0
        },
        {
            url: 'https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/277664137_2307041836119657_7469256947407439088_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gcmANTe-27gAX-Ov-dR&_nc_ht=scontent.fvca1-3.fna&oh=00_AfAstIFUQDl_swhJa_9BznJoDJxElAHL56f6LUkpGlWYBw&oe=63FF7507',
            name: 'Anh Phan',
            firstMessage: 'cho muon 5 trieu lam MV di Tai',
            numberofmessageunread: 100
        },
        {
            url: 'http://randomuser.me/api/portraits/women/10.jpg',
            name: 'Kim Van',
            firstMessage: 'alo alo , sao ko tra loi tin nhan cua em',
            numberofmessageunread: 11
        },
        {
            url: 'http://randomuser.me/api/portraits/women/20.jpg',
            name: 'Nguyen Thi Thao Van',
            firstMessage: 'tệ ! Tài thật tệ',
            numberofmessageunread: 112
        },
    ])
    const { navigation, route } = props
    const { navigate, goBack } = navigation
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