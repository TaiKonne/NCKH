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
            images.background
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
                    alignItems: 'center'
                }}>
                    <Image
                        source={icons.fire}
                        style={{
                            width: 60,
                            height: 70,
                            // alignSelf:'center'
                            // marginHorizontal:10 cho xung quanh khoản cách là 10px
                        }}

                    />
                    <Text style={{
                        color: 'white'
                    }}>
                        Welcome to the University
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
            <View style={{ // part 1
                flex: 15,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: 'yellow',
                marginTop: 20
            }}>
                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 13
                    }}>
                    Welcome to main screen!!
                </Text>
                <Text
                    style={{
                        marginBottom: 7,
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 16
                    }}>SOCIAL NETWORK OF THU DAU MOT UNIVERSITY
                </Text>
                <Text
                    style={{
                        marginBottom: 7,
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 14
                    }}>Please select your account type!
                </Text>
            </View>
            <View style={{ // part 3
                // backgroundColor: 'red',
                flex: 30,
                borderWidth: 1,
                borderColor: 'yellow',
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
                flex: 20,

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

