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
import { images, colors, icons, fontSizes } from '../../constants'
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
    user as UserRepository,
    population as PopulationRepository
} from '../../repositories'
import { SafeAreaView } from 'react-navigation';
import { converDatetimeToString } from '../../utilies/DateTime';
import { FlatList } from 'react-native-gesture-handler';
import ListFriendItem from './ListFriendItem';
import { UIHeader } from '../../components';
function ListFriend(props) {
    const [friend , setFriend] = useState([
        {
            url: 'https://randomuser.me/api/portraits/men/10.jpg',
            username: 'Aaaaaaaaaaaaa'
        },
        {
            url: 'https://randomuser.me/api/portraits/men/20.jpg',
            username: 'Bbbbbbbbbbbbb'
        },
        {
            url: 'https://randomuser.me/api/portraits/men/30.jpg',
            username: 'Ccccccccccccc'
        },
        {
            url: 'https://randomuser.me/api/portraits/men/40.jpg',
            username: 'Ddddddddddddd'
        },
        {
            url: 'https://randomuser.me/api/portraits/men/50.jpg',
            username: 'Eeeeeeeeeeeee'
        },
        {
            url: 'https://randomuser.me/api/portraits/men/60.jpg',
            username: 'Ffffffffffff'
        },
        {
            url: 'https://randomuser.me/api/portraits/men/70.jpg',
            username: 'Hhhhhhhhhhhhhh'
        },
        {
            url: 'https://randomuser.me/api/portraits/men/80.jpg',
            username: 'Iiiiiiiiiiiiii'
        },
        {
            url: 'https://randomuser.me/api/portraits/men/90.jpg',
            username: 'Kkkkkkkkkkkk'
        },
        {
            url: 'https://randomuser.me/api/portraits/women/90.jpg',
            username: 'Llllllllllll'
        },
        {
            url: 'https://randomuser.me/api/portraits/women/80.jpg',
            username: 'Nnnnnnnnnnnnn'
        },
        {
            url: 'https://randomuser.me/api/portraits/women/70.jpg',
            username: 'Mmmmmmmmmmmm'
        },
        {
            url: 'https://randomuser.me/api/portraits/women/60.jpg',
            username: 'Ooooooooooo'
        },
        {
            url: 'https://randomuser.me/api/portraits/women/50.jpg',
            username: 'Ppppppppppppp'
        },
        {
            url: 'https://randomuser.me/api/portraits/women/40.jpg',
            username: 'Rrrrrrrrrrrr'
        },
        {
            url: 'https://randomuser.me/api/portraits/women/30.jpg',
            username: 'Sssssssssss'
        },
        {
            url: 'https://randomuser.me/api/portraits/women/20.jpg',
            username: 'Ttttttttttt'
        },
        {
            url: 'https://randomuser.me/api/portraits/women/10.jpg',
            username: 'Uuuuuuuuuuuu'
        },
        {
            url: 'https://randomuser.me/api/portraits/women/10.jpg',
            username: 'zzzzzzzzzzzzzzz'
        },
    ])
    // const {url ,username} = props.route.params.user
    const {navigate , goBack} = props.navigation
    return <View style= {{ 
        flexDirection : 'column',
        
    }}>
        <UIHeader 
            title={'List Friend'}  
            leftIconName = {"arrow-left"}
            rightIconName = {"search"}
            onPressLeftIcon={()=>{
               goBack()
            }}
            onPressRightIcon={()=>{
                alert('press right icon')
            }}
        />
        <FlatList style={{
            // flex: 1,
            // backgroundColor: 'red',
        }}
            data={friend}
            renderItem={({ item }) => {
                return <ListFriendItem
                    onPress={() => {
                        alert(`your press ${item.username}`)
                    }}
                    item ={item} key={`${item.username}`} />
            }}
        />
    </View>
}
export default ListFriend