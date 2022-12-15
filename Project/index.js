/**
javascript
 */

// ()=> thẻ component là thẻ

import { AppRegistry } from 'react-native'
import React from 'react'
import { name as appName } from './app.json'
import Welcome from './Screens/Welcome'

let fakedProducts = [
    {
        productName: 'iphone 3',
        year: 2013
    },
    {
        productName: 'iphone 4',
        year: 2014
    },
    {
        productName: 'iphone 5',
        year: 2015
    }
]
/*
AppRegistry.registerComponent(appName,
    () => () => <Welcome
        x={1} y={2}

        person={{
            name: 'Nguyen tan tai',
            age: 10,
            email: 'taichuotchuoi@gmail'
        }}
        products={fakedProducts}
    />)
*/
AppRegistry.registerComponent(appName,
    () => () => <Welcome/>)
