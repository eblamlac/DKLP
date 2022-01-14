import React, { Component } from 'react'
import { Text, TouchableHighlight, TextInput, Image, Dimensions, StyleSheet, TouchableOpacity, View, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler'
import { color } from 'react-native-reanimated'
import { HeaderBackButton } from '@react-navigation/stack'
import { forNoAnimation } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators'
const { width, height } = Dimensions.get('screen')
function rpx(p) {
    return (width / height) * p
}
function he() {
    return height
}
function we() {
    return width
}
export default class zhuce3 extends Component {
    unamechange(uanme) {
        this.setState(state => ({ uname: uanme }), () => {
            if (this.state.uname && this.state.upwd.length >= 6) {
                this.setState(state => ({ color: 'rgb(16,185,244)', enable: true }), () => {
                    this.Ni()
                })
                console.log("aaaaaaa2121")
            }
        })

    }
    upwdchange(upwd) {
        this.setState(state => ({ upwd: upwd }), () => {
            if (this.state.uname && this.state.upwd.length >= 6) {
                this.setState(state => ({ color: 'rgb(16,185,244)', enable: true })
                    , () => {
                        this.Ni()
                    }
                )
            }
        })
    }
    componentDidMount() {
        this.setState({ QQemail: this.props.route.params.QQemail })
    }

    state = {
        upwd: "",
        uname: "",
        QQemail: '',
        enable: false,
        click: false,
        color: 'rgb(234,235,237)'
    }
    Ni() {
        if (this.state.enable) {
            return (
                <TouchableOpacity
                    onPress={() => {
                        fetch('http://clayawky.com/user/qwq', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded'
                            },
                            body: 'uname=' + this.state.uname + '&upwd=' + this.state.upwd + '&email=' + this.state.QQemail + '@qq.com'+ '&wchat=[]' 

                        }).then((res) => res.json()).then((res) => {
                            console.log(res)
                            if (res == '1') {
                                this.props.navigation.navigate('suc',{
                                    em:this.state.QQemail,
                                    uname:this.state.uname,
                                    upwd:this.state.upwd
                                })
                            } else if (res == '0') {
                                alert('注册失败,此账户已被注册')
                                return
                            }
                        })
                    }
                    }
                    enabled='false'
                    style={{
                        width: rpx(610),
                        height: rpx(82),
                        marginTop: rpx(120),
                        backgroundColor: this.state.color,
                        borderRadius: rpx(5),
                        marginHorizontal: rpx(70)
                    }}
                >
                    <Text
                        style={{
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            marginTop: rpx(22),
                            color: 'white',
                            fontSize: rpx(28)
                        }}
                    >
                        创建您的账户
                    </Text>
                </TouchableOpacity>
            )
        } else {
            return (
                <View
                    style={{
                        width: rpx(610),
                        height: rpx(82),
                        marginTop: rpx(120),

                        backgroundColor: this.state.color,
                        borderRadius: rpx(5),
                        marginHorizontal: rpx(70)
                    }}
                >
                    <Text
                        style={{
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            marginTop: rpx(22),
                            color: 'white',
                            fontSize: rpx(28)
                        }}
                    >
                        创建您的账户
                    </Text>
                </View>
            )
        }
    }
    render() {

        this.props.navigation.setOptions({
            headerRight() {
                return (
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'nowrap',
                            display: 'flex',
                            backgroundColor: 'red'
                            , height: 0,
                            marginBottom: rpx(110),
                        }}
                    >
                        <View
                            style={{
                                width: we(),
                                backgroundColor: 'red',
                                marginBottom: rpx(100),
                                borderBottomColor: 'rgb(234,235,237)',
                                borderBottomWidth: 5

                            }}
                        >
                            <View
                                style={{
                                    position: "relative",
                                    width: we() / 1,

                                    backgroundColor: 'red',
                                    borderBottomColor: 'rgb(17,186,251)',
                                    borderBottomWidth: 5
                                }}
                            >
                            </View>

                        </View>
                    </View>
                )
            },
            headerBackIamge:
                function () {
                    return (
                        <Image source={require('../screens/左边.png')} style={{ width: 25, marginTop: rpx(40), height: 25, marginLeft: rpx(20), position: 'relative', bottom: 4 }} />
                    )
                },

            HeaderBackButton: () => {

            },

            headerTintColor: '#000',
            headerTitleStyle: {
                fontSize: 18
            }

        })
        return (
            <View
                style={{
                    height: he(),
                    backgroundColor: 'white'
                }}
            >
                <StatusBar backgroundColor='black' />
                <Text style={{
                    fontSize: rpx(66)
                    , marginLeft: rpx(70),
                    marginTop: rpx(60),
                    color: 'rgb(30,30,30)'
                }}>最后一步，</Text>
                <Text
                    style={{
                        marginLeft: rpx(70),
                        marginTop: rpx(14),
                        color: 'gray'
                    }}
                >
                    设置您的用户名与密码
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        flexWrap: 'nowrap',
                        color: 'black',
                        borderBottomColor: '#3333',
                        borderBottomWidth: 1,
                        width: rpx(600),
                        marginTop: rpx(50),
                        marginHorizontal: rpx(70),

                    }}>
                    <TextInput placeholder='请输入用户名'

                        onChangeText={(uanme) => this.unamechange(uanme)}
                        placeholderTextColor='gray'

                        style={{
                            padding: rpx(0),
                            paddingTop: rpx(40),
                            paddingBottom: rpx(19),
                            width: rpx(800),
                            borderBottomColor: 'black',
                            borderColor: '#000000',
                            color: 'black',
                            fontSize: rpx(30),


                        }}
                    />
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        flexWrap: 'nowrap',
                        color: 'black',
                        borderBottomColor: '#3333',
                        borderBottomWidth: 1,
                        width: rpx(600),
                        marginTop: rpx(50),
                        marginHorizontal: rpx(70),

                    }}>
                    <TextInput placeholder='请输入密码'
                        secureTextEntry={true}
                        onChangeText={(upwd) => this.upwdchange(upwd)}
                        placeholderTextColor='gray'

                        style={{
                            padding: rpx(0),
                            paddingTop: rpx(40),
                            paddingBottom: rpx(19),
                            width: rpx(800),
                            borderBottomColor: 'black',
                            borderColor: '#000000',
                            color: 'black',
                            fontSize: rpx(30),


                        }}
                    />
                </View>

                {this.Ni()}
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
        bottom: rpx(-100),
        width: '100%',
        height: '100%',
        // justifyContent: 'center',
        alignItems: "center"
    }
})
