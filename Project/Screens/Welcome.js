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

function Welcome(props) {
    // state khi thay đổi thì UI được load lại
    // 

    //like getter/setter
    const [accountTypes, setAccountTyeps] = useState([
        {
            name: 'Sinh viên đã có tài khoản',
            al: 'Đăng nhập thành công',
            isSelected: true,
        },
        {
            name: 'Sinh viên chưa có tài khoản',
            al: 'Đăng ký tài khoản',
            isSelected: false,
        },
        {
            name: 'Quên tài khoản mật khẩu',
            al: 'Quên mật khẩu',
            isSelected: false,
        }
    ])

    const { navigation, route } = props
    const { navigate, goBack } = navigation
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
                        Welcome to the hell broo
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
                alignItems: 'center'
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
                flex: 30

            }}>
                {accountTypes.map(accountType =>
                    <UIButton onPress={() => {
                        setAccountTyeps(accountTypes.map(eachAccountType => {
                            return {
                                ...eachAccountType,
                                isSelected: eachAccountType.name == accountType.name
                            }
                        }));
                    }}
                        title={accountType.name}
                        isSelected={accountType.isSelected}
                    />)
                }
            </View>
            <View style={{ // part 4
                // backgroundColor: 'yellow',
                flex: 20,

            }}>
                <UIButton
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    title={'NEXT'}
                />
                <Text
                    style={{
                        color: 'white',
                        fontWeight: 'bold',
                        // fontSize: 14,
                        alignSelf: 'center'
                    }}>Don't know what account type use?
                </Text>

                <TouchableOpacity
                    onPress={() => {
                        alert('Press register')
                    }}
                    style={{   // button register
                        padding: 4
                    }}>
                    <Text
                        style={{
                            color: colors.primary,
                            fontWeight: 'bold',
                            // fontSize: 14,
                            alignSelf: 'center',
                            textDecorationLine: 'underline'
                        }}>Register
                    </Text>
                </TouchableOpacity>
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

//     // debugger

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

