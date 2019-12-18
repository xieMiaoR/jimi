
import React,{Component} from 'react';
import {View} from 'react-native';
import {Jimi} from 'react-native-jimi';

export default  class Record extends Component {
    render() {
        return (
            <View style={{ flex: 1}}>
                <Jimi.Record></Jimi.Record>
            </View>
        );
    }
}



