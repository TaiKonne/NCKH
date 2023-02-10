import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    Image
} from 'react-native';

import { images, colors, icons, fontSizes } from '../constants'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { UIButton } from '../components'

function Login(Props) {
    return <View>
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" />
            <View style={styles.container}>
                <View style={styles.topContent}>
                    <Text style={styles.mainText}>
                        Login
                    </Text>
                </View>
                <View style={styles.bottomContent}>
                    <TouchableOpacity style={styles.googleButton}>
                        <Image
                            style={styles.googleIcon}
                            source={
                                icons.logo_gg
                            }
                        />
                        <Text style={styles.googleButtonText}>Sign in with Google</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    </View>
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: "#262b2f"
    },
    container: {
        height: Dimensions.get('window').height,
        backgroundColor: "#262b2f",
    },
    topContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainText: {
        fontSize: 54,
        color: "white",
    },
    googleButton: {
        backgroundColor: "white",
        borderRadius: 4,
        paddingHorizontal: 34,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    googleButtonText: {
        marginLeft: 16,
        fontSize: 18,
        fontWeight: '600'
    },
    googleIcon: {
        height: 24,
        width: 24
    }
});

export default Login;