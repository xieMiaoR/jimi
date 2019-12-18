import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {Jimi} from 'react-native-jimi';

export default  class Trace extends Component {
    render() {
        return (
            <View style={{ flex: 1}}>
                <Jimi.BaiduTrace></Jimi.BaiduTrace>
            </View>
        );
    }
}