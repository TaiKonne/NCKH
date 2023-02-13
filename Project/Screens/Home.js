import React, { useState, useEffect } from 'react';
import {
    Image,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
} from 'react-native'
import { icons, images, colors } from '../constants/index.js'
import { UIButton } from '../components'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

function Home(props) {
    return <View
        style={{
            flex: 1
        }}>
        <View
            style={{
                backgroundColor: 'blue',
                height: 40
            }}>
            <Text>nút tìm kiếm với logo trường và tin nhắn</Text>
        </View>
        <View>
            <Text>
                ảnh đại diện và đăng bài viết
            </Text>
        </View>
        <View style={{
            backgroundColor: 'green',
            height: 50,
        }}>
            <Text>ngu vl mayfdsaffjkslfdsjaklf;jdksjkla;</Text>
        </View>
        <View>
            <Text>
                phần newsfeed
            </Text>
        </View>
    </View>
};

export default Home