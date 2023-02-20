import React, { useState, useEffect } from 'react';
import { SearchBar } from 'react-native-elements';
import {
    Image,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import { icons, images, colors } from '../constants/index.js'
import { UIButton } from '../components'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { Avatar } from 'react-native-paper';
import Homeid from './Homeid'

function Home(props) {
    //list of status = state
    const [Id, setId] = useState(
        [
            {
                name: 'Tấn Tài',
                avatar: 'https://64.media.tumblr.com/faaae55b9e5ab44fd8de1fb8c4ac94b8/02ee1dcb4b1e79bc-b1/s250x400/8bd68f7f7c90cf088a3f48fba60167bc420a9184.jpg',
                status: 'Tôi có ước muốn đơn giản là được ngủ cả ngày.',
                video: '',
                ima: '',
                interact: 'like, cmt, share',
            },
            {
                name: 'Quốc Dũng',
                avatar: 'https://64.media.tumblr.com/faaae55b9e5ab44fd8de1fb8c4ac94b8/02ee1dcb4b1e79bc-b1/s250x400/8bd68f7f7c90cf088a3f48fba60167bc420a9184.jpg',
                status: 'Trời ơi, hôm nay trời đẹp thế nhỉ',
                video: '',
                ima: '',
                interact: 'like, cmt, share',
            },
            {
                name: 'Minh Thắng NO.1 coder',
                avatar: 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-1/295734462_1272754933256041_6976567951737309521_n.jpg?stp=dst-jpg_p320x320&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Pj28Gj1ybQYAX8dHdLo&_nc_ht=scontent.fsgn3-1.fna&oh=00_AfAWQ7NLohNm6Uj-JGVhVCUZJwEdTLM6L2zVZe0R9tZwzQ&oe=63F6A221',
                status: 'Trời ơi, hôm nay trời đẹp thế nhỉ',
                video: '',
                ima: '',
                interact: 'like, cmt, share',
            },
            {
                name: 'Kiệt Lee siuuu',
                avatar: 'https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-6/308603103_805948500437474_2230413659663098451_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lco8NqghdCgAX8LKXS2&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfDgw8c_pCAQfp-OT2_Wju3Vd7KE5BWSDG78kVd2W4o3Hw&oe=63F67AFD',
                status: 'Trời ơi, hôm nay trời đẹp thế nhỉ',
                video: '',
                ima: '',
                interact: 'like, cmt, share',
            },
            {
                name: 'Anh Minh',
                avatar: 'https://scontent.fsgn13-4.fna.fbcdn.net/v/t1.6435-9/84551161_514130042857644_6888616149617999872_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=nsaah9aWH5QAX8g-9Er&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfCpgLjM9czLG9IWAvTdrGUSenLV8TNhA9mTTQGFFeReYQ&oe=64186CE4',
                status: 'Tôi nhớ những ngày được đi chơi vui vẻ',
                video: '',
                ima: '',
                interact: 'like, cmt, share',
            },
            {
                name: 'Anh Trung',
                avatar: 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/283579103_1332300267263416_6711789697801402891_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tTvVHwO6hesAX-0e7AQ&_nc_ht=scontent.fsgn13-2.fna&oh=00_AfCBBTyyXKXPfU5GordFxViqslAzJ8b7YuZEwgo7G1VlNw&oe=63F5CEB1',
                status: 'Kiếm việc làm tỷ đô không khó, chỉ cần tìm đến tôi, bạn sẽ có tất cả',
                video: '',
                ima: '',
                interact: 'like, cmt, share'
            }
        ]
    )
    return <View style={{
        flex: 1,
        backgroundColor: 'skyblue'
    }}>

        <View // bar search and bar setting profile
            style={{
                backgroundColor: 'blue',
                height: 80,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                borderWidth: 1,
                borderColor: 'black',

            }}>
            <Text>thêm bar search</Text>
            <Icon name={"bars"}

                style={{
                    fontSize: 25,
                    marginEnd: 25,
                    color: 'black',
                    borderWidth: 1,
                    borderColor: 'black',
                }}
            />
        </View>
        <ScrollView // màn hình status
        >
            {Id.map(eachUser => < Homeid user={eachUser} />)}

        </ScrollView>
    </View>
};

export default Home