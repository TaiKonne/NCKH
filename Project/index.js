/**
javascript
 */

// ()=> thẻ component là thẻ

import { AppRegistry } from 'react-native'
import React from 'react'
import { name as appName } from './app.json'
import { Welcome, Login } from './Screens/'

AppRegistry.registerComponent(appName,
    () => () => <Login />)
