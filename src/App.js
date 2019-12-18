
import React, {Component} from 'react';
import {Root} from './router/index';
import store from './store/index';
import { Provider } from 'react-redux';
import {Api} from 'react-native-jimi';
// Api.setServer('https://apis.jimimax.com');
Api.setServer('http://172.16.0.106:7888');
export default class App extends Component{
    render() {
        return <Provider store={store}>
            <Root/>
        </Provider>;
    }
}

