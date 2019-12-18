import React,{Component} from 'react';
import {View} from 'react-native';
import {Jimi,Applet} from 'react-native-jimi';
import TabNav from '../components/tabNav';

export default  class Position extends Component {

    constructor(props){
        super(props);
        this.state ={
            latitude:null,
            longitude:null,
            isPopoverPickerShow:false
        };
    }


    render() {
        return (
            <View style={{flex:1}}>
                <Jimi.BaiduPosition onDeviceChange={this._onDeviceChange} onMapClick={()=>{
                    this.setState({
                        isPopoverPickerShow:false
                    });
                }} />
                <TabNav onPress={this._onPress} 
                    isPopoverPickerShow={this.state.isPopoverPickerShow}
                />
            </View> 
        );
    }

    
    _onPress =(item)=>{
        //路由跳转包括更多里的子菜单
        if(item.routeName){
            this.setState({
                isPopoverPickerShow:false
            });
            this.props.navigation.push(item.routeName);
        }else {
            //导航
            if(item.action === 'navigation'){
                this.navigation();
            }else{
                //更多
                this.setState({
                    isPopoverPickerShow:!this.state.isPopoverPickerShow
                });
            }
        }
    }

    /**
     *导航
     */
    navigation = ()=>{
        //导航
        Applet.httpApp('jm_location.navigation', {
            latitude:this.state.latitude,
            longitude:this.state.longitude,
            onFail:()=>{
                 
            }
        });
    }


    /**
     * 监听定位信息变化
     */
    _onDeviceChange = (info)=>{
        this.setState({
            latitude:info.gpsLatitude,
            longitude:info.gpsLongitude,
        });
    }

}