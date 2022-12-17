import React from 'react';
import {
    Image,
    Text,
    View,
    ImageBackground,
} from 'react-native'
import { icons, images } from '../constants/index.js'
import { UIButton } from '../components'


function Welcome(props) {
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
            }}
        >
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
                        Welcome to the world
                    </Text>
                    <View style={{ flex: 1 }} />
                    <Image
                        source={icons.question}
                        style={{
                            width: 30,
                            height: 30,
                            // tintColor:'white'
                            marginStart: 90
                        }}
                    />
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
                backgroundColor: 'red',
                flex: 30

            }}>
                <UIButton
                    onPress={() => {
                        alert('Đã đăng nhập thành công')
                    }}
                    title='Sinh viên đã có tài khoản!!!'
                    isSelected={true}
                />
            </View>
            <View style={{ // part 4
                backgroundColor: 'yellow',
                flex: 20
            }} />
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


