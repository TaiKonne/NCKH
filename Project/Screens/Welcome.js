import React from 'react';
import { Image, Text, View, ImageBackground } from 'react-native'



function Welcome(props) {
    return <View style={{
        backgroundColor: 'skyblue',
        flex: 100
    }}>
        <ImageBackground source={
            require('../front_end/background.jpg')
        }
            resizeMode='cover'
            style={{
                flex: 100,

            }}
        >
            <View style={{
                flexDirection: 'row',
                flex: 8,
                backgroundColor: 'green',
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}>
                <Image
                    source={require('../front_end/icon_fire.png')}
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
                    source={require('../front_end/icon_question.png')}
                    style={{
                        width: 30,
                        height: 30,
                        // tintColor:'white'
                        marginStart: 90
                    }}
                />
            </View>
            <View style={{
                flex: 20,
                width: '100%',
                backgroundColor: 'yellow'
            }} />
            <View style={{
                backgroundColor: 'blue',
                flex: 20
            }} />
            <View style={{
                backgroundColor: 'white',
                flex: 20
            }} />
        </ImageBackground>

    </View>
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


