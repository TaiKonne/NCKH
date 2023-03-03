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
import {
    auth,
    onAuthStateChanged,
    firebaseDatabaseRef,
    firebaseSet,
    firebaseDatabase
} from '../Firebase/firebase'
import AsyncStorage from '@react-native-async-storage/async-storage'

function Welcome(props) {
    const { navigation, route } = props
    const { navigate, goBack } = navigation
    useEffect(() => {
        onAuthStateChanged(auth, (responseUser) => {

            if (responseUser) {
                //signed in
                // save data to firebase
                let user = {
                    userId: responseUser.uid,
                    email: responseUser.email,
                    emailVerified: responseUser.emailVerified,
                    accessToken: responseUser.accessToken,
                }
                firebaseSet(firebaseDatabaseRef(
                    firebaseDatabase,
                    `users/${responseUser.uid}`
                ), user)
                // save user to local storage
                AsyncStorage.setItem("user", JSON.stringify(user))
                navigate('UITab')
            }
            else {
                navigate('Welcome')
            }
        })
    })
    return <View style={{
        backgroundColor: 'skyblue',
        flex: 100
    }}>
        <ImageBackground source={
            images.hoa_giay_1
        }
            resizeMode='cover'
            style={{
                flex: 100,
            }}>
            <View style={{

                flex: 8,


            }}>
                <View style={{ //part 0
                    flexDirection: 'row',
                    height: 70,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}>
                    <Image
                        source={require('../front_end/logo_bd.png')}
                        style={{
                            width: 40,
                            height: 40,
                            marginStart:5,
                            // alignSelf:'center'
                            // marginHorizontal:10 cho xung quanh khoản cách là 10px
                        }}

                    />
                    <Text style={{
                        color: 'white',
                        marginStart:5,
                        fontWeight:'bold',
                    }}>
                        Welcome to the Thu Dau Mot University
                    </Text>
                    <View style={{ flex: 1 }} />
                    <Icon name={"question-circle"}

                        color={'white'}
                        style={{
                            fontSize: 20,
                            marginEnd: 20
                        }}
                    />
                    {/* <Image
                        source={icons.question}
                        style={{
                            width: 30,
                            height: 30,
                            // tintColor:'white'
                            marginStart: 90
                        }}
                    /> */}
                </View>
                
            </View>
            <View style={{
                flex: 20,
                // flexDirection: 'row',
                // width:'100%',
                // height:'100%',
                marginTop: 90,
                justifyContent: 'center',
                alignItems: 'center',
                // borderColor:'yello',
                // borderWidth:1,
                // alignSelf:'center',
                // backgroundColor:'green',
            }} >
                <Image
                    source={require('../front_end/tdmu_logo.png')}
                    style={{
                        width: 250,
                        height: 120,
                        // borderColor:'yello',
                        // borderWidth:1,
                        // alignItems: 'center',
                        // alignSelf:'center'
                        // marginHorizontal:10 cho xung quanh khoản cách là 10px
                    }}

                />
            </View>
            <View style={{ // part 1
                flex: 20,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                // borderWidth: 1,
                // borderColor: 'yellow',
                marginTop: 20
            }}>
                <Text
                    style={{
                        color:'white',
                        fontWeight: 'bold',
                        fontSize: 20,

                    }}>
                    Welcome to
                </Text>
                <Text
                    style={{
                        marginBottom: 7,
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 25,
                        textAlign:'center',
                    }}>SOCIAL NETWORK OF
                </Text>
                <Text
                    style={{
                        marginBottom: 7,
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 25,
                        textAlign:'center',
                    }}>THU DAU MOT UNIVERSITY
                </Text>
            </View>
            <View style={{ // part 3
                // backgroundColor: 'red',
                flex: 30,
                // borderWidth: 1,
                // borderColor: 'yellow',
                // marginVertical:'center',
                justifyContent: 'center',
                marginTop: 20
            }}>
                <UIButton
                    title={'Next'.toUpperCase()}
                    onPress={() => {
                        navigate('Login')
                    }}
                />
            </View>
            <View style={{ // part 4
                // backgroundColor: 'yellow',
                flex: 15,

            }}>
            </View>
        </ImageBackground >
    </View >
}
export default Welcome













//cach 1
// function WelcomeScreen(props)
// {
//     return<Text>This is main Screen</Text>
// }
// create a var which reference to a function

//read object, var, function from other muodules
// cach 2
// const Welcome = (props) => {
//     // alert(`x = ${props.x}, y = ${props.y}`) // hiện ra màn hình
//     // alert (props.x)
//     // let { x, y } = props // destructuring an object
//     // const -> let -> var
//     // const (không thay đổi) , let(biến bên trong 1 {})
//     const { x, y } = props
//     const { person } = props
//     // destucturing person object
//     const { name, age, email } = person
//     const { products } = props


//     return <View>
//         <Text>Value of x: {x}, value of {y}</Text>
//         <Text>Tên của người dùng: {name}</Text>
//         <Text>Tuổi của người dùng: {age}</Text>
//         <Text>email of user: {email}</Text>
//         {products.map(eachProduct =>
//             <Text>Sản phẩm {eachProduct.productName}, {eachProduct.year}</Text>)}
//         <Text>sum 2 and 3 = {sum2Number(2, 3)}</Text>
//         <Text> 10 - 8 = {subtract2Number(10, 8)}</Text>
//         <Text>PI = {PI}</Text>
//     </View>
//     //.map là ánh xạ vào biến nằm trong () và {} được xem là mảng để xuất mảng ra ngoài
// }

