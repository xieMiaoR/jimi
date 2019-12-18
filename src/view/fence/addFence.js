import React, {Component} from 'react';
import {Jimi} from 'react-native-jimi';

export default class AddFence extends Component { 
    constructor(props) {
        super(props);
    }
    

    render() {
        let {params} = this.props.navigation.state;
        return <Jimi.BaiduAddFence
            fenceId={params?params.fenceId:''}
            onSave={()=>{
                this.props.navigation.goBack();
            }}
        ></Jimi.BaiduAddFence>;
    }
}
