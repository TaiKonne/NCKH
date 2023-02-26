import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
    ScrollView,
    Switch,
    toggleSwitch,
} from 'react-native'

import { images, colors, icons, fontSizes } from '../constants'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { UIHeader } from '../components'
function Settings(props) {

    const [isEnabledLockApp, setEnabledLockApp] = useState(true)
    const [isEnabledChangePassword, setEnabledChangePassword] = useState(true)
    const [isEnabledFingerprint, setEnabledFingerprint] = useState(true)
    return <View style={{
        flex: 1,
        backgroundColor: 'white'
    }}>
        <UIHeader title={"Setting"} />
        <ScrollView>
            <View style={{
                height: 40,
                backgroundColor: 'rgba(0,0,0,0.2)',
                opacity: 0.3,
                justifyContent: 'center',
            }} >
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h4,
                    color: 'red',
                    paddingStart: 10,
                    fontWeight: 'bold'
                }}>Common</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center'
            }} >
                <Icon
                    style={{ marginStart: 10 }}
                    name='globe'
                    size={20}
                    color={'black'}
                />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10,

                }}>Language</Text>
                <View style={{ flex: 1 }} ></View>
                <Text style={{
                    color: colors.inactive,
                    fontSize: fontSizes.h6,
                    paddingStart: 10,
                    paddingEnd: 10
                }}>English</Text>
                <Icon
                    style={{ marginEnd: 10 }}
                    name='chevron-right'
                    size={20}
                    color={colors.inactive}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center'
            }} >
                <Icon
                    style={{ marginStart: 10 }}
                    name='cloud'
                    size={20}
                    color={'black'}
                />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10,

                }}>Environment</Text>
                <View style={{ flex: 1 }} ></View>
                <Text style={{
                    color: colors.inactive,
                    fontSize: fontSizes.h6,
                    paddingStart: 10,
                    paddingEnd: 10
                }}>Production</Text>
                <Icon
                    style={{ marginEnd: 10 }}
                    name='chevron-right'
                    size={20}
                    color={colors.inactive}
                />
            </View>
            {/* Account setting */}
            <View style={{
                height: 40,
                backgroundColor: 'rgba(0,0,0,0.2)',
                opacity: 0.3,
                justifyContent: 'center',
            }} >
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h4,
                    color: 'red',
                    paddingStart: 10,
                    fontWeight: 'bold'
                }}>Account</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center'
            }} >

                <Icon
                    style={{ marginStart: 10 }}
                    name='phone'
                    size={20}
                    color={'black'}
                />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10,

                }}>Phone number</Text>
                <View style={{ flex: 1 }} ></View>
                <Icon
                    style={{ marginEnd: 10 }}
                    name='chevron-right'
                    size={20}
                    color={colors.inactive}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center'
            }} >
                <Icon
                    style={{ marginStart: 10 }}
                    name='envelope'
                    size={20}
                    color={'black'}
                />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10,

                }}>Email</Text>
                <View style={{ flex: 1 }} ></View>
                <Icon
                    style={{
                        paddingEnd: 10
                    }}
                    name='chevron-right'
                    size={20}
                    color={colors.inactive}
                />
            </View>

            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center'
            }} >

                <Icon
                    style={{ marginStart: 10 }}
                    name='arrow-right-from-bracket'
                    size={20}
                    color={'black'}
                />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10,

                }}>Sign Out</Text>
                <View style={{ flex: 1 }} ></View>
                <Icon
                    style={{ marginEnd: 10 }}
                    name='chevron-right'
                    size={20}
                    color={colors.inactive}
                />
            </View>
            <View style={{
                height: 40,
                backgroundColor: 'rgba(0,0,0,0.2)',
                opacity: 0.3,
                justifyContent: 'center',
            }} >
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h4,
                    color: 'red',
                    paddingStart: 10,
                    fontWeight: 'bold'
                }}>Security</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center'
            }} >

                <Icon
                    style={{ marginStart: 10 }}
                    name='door-closed'
                    size={20}
                    color={'black'}
                />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10,

                }}>Lock out in background</Text>
                <View style={{ flex: 1 }} ></View>
                <Switch
                    trackColor={{ false: colors.inactive, true: colors.primary }}
                    thumbColor={isEnabledLockApp ? colors.primary : colors.inactive}
                    onValueChange={() => {
                        setEnabledLockApp(!isEnabledLockApp)
                    }}
                    value={isEnabledLockApp}
                    style={{
                        paddingEnd: 10
                    }}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center'
            }} >

                <Icon
                    style={{ marginStart: 10 }}
                    name='key'
                    size={20}
                    color={'black'}
                />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10,

                }}>Use Fingerprint</Text>
                <View style={{ flex: 1 }} ></View>
                <Switch
                    trackColor={{ false: colors.inactive, true: colors.primary }}
                    thumbColor={isEnabledFingerprint ? colors.primary : colors.inactive}
                    onValueChange={() => {
                        setEnabledFingerprint(!isEnabledFingerprint)
                    }}
                    value={isEnabledFingerprint}
                    style={{
                        paddingEnd: 10
                    }}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center'
            }} >

                <Icon
                    style={{ marginStart: 10 }}
                    name='lock'
                    size={20}
                    color={'black'}
                />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10,

                }}>Changed Password</Text>
                <View style={{ flex: 1 }} ></View>
                <Switch
                    trackColor={{ false: colors.inactive, true: colors.primary }}
                    thumbColor={isEnabledChangePassword ? colors.primary : colors.inactive}
                    onValueChange={() => {
                        setEnabledChangePassword(!isEnabledChangePassword)
                    }}
                    value={isEnabledChangePassword}
                    style={{
                        paddingEnd: 10
                    }}
                />
            </View>
            <View style={{
                height: 40,
                backgroundColor: 'rgba(0,0,0,0.2)',
                opacity: 0.3,
                justifyContent: 'center',
            }} >
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h4,
                    color: 'red',
                    paddingStart: 10,
                    fontWeight: 'bold'
                }}>Misc</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center'
            }} >
                <Icon
                    style={{ marginStart: 10 }}
                    name='file'
                    size={20}
                    color={'black'}
                />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10,

                }}>Terms of Service</Text>
                <View style={{ flex: 1 }} ></View>
                <Icon
                    style={{ marginEnd: 10 }}
                    name='chevron-right'
                    size={20}
                    color={colors.inactive}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center'
            }} >
                <Icon
                    style={{ marginStart: 10 }}
                    name='passport'
                    size={20}
                    color={'black'}
                />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10,

                }}>Open source licenses</Text>
                <View style={{ flex: 1 }} ></View>
                <Icon
                    style={{ marginEnd: 10 }}
                    name='chevron-right'
                    size={20}
                    color={colors.inactive}
                />
            </View>
        </ScrollView>
    </View>
}
export default Settings