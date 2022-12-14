import React, { Component } from 'react';
import { Test, StyleSheet } from 'react-native';
import md5 from 'blueimp-md5';
import { Avatar, Grid, Row, Col } from 'react-native-elements';


export default class ProfileScreen extends Component {
    gravatarUrl() {
        let email = 'taichuotchuoi@gmail.com';
        return 'https://gravatar.com/avatar/' + md5(email) + '?s=400';
    }
    render() {
        return (
            <Grid>
                <Row style={{alignItems:'center'}}>
                    <Avatar
                        large
                        rounded
                        source{{ uri: this.gravatarUrl() }}
                        containerStyle={{width:75,height:75,marginVertical:10}}
                    />
                </Row>
                <Row>
                    <Col>
                        <Text> 123 following me</Text>
                    </Col>
                    <Col>
                        <Text> 456 following me</Text>
                    </Col>
                </Row>
            </Grid>
        )
    }
}