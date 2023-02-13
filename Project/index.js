/**
javascript
 */

// ()=> thẻ component là thẻ

import { AppRegistry } from 'react-native'
import React from 'react'
import { name as appName } from './app.json'
import { Login, Home } from './Screens/'

AppRegistry.registerComponent(appName,
    () => () => <Home />)
