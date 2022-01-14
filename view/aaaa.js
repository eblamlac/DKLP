import React, { Component } from 'react'
import { Text, Alert, TextInput, FlatList, Button, TouchableWithoutFeedback, StyleSheet, View, Dimensions, ImageBackground, StatusBar, ActivityIndicator, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { dataa } from './index'
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('screen')
const icon = require('../screens/d87b3d4167olQHX.jpg');
import io from 'socket.io-client';



export default class aaaa extends Component {

    hahah(test) {
        if (test.length > 0) {
            //对拿到的数据根据时间进行排序
            for (var i = 0; i < test.length - 1; i++) {
                for (var j = 0; j < test.length - 1 - i; j++) {
                    if (this.checkDate(test[j].time, test[j + 1].time)) {
                        console.log(test[j].time + "和" + test[j + 1].time + "交换")
                        var temp = test[j + 1];        // 元素交换
                        test[j + 1] = test[j];
                        test[j] = temp;
                    }
                }
            }
            console.log("排序过后")
            console.log(test)
            //只让页面渲染20条数据
            if (test.length > 20) {
                this.setState({ wchatTime: test }, () => {
                    var r = []
                    for (var o = test.length-1; o > test.length - this.state.limittext; o--) {
                        if (o < 0) {
                            break
                        }
                        r.unshift(test[o])
                    }
                    this.setState({ wchat: r })
                })
            } else {
                this.setState({ wchat: test })
            }
        }
    }
    initserver() {
        this.socket = io('http://clayawky.com/');
        this.socket.on("disconnet", () => {
            console.log("连接中断")
        })
        this.socket.on('baga', (data) => {
            var test = this.state.wchat

            if (data.to == String(this.props.route.params.qq).split("@")[0] && data.qq == String(this.props.route.params.item.email).split("@")[0]) {
                test.push(data)
            } else if (data.qq == String(this.props.route.params.qq).split("@")[0] && data.to == String(this.props.route.params.item.email).split("@")[0]) {
                test.push(data)
            }

            this.setState({ wchat: test }, () => {

            })
        })
        this.socket.on("connect", (data) => {
            console.log('连接成功')
        })


    }
    checkDate(date, date1) {
        var datetest = new Date(date.replace(" ", "T"))
        var datetest1 = new Date(date1.replace(" ", "T"))

        if (datetest.getTime() > datetest1.getTime()) {
            console.log("ahuaha")
            return true
        } else {
            return false
        }
    }

    getDate(date) {
        var date = new Date(date)
        var y = date.getFullYear()
        var m = date.getMonth() + 1
        m = m < 10 ? ('0' + m) : m
        var d = date.getDate()
        d = d < 10 ? ('0' + d) : d
        var currentdate = y + '-' + m + '-' + d;
        var hh = date.getHours()
        hh = hh < 10 ? ('0' + hh) : hh
        var mm = date.getMinutes()
        mm = mm < 10 ? ('0' + mm) : mm
        var ss = date.getSeconds()
        ss = ss < 10 ? ('0' + ss) : ss
        var time = hh + ':' + mm + ':' + ss;
        return currentdate + " " + time
    }
    sendmessage() {
        var time1 = new Date()
        var time = this.getDate(time1)

        this.socket.emit('send message', {
            text: this.state.text,
            user: this.state.user,
            to: String(this.props.route.params.item.email).split("@")[0],
            qq: this.state.qq,
            time: time
        });
        this.setState({ text: "" })
    }

    _textchange(text) {
        console.log(text)
        this.setState({ text: text })
    }
    _textsize(event) {
        this.setState({ height: event.nativeEvent.contentSize.height + 40 });
    }
    rpx(p) {
        return (width / height) * p
    }
    state = {
        wchat: [],
        yswchat:[],
        uname: "",
        limittext: 20,
        wchatTime: [],
        refreshing: false,
        user: '',
        redius: 20,
        text: "",
        height: 40,
        qq: ""
    }
    initdata() {
        var test = []
        return new Promise((resolve, reject) => {
            fetch('http://clayawky.com/user/getchat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'uname=' + this.props.route.params.user
            }).then((res) => res.json()).then((res) => {
                for (var t in res) {
                    if (res[t].to == String(this.props.route.params.item.email).split("@")[0]) {
                        test.push(res[t])
                    }
                }

                fetch('http://clayawky.com/user/getchat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: 'uname=' + this.props.route.params.item.uname
                }).then((res) => res.json()).then((res) => {

                    for (var t in res) {
                        if (res[t].to == String(this.props.route.params.qq).split("@")[0]) {
                            test.push(res[t])

                            resolve(test)
                        }
                    }
                })

            })

        })


    }
    componentDidMount() {
        console.log("生命构造周期函数触发")
        /*
                读取数据--聊天记录
               */
        this.initdata().then(res => {
            this.setState({yswchat:res})
            this.hahah(res)
        })
        console.log("nmd")
        this.initdata()
        //初始化socket建立连接
        this.initserver()
        //初始化props数据
        this.setState({ qq: this.props.route.params.qq, uname: this.props.route.params.item.uname, user: this.props.route.params.user }, () => {
        })




    }
    render() {
        return (
            <View style={{ backgroundColor: 'rgb(234,237,244)', height: "100%" }}>
                <LinearGradient colors={["rgb(0,216,255)", "rgb(0,184,255)", "rgb(0,168,255)"]}
                    style={{
                        zIndex: 2,
                        height: this.rpx(150),
                        paddingTop: this.rpx(40),
                        justifyContent: 'space-between', alignItems: "center", flexDirection: 'row',
                    }}
                    start={{ x: 0.1, y: 0.1 }} end={{ x: 0.85, y: 0.85 }}>

                    <TouchableOpacity onPress={this.props.navigation.goBack}>
                        <Image
                            style={{ width: this.rpx(60), borderRadius: 50, height: this.rpx(55), marginLeft: this.rpx(40) }}
                            source={require('../screens/back.png')}
                        /></TouchableOpacity>
                    <Text style={{

                        color: "white",
                        fontSize: this.rpx(35),
                        fontFamily: "cursive"
                    }}>{this.props.route.params.item.uname}</Text>

                    <TouchableOpacity onPress={}><Image source={require('../screens/phone.png')} style={{ width: this.rpx(60), height: this.rpx(60), color: 'white', marginRight: this.rpx(40) }}
                    /></TouchableOpacity>
                </LinearGradient>
                <StatusBar
                    barStyle={'dark-content'} //两个参数 dark-content 和 light-content,请根据实际情况设置
                    translucent
                    backgroundColor="rgba(0, 0, 0, 0)"
                />

                <FlatList

                    data={this.state.wchat} renderItem={this._renderItem}
                    ItemSeparatorComponent={this._ItemSeparatorComponent}

                    onEndReached={this._onEndReached}
                    onEndReachedThreshold={0.1}
                    onRefresh={this._onRefresh.bind(this)}
                    refreshing={this.state.refreshing}
                />

                <View style={{
                    backgroundColor: 'rgb(234,237,244)',
                    width: '100%', position: "relative", bottom: 0, height: this.rpx(175), alignItems: "center", flexDirection: 'row', justifyContent: 'space-around'
                }}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-around",
                            alignItems: "center"
                        }}
                    >
                        <TextInput
                            ref='text'
                            value={this.state.text}
                            onChangeText={(text) => {
                                this._textchange(text)
                            }}
                            multiline={true}
                            blurOnSubmit={true}
                            returnKeyType='done'
                            focusable={true}
                            onContentSizeChange={this._textsize.bind(this)}
                            style={{
                                backgroundColor: "white",

                                paddingVertical: this.rpx(10),
                                borderRadius: this.state.redius,
                                padding: 0,
                                paddingHorizontal: this.rpx(20),
                                width: this.rpx(600),
                                height: this.rpx(this.state.height),
                                borderBottomColor: 'black',
                                borderColor: '#000000',
                                color: 'black',
                                fontSize: this.rpx(30),
                            }}
                        ></TextInput>
                        <TouchableOpacity
                            onPress={this.sendmessage.bind(this)}
                            style={{
                                width: this.rpx(120),
                                borderRadius: 50,
                                height: this.rpx(70),
                                textAlignVertical: "center",
                                alignItems: "center",
                                alignContent: "center",
                                justifyContent: "center",
                                backgroundColor: 'rgb(16,185,244)',
                                marginLeft: this.rpx(10)
                            }}>
                            <Text style={{
                                color: "white",

                            }}>发送</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>
        )
    }
    _onRefresh = () => {
        this.setState({ limittext: this.state.limittext + 20 }, () => {
            this.hahah(this.state.yswchat)
        })

    }
    _onEndReached = () => {

    }
    _renderItem = ({ item }) => (

        <View>
            {this._chatTime()}
            <View style={{
                padding: this.rpx(20)
                , flexDirection: item.qq == this.state.qq ? "row-reverse" : "row",
                justifyContent: "flex-start"
                , alignContent: "center",
                alignItems: "center"
            }}>
                {<Image
                    style={{ width: 40, borderRadius: 50, height: 40 }}
                    source={{ uri: 'http://q1.qlogo.cn/g?b=qq&nk=' + String(item.qq).split("@")[0] + '&s=640' }}
                />}
                <Text style={{
                    marginHorizontal: this.rpx(20),
                    backgroundColor: item.qq == this.state.qq ?"white":"rgb(31,186,252)",
                    padding: this.rpx(20),
                    borderRadius: this.rpx(30),
                    color: "white",
                    maxWidth: this.rpx(550),
                    fontSize: this.rpx(30)
                }}>{item.text}</Text>
            </View>
        </View>

    )
    _chatTime = () => {
        var time1 = new Date()
        if (this.state.wchat.length == 1) {
            return (
                <Text
                    style={{
                        textAlign: "center"
                    }}
                >
                    {String(this.getDate(time1.valueOf()))}
                </Text>
            )
        }

    }
    _ItemSeparatorComponent = () => (
        <View style={{ height: 0, backgroundColor: 'black' }}>
        </View>

    )
    _keyExtractor = (item, index) => {
        console.log(item, index)
        return index + ''
    }
}
