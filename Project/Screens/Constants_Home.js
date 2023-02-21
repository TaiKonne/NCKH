import React, { useState, useEffect } from 'react';
import { SearchBar } from 'react-native-elements';
import {
    Image,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    ScrollView, StyleSheet
} from 'react-native'

import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { Avatar } from 'react-native-paper';
import Video from 'react-native-video'
import VideoPlayer from 'react-native-video-controls'
/*
constant: text and !image and !video
constant: text and image and !video
constant: text and !image and video
*/

function Constants_Home(props) {
    let { video, ima } = props.cons
    if (video == '' && ima == '') {
    }
    else if (video == '') {
        return (
            <View style={{ // video or image
                alignItems: 'center',

            }}>
                <Image source={{ uri: ima }} style={{
                    width: '100%',
                    height: 400
                }} />
            </View>
        );
    }
    else if (ima == '') {
        return (
            <View style={styles.container}>
                <Video source={{ uri: video }}
                    style={styles.backgroundVideo}
                    paused={true}
                    controls={true}
                />
            </View>
        )
    }
};

var styles = StyleSheet.create({ // style video anh Minh cầu nguyện
    container: {
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 'auto',
        height: 400,
    },
    backgroundVideo: {
        position: 'absolute',
        backgroundColor: 'red',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,

    },
});


/*
------------------------------------------------- status
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
-------------------------------------------------------- ima
                    <View style={{ // video or image
                        alignItems: 'center',

                    }}>
                        <Image source={{ uri: ima }} style={{
                            width: '100%',
                            height: 400
                        }} />
                    </View>
-------------------------------------------------------- video
                <View style={styles.container}>
                    <Video source={{ uri: video }}
                        style={styles.backgroundVideo}
                        controls={true}
                    />
                </View>

*/
export default Constants_Home;