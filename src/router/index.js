import React from 'react';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import index from '../view/index';
import Trace from '../view/trace';
import Track from '../view/track';
import Fence from '../view/fence';
import Record from '../view/record';
import AddFence from '../view/fence/addFence';


const getOptions = (title) => {
    let headerTitle = {};
    if(title){
        headerTitle = {
            title:title
        };
    }
    return {
        ...headerTitle,
        headerBackTitle:null,
        headerStyle:{
            backgroundColor:'#fff',
            // height:44
        },
        headerTintColor:'#232323',
        headerTitleStyle:{
            fontSize:16,
            fontWeight: 'bold',
        },
        gesturesEnabled:false
    };
};

const AppNavigator = createStackNavigator({
    index:{
        screen:index,
        navigationOptions:getOptions('首页')
    },
    Trace:{
        screen:Trace,
        navigationOptions:getOptions('追踪')
    },
    Track:{
        screen:Track,
        navigationOptions:getOptions('轨迹')
    },   
    Fence:{
        screen:Fence,
        navigationOptions:getOptions('围栏')
    },
    Record:{
        screen:Record,
        navigationOptions:getOptions('录音')
    },
    AddFence:{
        screen:AddFence,
        navigationOptions: ({ navigation }) => (
            {
                ...getOptions('添加围栏'),
                headerStyle:{
                    backgroundColor:'#fff',
                    borderBottomColor:'#fff',
                    elevation:0
                },
            }),
    }
});

export const Root = createAppContainer(AppNavigator);