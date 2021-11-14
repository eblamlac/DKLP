import React, { Component } from 'react'
import { Text, Alert, TextInput, Button, TouchableWithoutFeedback, StyleSheet, View, Dimensions, ImageBackground, StatusBar, ActivityIndicator, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Switch, TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
/*
rpx:
网页开发中 存在百分数width:50%  网页不管怎么缩放都是一半的宽度
1%的宽度 实时获取浏览器的实际宽度 /100 =1% 的宽度 50% =50*（屏幕宽度/100）
定死 把UI设计图的宽度设置为750 我就可以按照想过图进行大小书写 不用换算成百分数 一样能够适配

*/

//获取屏幕的宽高
const { width, height } = Dimensions.get('screen')
//快速解包写法相当于

// const width=Dimensions.get('screen').width
// const height=Dimensions.get('screen').height
// screen：屏幕宽和高
//window 窗口的宽和高
//差别在于 弹出键盘时：屏幕高+键盘高  即弹出键盘时 矿口高度会变小
function rpx(p) {
    return (width / 750) * p
}
{/*
导出分两种 export class demo                   ->import {demo} from 'xxx'
           export default  class demo         ->import demo form 'xxx'
*/}

const icon = require('../screens/d87b3d4167olQHX.jpg');

export default class index extends Component {
    
    componentDidMount() {

        setInterval(() => {

            if (this.state.fox) {

                this.setState({ rgb2: ++this.state.rgb2 })
                this.setState({ rgb1: ++this.state.rgb1 })
                this.setState({ rgb3: ++this.state.rgb3 })
                if (this.state.rgb2 > 200) {
                    this.state.fox = false
                }
            } else {

                this.setState({ rgb2: --this.state.rgb2 })
                this.setState({ rgb3: --this.state.rgb3 })
                this.setState({ rgb1: --this.state.rgb1 })
                if (this.state.rgb2 < 100) {
                    this.state.fox = true
                }

            }

            if (this.state.fox1) {

                this.setState({ rgb9: ++this.state.rgb9 })
                this.setState({ rgb8: --this.state.rgb8 })
                this.setState({ rgb7: ++this.state.rgb7 })
                if (this.state.rgb9 > 200) {
                    this.state.fox1 = false
                }
            } else {

                this.setState({ rgb9: --this.state.rgb9 })
                this.setState({ rgb8: ++this.state.rgb8 })
                this.setState({ rgb7: --this.state.rgb7 })

                if (this.state.rgb9 < 100) {
                    this.state.fox1 = true
                }

            }


        }, 100)


    }
    state = {
        uname: '', upwd: '', show: true,
        fox: true,
        fox1: true,
        rgb1: 0,
        rgb2: 100,
        rgb3: 100,



        rgb7: 20,
        rgb8: 200,
        rgb9: 110,
    }


    _rgbchange() {

    }
    _userChange(uname) {

        console.log(uname)
        this.setState({ uname: uname })

    }
    _upwdChange(password) {

        console.log(password)
        this.setState({ upwd: password })

    }
    _login = () => {
        this.setState({ show: !this.state.show })
        if (this.state.uname === '' || this.state.upwd === '') {
            Alert.alert(
                '陈师傅"温馨"提醒您',
                '账号密码不得为空',
                [
                    { text: 'OK' },
                ],
                { cancelable: false }
            )
            return

        }
        if (this.state.uname.length < 3) {
            Alert.alert(
                '陈师傅"温馨"提醒您',
                '账号不得小于3位',
                [

                    { text: 'OK' },
                ],
                { cancelable: false }
            )
            return
        }
        if (this.state.upwd.length < 6) {
            Alert.alert(
                '陈师傅"温馨"傅提醒您',
                '密码不得小于6位',
                [

                    { text: 'OK' },
                ],
                { cancelable: false }
            )
            return
        }

        let formData = new FormData();
        formData.append("uname", this.state.uname);
        formData.append("upwd", this.state.upwd);
        let str = { 'uname': `${this.state.uname}`, 'upwd': `${this.state.upwd}` }
        fetch('http://clayawky.com/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'uname=' + this.state.uname + '&upwd=' + this.state.upwd
        }).then((res) => res.json()).then((res) => {
            console.log(res)
            if (res.code != 1) {
                Alert.alert(
                    '陈师傅"温馨"提醒您',
                    '您输入的账号或者密码不正确',
                    [

                        { text: 'OK' },
                    ],
                    { cancelable: false }
                )
                return
            } else {
                this.props.navigation.navigate('suc', {
                    uname: this.state.uname,
                    upwd: this.state.upwd,
                    em: res.em
                })
            }
        })
            .catch((error) => {
                alert(error)
            })


    }
    _zhuce = () => {
        this.props.navigation.navigate('zhuce')
    }

    render() {
        return (

            <View>
              <StatusBar backgroundColor='black' />
           
                    <View style={styles.box}>
                        <Image source={require('../screens/LP.png')} style={{ width: rpx(400), height: rpx(300), marginTop: rpx(80) }} />
                        <View style={{
                            flexDirection: 'row', height: rpx(90), marginBottom: rpx(30), backgroundColor: 'rgba(255, 255, 255, 0.6)',
                            borderRadius: 20, width: '80%', borderColor: 'transparent', borderWidth: 1
                        }}>
                            <Image source={require('../screens/ts.png')} style={{ width: rpx(50), height: rpx(50), alignSelf: 'center' }} />
                            <TextInput placeholder='请输入账号'
                                placeholderTextColor='gray'
                                onChangeText={this._userChange.bind(this)}
                                
                                style={{
                                    width: rpx(800),
                                    color:'black',
                                }}
                            />
                        </View>
                        <View style={{
                            flexDirection: 'row', height: rpx(90), backgroundColor: 'rgba(255, 255, 255, 0.6)', marginBottom: rpx(30), borderRadius: 20,
                            width: '80%', borderColor: 'transparent', borderWidth: 1
                        }}>
                            <Image source={require('../screens/mm.png')} style={{ width: rpx(40), height: rpx(40), alignSelf: 'center', marginLeft: rpx(9) }} />
                            <TextInput
                              placeholderTextColor='gray'
                                onChangeText={this._upwdChange.bind(this)}
                                autoComplete='password' placeholder='请输入密码' secureTextEntry={true}
                                style={{
                                    width: rpx(800),
                                    color:'black',
                                }}
                            />
                        </View>

                        <TouchableOpacity style={{ width: rpx(120) }} onPress={this._login}>
                            <LinearGradient



                                // setTimeout(() => {

                                //     console.log(this.state.rgb2)
                                //     if (this.state.rgb2 > 99 && this.state.fox1) {
                                //         this.setState({ rgb2: --this.state.rgb2 })
                                //     } else if(this.state.rgb2 > 200) {
                                //         this.setState({ fox1: false })
                                //         this.setState({ rgb2: --this.state.rgb2 })
                                //         if (this.rgb2 < 100) {
                                //             this.setState({ fox1: true })
                                //         }
                                //     }

                                //     if (this.state.rgb8 > 99 && this.state.fox) {
                                //         this.setState({ rgb8: --this.state.rgb8 })
                                //     } else if(this.state.rgb8>200){
                                //         this.setState({ fox: fasle })
                                //         this.setState({ rgb8: --this.state.rgb8 })
                                //         if (this.state.rgb8 < 100) {
                                //             this.setState({ fox: true })
                                //         }
                                //     }

                                // }, 900)
                                colors={[`rgb(${this.state.rgb1},${this.state.rgb2},${this.state.rgb3})`, `rgb(${this.state.rgb7},${this.state.rgb8},${this.state.rgb9})`]}
                                style={{
                                    height: rpx(120),
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 100,//圆角属性；
                                }}
                            >
                                <Text style={{ color: '#ffffff', fontSize: rpx(40), fontWeight: "bold" }}>→</Text>

                            </LinearGradient>

                        </TouchableOpacity>


                        <View 
                        style={{
                            flexDirection:'row',
                            flexWrap:'nowrap',
                            justifyContent:'space-around',
                            marginLeft:rpx(145),
                            marginTop: rpx(350),
                        }}
                        >

                            <TouchableOpacity style={{ width: rpx(380) }} onPress={this._zhuce}>
                                <View
                                    style={{
                                        height: rpx(35),
                                        marginLeft: rpx(10),
                                        marginRight: rpx(10),
                                    }}
                                >
                                    <Text style={{ color: 'black', fontSize: rpx(26) }}>新用户注册</Text>

                                </View>
                            </TouchableOpacity>
                            
                              <Text
                              style={{
                                  color:'black',
                                  marginRight:rpx(200)
                              }}
                              >
                                  |</Text>
                            <TouchableOpacity style={{ width: rpx(380) }} >
                                <View
                                    style={{
                                        height: rpx(35),
                                        marginLeft: rpx(10),
                                        marginRight: rpx(10),

                                    }}
                                >
                                    <Text style={{ color: 'black', fontSize: rpx(26) }}>找回密码</Text>

                                </View>
                            </TouchableOpacity>

                        </View>
                        {/* <Switch value={!this.state.show} onValueChange={() => this.setState({ show: !this.state.show })} />
                        <ActivityIndicator color='green' size='large' animating={this.state.show} /> */}
                    </View>

              
            </View >


        )
    }
}
export class dataa {
    render() {
        return {
            'uname': this.state.uname,
            'upwd': this.state.upwd
        }
    }
}

const styles = StyleSheet.create({
    lookMoreCommentBtn: {
        justifyContent: 'center',
        width: '40%',
        backgroundColor: 'blue',
        borderRadius: 20

    },
    box: {
        position: 'relative',
        bottom: rpx(40),
        width: '100%',
        height: '100%',
        // justifyContent: 'center',
        alignItems: "center"
    }
})
