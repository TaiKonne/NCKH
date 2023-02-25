/**
javascript
 */

// ()=> thẻ component là thẻ

import { AppRegistry } from 'react-native'
import React from 'react'
import { name as appName } from './app.json'
import { Login, Home, Test_video, Welcome, Register, Setting } from './Screens/'
import App from './navigation/App.js'
import UITab from './navigation/UITab.js'

AppRegistry.registerComponent(appName,
    () => () => <App />)
