import React, { Component } from 'react'
import { Text, Alert, TextInput, Button, TouchableWithoutFeedback, StyleSheet, View, Dimensions, ImageBackground, StatusBar, ActivityIndicator, Image } from 'react-native'
const icon = require('../screens/d87b3d4167olQHX.jpg');
import { Switch, TouchableOpacity } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('screen')
function rpx(p) {
    return (width / 750) * p
}

export default class zhuce extends Component {
    state = { zcuname: '', zcupwd: '', yzm: '', sediao: true, time: 30, uyzm: '', uemail: '', testeml: '' }
    fox = () => {
        if (this.state.sediao) return 'green'
        else return 'gray'
    }
    time = () => {
        if (this.state.sediao) return ''
        else return this.state.time
    }
    
    render() {
        return (

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <StatusBar backgroundColor='rgba(0,0,0,0)' translucent />
                <ImageBackground source={icon} style={{ width: '100%', height: '100%' }}>
                    <View style={styles.box}>
                        <Image source={require('../screens/LP.png')} style={{ width: rpx(400), height: rpx(400), position: 'relative', top: rpx(35) }} />
                        <View style={{ flexDirection: 'row', height: 40, marginBottom: rpx(30), backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 20, width: '50%', borderColor: 'gray', borderWidth: 1 }}>
                            <Image source={require('../screens/ts.png')} style={{ width: rpx(50), height: rpx(50) }} />
                            <TextInput placeholder='请输入账号'
                                onChangeText={(uname) => {
                                    this.setState({ zcuname: uname })

                                }}

                            />

                        </View>
                        <View style={{ flexDirection: 'row', height: 40, backgroundColor: 'rgba(255, 255, 255, 0.6)', marginBottom: rpx(30), borderRadius: 20, width: '50%', borderColor: 'gray', borderWidth: 1 }}>
                            <Image source={require('../screens/mm.png')} style={{ width: rpx(50), height: rpx(50), alignSelf: 'center' }} />
                            <TextInput
                                onChangeText={(upwd) => {
                                    this.setState({ zcupwd: upwd })

                                }}
                                autoComplete='password' placeholder='请输入密码' secureTextEntry={true}

                            />
                        </View>
                        <View style={{ flexDirection: 'row', height: 40, backgroundColor: 'rgba(255, 255, 255, 0.6)', marginBottom: rpx(30), borderRadius: 20, width: '50%', borderColor: 'gray', borderWidth: 1 }}>

                            <TextInput style={{ width: '60%' }}
                                onChangeText={(email) => {
                                    this.setState({ uemail: email })
                                }}
                                placeholder='请输入您的QQ'
                            />
                            <View style={{ backgroundColor: 'lightgray', alignItems: 'center', width: '40%', borderBottomRightRadius: 20, borderTopRightRadius: 20, justifyContent: 'center' }}><Text
                                style={{ textAlign: 'center' }}
                            >@qq.com</Text></View>
                        </View>
                        <View style={{ flexDirection: 'row', height: 40, marginBottom: rpx(30), backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 20, width: '50%', borderColor: 'gray', borderWidth: 1 }}>
                            <TouchableOpacity style={{ backgroundColor: this.fox(), alignItems: 'center', display: 'flex', borderTopLeftRadius: 20, borderBottomLeftRadius: 20, height: 40, width: 100 }} onPress={
                                () => {
                                    if (this.state.uemail == '') {
                                        Alert.alert(
                                            '陈师傅"温馨"傅提醒您',
                                            '请输入您的邮箱地址',
                                            [

                                                { text: 'OK' },
                                            ],
                                            { cancelable: false }
                                        )
                                        return
                                    }
                                    var arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
                                    var qwq = ''
                                    var newArray = [];
                                    for (var i = 1; i < 6; i++) {
                                        var nym = Math.floor(Math.random() * arr.length);
                                        newArray = [qwq += arr[nym]];
                                    }
                                    var yzm1 = newArray.toString()
                                    this.setState({ uyzm: yzm1 })
                                    console.log(yzm1)
                                    fetch('http://clayawky.com/user/yzm', {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/x-www-form-urlencoded'
                                        },
                                        body: 'yzm=' + yzm1 + '&email=' + this.state.uemail + '@qq.com'
                                    }).then((res) => res.json()).then((res) => {
                                        console.log(res)
                                    })
                                    this.setState({ testeml: this.state.uemail })
                                    this.setState({ sediao: false })
                                    let tiem1 = setInterval(() => {
                                        this.setState({ time: --this.state.time })
                                        if (this.state.time == 0) {
                                            this.setState({ sediao: true })
                                            clearInterval(tiem1)
                                        }
                                    }, 1000)


                                }
                            }>
                           
                            <Text style={{ textAlign: 'center', position: 'relative', top: rpx(15) }}>{this.time()}发送验证码</Text>
                            </TouchableOpacity>
                            <TextInput placeholder='请输入验证码'
                                onChangeText={(yzm) => {
                                    this.setState({ yzm: yzm })
                                    console.log(this.state.yzm)
                                }}

                            />

                        </View>
                        <TouchableOpacity style={{ width: rpx(380) }}
                            onPress={() => {
                                this.props.navigation.navigate('zhuye')
                            }}
                        >
                            <View
                                style={{
                                    height: 35,
                                    marginLeft: 10,
                                    marginRight: 10,
                                    marginTop: 10,
                                    backgroundColor: '#33FFCC',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 10,//圆角属性；
                                }}
                            >
                                <Text style={{ color: '#ffffff', fontSize: 16 }}>已有账号?登录</Text>

                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: rpx(380) }}
                            onPress={() => {
                                if (this.state.zcuname == '' || this.state.zcupwd == '' || this.state.yzm == '') {
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
                                if (this.state.zcuname < 3) {
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
                                if (this.state.zcupwd < 6) {
                                    Alert.alert(
                                        '陈师傅"温馨"提醒您',
                                        '密码不得小于6位',
                                        [
                                            { text: 'OK' },
                                        ],
                                        { cancelable: false }
                                    )
                                    return
                                }
                                if (this.state.yzm != this.state.uyzm) {
                                    Alert.alert(
                                        '陈师傅"温馨"提醒您',
                                        '您的验证码不正确',
                                        [
                                            { text: 'OK' },
                                        ],
                                        { cancelable: false }
                                    )
                                    return
                                }
                                if (this.state.uemail != this.state.testeml) {
                                    Alert.alert(
                                        '陈师傅"温馨"提醒您',
                                        '您当前邮箱和发送验证码的邮箱不符',
                                        [
                                            { text: 'OK' },
                                        ],
                                        { cancelable: false }
                                    )
                                    return
                                }
                                console.log('发送中')
                                fetch('http://clayawky.com/user/qwq', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/x-www-form-urlencoded'
                                    },
                                    body: 'uname=' + this.state.zcuname + '&upwd=' + this.state.zcupwd + '&email=' + this.state.uemail + '@qq.com'

                                }).then((res) => res.json()).then((res) => {
                                    console.log(res)
                                    if (res == '1') {
                                        alert('恭喜您注册成功')
                                        this.props.navigation.navigate('zhuye')
                                    } else if (res == '0') {
                                        alert('注册失败,此账户已被注册')
                                        return
                                    }
                                })

                            }}
                        >
                            <View
                                style={{
                                    height: 35,

                                    marginLeft: 10,

                                    marginRight: 10,
                                    marginTop: 10,
                                    backgroundColor: '#33FFCC',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 10,//圆角属性；
                                }}
                            >
                                <Text style={{ color: '#ffffff', fontSize: 16 }}>注册</Text>

                            </View>
                        </TouchableOpacity>



                    </View>

                </ImageBackground>
            </View>
        )
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

        bottom: rpx(180),
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: "center"
    }
})
