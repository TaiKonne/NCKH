import React , {useState , useEffect} from 'react'
import{
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    Keyboard
} from 'react-native'
import {images , colors , icons , fontSizes} from '../../constants'
import  Icon from 'react-native-vector-icons/FontAwesome5'
import { UIHeader } from '../../components'
import MessengerItem from './MessengerItem'
function Messenger(props)
{
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
    // alert(JSON.stringify(props.route.params.user))
    const {url ,name} = props.route.params.user
    const {navigate , goBack} = props.navigation
    return <View style= {{ 
        flexDirection : 'column',
        
    }}>
        <UIHeader 
            title={name}  
            leftIconName = {"arrow-left"}
            rightIconName = {"ellipsis-v"}
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
            data={chatHistory}
            renderItem={({ item }) => {
                return <MessengerItem
                    onPress={() => {
                        alert(`your press ${item.timestamp}`)
                    }}
                    item ={item} key={`${item.timestamp}`} />
            }}
        />
    </View>
}
export default Messenger