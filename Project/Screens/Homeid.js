import React, { useState, useEffect } from 'react';
import { SearchBar } from 'react-native-elements';
import {
    Image,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Button,
    Share,
    TextInput,
} from 'react-native'

import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { Avatar } from 'react-native-paper';
import Video from 'react-native-video'
import VideoPlayer from 'react-native-video-controls'
import Constants_Home from './Constants_Home.js'
import { images, colors, icons, fontSizes } from '../constants'
import UIButton from '../components/UIButton.js';

function Homeid(props) {

    let { name, avatar, status, video, ima, interact } = props.user;
    let ID = props.user
    let INTERACT = props.user.interact

    const [liked, setLiked] = useState('Like')
    const [add, setAdd] = useState(0)
    const [showTextInput, setShowTextInput] = useState(0);
    const [cntcomment, setcntcomment] = useState(INTERACT.cmt)
    const [cntLike,setcntLike] = useState(INTERACT.likes)
    const [cntShare,setcntShare] = useState(INTERACT.share)
    return (
        <View>
            <View style={{  // status
                // borderWidth: 1,
                // borderColor: 'black',
                height: 'auto',
                marginVertical: 6,
                justifyContent: 'center',
                backgroundColor: 'white'
                // alignItems: 'center',
            }}>
                <View style={{ // avatar and content status
                    height: 50,
                    // borderWidth: 1,
                    // borderColor: 'green',
                    width: '100%',
                    flexDirection: 'row',
                    marginLeft: 6,
                    marginRight: 6,
                }}>
                    <Avatar.Image size={50} source={{
                        uri: avatar
                    }} />
                    <Text style={{
                        fontWeight: 'bold',
                        color: 'black',
                        fontSize: 15,
                        height: 40,
                        marginLeft: 12,
                        marginTop: 5
                    }}>
                        {name}
                    </Text>
                </View>
                <View style={{ // text
                    marginVertical: 5,
                    // borderWidth: 1,
                    // borderColor: 'yellow',
                    color: 'black',
                    marginLeft: 6,
                    marginRight: 6,
                }}>
                    <Text
                        style={{ //hashtag
                            fontSize: 16,
                            color: 'black',
                        }}>
                        {status}
                    </Text>
                </View>

                {/* constants status return */}
                <Constants_Home cons={ID} />

                <View style={{ // cmt and like
                    borderWidth: 1,
                    borderColor: 'green',
                    height: 80,
                    
                }}>
                    <View style={{  // trạng thái tổng quan like, cmt, share
                        height: '50%',
                        flexDirection: 'row',
                    }}>
                        <View
                            style={{
                                width: '33.3%',
                                flexDirection: 'row',
                                // justifyContent: 'center',
                                alignItems: 'center',
                                marginStart: 20,
                                
                            }}>
                            <Icon name={'heart'} style={{
                                color: colors.inactive,
                                marginRight:3
                            }} />
                            <Text style={{
                                color: colors.inactive,
                            }} >{cntLike}</Text>
                        </View>
                        <View
                            style={{
                                width: '33.3%',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',

                            }}>
                            <Icon name={'comment'} style={{
                                color: colors.inactive,
                                marginRight:3
                            }} />
                            <Text style={{
                                color: colors.inactive,
                            }} >{cntcomment}</Text>
                        </View>
                        <View
                            style={{
                                width: '33.3%',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                // marginEnd: 25,
                                // paddingEnd:20

                            }}>
                            <Icon name={'share'} style={{
                                color: colors.inactive,
                                marginRight:3
                            }} />
                            <Text style={{
                                color: colors.inactive,
                            }} >{cntShare}</Text>
                        </View>
                    </View>

                    {/* ----------------------- */}

                    <View style={{  // trạng thái detail
                        flexDirection: 'row',
                        borderColor: 'grey',
                        borderTopWidth: 0.5,
                        height: '50%',
                    }}>
                        <TouchableOpacity
                            onPress={() => {
                                if (add == 0) {
                                    setLiked('Liked')
                                    setAdd(1)
                                    setcntLike(cntLike +1)
                                }
                                else {
                                    setLiked('Like')
                                    setAdd(0)
                                    setcntLike(cntLike -1)
                                }
                            }}
                            style={{
                                width: '33.3%',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderwidth: 1,

                            }}>
                            <Icon name={'thumbs-up'}
                                size={16}
                                style={{
                                    marginRight: 3,
                                    color: add == 0 ? colors.inactive : colors.primary
                                }} />
                            <Text style={{
                                fontSize: 16,
                                color: add == 0 ? colors.inactive : colors.primary
                            }} >{liked}</Text>
                        </TouchableOpacity >
                        <TouchableOpacity
                            style={{
                                width: '33.3%',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            onPress={()=>{
                                if(showTextInput==1)
                                    setShowTextInput(0)
                                else 
                                    setShowTextInput(1)
                            }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Icon
                                    name={'comment'}
                                    size={16}
                                    style={{
                                        marginRight: 3,
                                        color: colors.inactive,
                                    }}
                                />
                                <Text
                                    style={{
                                        fontSize: 16,
                                        color: colors.inactive,
                                    }}>
                                    Comment
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={()=>{
                                setcntShare(cntShare+1)
                            }}
                            style={{
                                width: '33.3%',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                        }}>
                            <View
                                style={{
                                    // width: '33.3%',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Icon name={'share'} size={16} style={{
                                    marginRight: 3,
                                    color: colors.inactive,
                                }} />
                                <Text style={{
                                    fontSize: 16,
                                    color: colors.inactive,
                                }} >Share</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {showTextInput == true ? (
                <View style={{
                    backgroundColor: 'skyblue',
                    flexDirection: 'row',
                    // flex: 1,
                }}>
                    <TextInput
                        style={{
                            backgroundColor:'white',
                            borderWidth: 1,
                            borderColor: 'gray',
                            marginStart: 5,
                            // marginEnd: 5,
                            height: 40,
                            width: 290,
                            color: 'black',
                        }}
                        placeholder="Type your comment here..."
                        autoFocus
                        // onBlur={() => setShowTextInput(false)}
                    />
                    <View style={{
                        backgroundColor: 'skyblue',
                        flex: 1,
                        // marginEnd: 5,
                    }}>
                        <TouchableOpacity
                            onPress={()=>{
                                // alert('comments')
                                setcntcomment(cntcomment+1)
                            }}
                        >
                            <Icon name={'paper-plane'}
                                size={30}
                                style={{
                                    color: colors.primary,
                                    alignItems: 'center',
                                    marginStart: 10,
                                    marginTop: 2
                            }} />
                        </TouchableOpacity>
                    </View>
                </View>
            ) : ""}
        </View >
    )

};

export default Homeid