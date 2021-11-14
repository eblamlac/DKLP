import React, { Component } from 'react'
import { Text, TouchableHighlight, TextInput, Image, Dimensions, TouchableOpacity, View, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler'
import { color } from 'react-native-reanimated'
import { HeaderBackButton } from '@react-navigation/stack'
const { width, height } = Dimensions.get('screen')
function rpx(p) {
    return (width / 750) * p
}
function he() {
    return height
}
function we() {
    return width
}
function test() {
    var $email = xo.value;
    var yz = document.getElementById('xiala')
    var selectedIndex = yz.options.selectedIndex
    var $email = xo.value + yz.options[selectedIndex].innerHTML
    var arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    var qwq = ''
    var newArray = [];
    for (var i = 1; i < 6; i++) {
        var nym = Math.floor(Math.random() * arr.length);
        newArray = [qwq += arr[nym]];
    }
    yzm = newArray.toString()
    var xhr = new XMLHttpRequest()
    xhr.open('post', '/user/yzm', true)
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    var fromdata = 'yzm=' + yzm + '&email=' + $email
    xhr.send(fromdata);
    let timer = setInterval(function () {
        time--;
        yzmx.innerHTML = `<span id='repeat'>再发送一次${time}</span>`
        window.localStorage.setItem('time1', time)
        document.body.onload = 're()'
        if (time == 0) {
            yzmx.innerHTML = `<button class='test' onclick='test()'>
                        <table></table>
                        获取验证码
                    </button>`
            clearInterval(timer)
        }
    }, 1000)
}
export default class zhuce1 extends Component {
    componentDidMount(){
        if(this.state.time>=0){
            this._detime()
        }
    }
    state = {
        time: 60,
        QQemail: '',
        color: 'rgb(234,235,237)',
        a1: '',
        a2: '',
        a3: '',
        a4: '',
        a5: '',
        a6: '',
    }
    _show() {
        if (this.state.time <= 0) {
            return (
                <TouchableOpacity
                style={
                    {
                        width:rpx(120),
                        backgroundColor:'transparent'
                    }
                }
                onPress={() => {
                    test();
                    this.setState({ time:3})
                    this._detime()
                }}>
                    <Text style={{
                        color: 'rgb(125,155,217)'
                    }}>重新发送</Text>
                </TouchableOpacity>
            )
        } else {
            return (
                <Text
                    style={{
                        color: 'gray'
                    }}
                >
                 {' 重新发送('+this.state.time+')s'}
                </Text>
            )
        }
    }
    _detime() {
        let timer = setInterval(() => {
            if (this.state.time >= 0) {
                this.setState({ time: --this.state.time })
                
            } else if (this.state.time <= 0) {
                clearInterval(timer)
            }
        }, 1000);
    }
    _nani() {
        if (this.state.a2 == '' && this.state.a1 == '') {
            return 'a1'
        } else if (this.state.a2 == '' && this.state.a3 == '') {
            return 'a2'
        } else if (this.state.a3 == '' && this.state.a4 == '') {
            return 'a3'
        } else if (this.state.a4 == '' && this.state.a5 == '') {
            return 'a4'
        } else if (this.state.a5 == '' && this.state.a6 == '') {
            return 'a5'
        } else {
            return 'a6'
        }
    }
    a2(a) {
        if (this._nani() == 'a2' || a == 'a2') {
            return 'rgb(128,217,236)'
        } else {
            return 'rgb(244,244,244)'
        }
    }

    a1(a) {

        if (this._nani() == 'a1') {
            return 'rgb(128,217,236)'
        } else {
            return 'rgb(244,244,244)'
        }
    }
    a3(a) {
        if (a == 'a2') {
            return 'rgb(244,244,244)'
            this.a2(a2)
        } else {
            if (this._nani() == 'a3') {
                return 'rgb(128,217,236)'
            } else {
                return 'rgb(244,244,244)'
            }
        }
    }
    a4(a) {
        if (this._nani() == 'a4') {
            return 'rgb(128,217,236)'
        } else {
            return 'rgb(244,244,244)'
        }
    }
    a5(a) {
        if (this._nani() == 'a5') {
            return 'rgb(128,217,236)'
        } else {
            return 'rgb(244,244,244)'
        }
    }
    a6(a) {
        if (this._nani() == 'a6') {
            return 'rgb(128,217,236)'
        } else {
            return 'rgb(244,244,244)'
        }
    }
    // a22() {
    //     if (this._nani() == 'a2') {
    //         this.setState({ a22: true })
    //     } else {
    //         this.setState({ a22: false })
    //     }
    // }
    _emailChange(email) {
        if (email.length > 5) {
            this.setState({
                color: 'rgb(16,185,244)'
            })
        } else {
            this.setState({
                color: 'rgb(234,235,237)'
            })
        }
        this.setState({ QQemail: email })
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
                                    width: we() / 3 + we() / 3,
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
                }}>输入短信验证码</Text>
                <Text
                    style={{
                        marginLeft: rpx(70),
                        marginTop: rpx(14),
                        color: 'gray'
                    }}
                >
                    已向QQ{this.props.route.params.QQemail}发送验证码
                </Text>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'nowrap',
                        marginTop: rpx(80),
                        marginLeft: rpx(60),
                    }}>
                    <View
                        pointerEvents='none'
                        style={{
                            width: rpx(70),
                            height: rpx(70),
                            borderWidth: 1.1,
                            borderRadius: rpx(20),
                            marginHorizontal: rpx(10),
                            borderColor: this.a1(),
                            color: 'black',
                        }}>
                        <TextInput
                            value={this.state.a1}
                            pointerEvents='none'
                            ref='A1'
                            autoFocus={true}
                            onKeyPress={(e) => {
                                if (e.nativeEvent.key == 'Backspace') {
                                    this.refs.A1.focus()
                                    this.refs.A1.defaultValue = ''
                                    this._nani('a1')
                                } else {
                                    this.refs.A2.focus()
                                    this._nani('a2')
                                }
                            }}
                            onChangeText={(text) => {
                                this.setState({ a1: text })
                                if (text != '') {
                                    this.refs.A2.focus()
                                } else {
                                    this.refs.A1.focus()
                                }
                            }}
                            style={{
                                zIndex: -1,
                                color: 'black',
                                padding: 0,
                                textAlign: 'center',
                                fontSize: rpx(50),
                            }}
                            maxLength={1}
                            caretHidden={true}
                            keyboardType='numeric'
                        >
                        </TextInput>
                    </View>
                    <View
                        pointerEvents='none'
                        style={{
                            width: rpx(70),
                            height: rpx(70),
                            borderWidth: 1.1,
                            borderRadius: rpx(20),
                            marginHorizontal: rpx(10),
                            borderColor: this.a2()
                        }}>

                        <TextInput
                            pointerEvents='none'
                            ref='A2'
                            value={this.state.a2}
                            onKeyPress={(e) => {
                                if (e.nativeEvent.key == 'Backspace') {
                                    this.refs.A1.focus()
                                    this.setState({ a1: '' })
                                } else {
                                    this.refs.A3.focus()
                                }
                            }}
                            onChangeText={(text) => {
                                this.setState({ a2: text })
                                if (text != '') {
                                    this.refs.A3.focus()
                                } else {
                                    this.refs.A1.focus()
                                }
                            }}
                            style={{
                                color: 'black',
                                padding: 0,
                                textAlign: 'center',
                                fontSize: rpx(50),
                            }}
                            maxLength={1}
                            caretHidden={true}
                            keyboardType='numeric'
                        >
                        </TextInput>
                    </View>
                    <View
                        pointerEvents='none'
                        style={{
                            width: rpx(70),
                            height: rpx(70),
                            borderWidth: 1.1,
                            borderRadius: rpx(20),
                            marginHorizontal: rpx(10),
                            borderColor: this.a3(),
                        }}>
                        <TextInput
                            pointerEvents='none'
                            value={this.state.a3}
                            ref='A3'
                            onKeyPress={(e) => {
                                if (e.nativeEvent.key == 'Backspace' && this.refs.A3.value !== '') {
                                    this.refs.A2.focus()
                                    this.setState({ a2: '' })
                                } else {
                                    this.refs.A4.focus()
                                }
                            }}
                            onChangeText={(text) => {
                                this.setState({ a3: text })
                                if (text != '') {
                                    this.refs.A4.focus()
                                } else {
                                    this.refs.A2.focus()
                                }
                            }}
                            style={{
                                color: 'black',
                                padding: 0,
                                textAlign: 'center',
                                fontSize: rpx(50),
                            }}
                            maxLength={1}
                            caretHidden={true}
                            keyboardType='numeric'
                        >
                        </TextInput>
                    </View>
                    <View
                        pointerEvents='none'
                        style={{
                            width: rpx(70),
                            height: rpx(70),
                            borderWidth: 1.1,
                            borderRadius: rpx(20),
                            marginHorizontal: rpx(10),
                            borderColor: this.a4(),
                        }}>
                        <TextInput
                            value={this.state.a4}
                            pointerEvents='none'
                            onKeyPress={(e) => {
                                if (e.nativeEvent.key == 'Backspace') {
                                    this.refs.A3.focus()
                                    this.setState({ a3: '' })
                                } else {
                                    this.refs.A5.focus()
                                }
                            }}
                            ref='A4'
                            onChangeText={(text) => {
                                this.setState({ a4: text })
                                if (text != '') {
                                    this.refs.A5.focus()
                                } else {
                                    this.refs.A3.focus()
                                    this.aa('a3')
                                }
                            }}
                            style={{
                                color: 'black',
                                padding: 0,
                                textAlign: 'center',
                                fontSize: rpx(50),
                            }}
                            maxLength={1}
                            caretHidden={true}
                            keyboardType='numeric'
                        >

                        </TextInput>

                    </View>
                    <View
                        pointerEvents='none'
                        style={{
                            width: rpx(70),
                            height: rpx(70),
                            borderWidth: 1.1,
                            borderRadius: rpx(20),
                            marginHorizontal: rpx(10),
                            borderColor: this.a5(),
                        }}>

                        <TextInput
                            value={this.state.a5}
                            pointerEvents='none'
                            ref='A5'
                            onKeyPress={(e) => {
                                if (e.nativeEvent.key == 'Backspace') {
                                    this.refs.A4.focus()
                                    this.setState({ a4: '' })
                                    this.refs.A4.defaultValue = ''
                                } else {
                                    this.refs.A6.focus()
                                }
                            }}
                            onChangeText={(text) => {
                                this.setState({ a5: text })
                                if (text != '') {
                                    this.refs.A6.focus()
                                } else {
                                    this.refs.A4.focus()
                                }
                            }}
                            style={{
                                color: 'black',
                                padding: 0,
                                textAlign: 'center',
                                fontSize: rpx(50),
                            }}
                            maxLength={1}
                            caretHidden={true}
                            keyboardType='numeric'
                        >
                        </TextInput>
                    </View>
                    <View
                        pointerEvents='none'
                        style={{
                            width: rpx(70),
                            height: rpx(70),
                            borderWidth: 1.1,
                            borderRadius: rpx(20),
                            marginHorizontal: rpx(10),
                            borderColor: this.a6(),
                        }}>
                        <TextInput
                            pointerEvents='none'
                            ref='A6'
                            onKeyPress={(e) => {
                                if (e.nativeEvent.key == 'Backspace') {
                                    if(this.state.a6!=''){
                                    this.refs.A6.focus()
                                     this.setState({ a6: '' })
                                }else{
                                    this.refs.A5.focus()
                                    this.setState({ a5: '' })
                                }
                               
                                }
                            }}
                            onChangeText={(text) => {
                                this.setState({ a6: text })
                                if (text != '') {
                                    if(`${this.state.a1}${this.state.a2}${this.state.a3}${this.state.a4}${this.state.a5}${text}`===this.props.route.params.yzm){
                                        alert('成功')
                                    }else{
                                      console.log(`${this.state.a1}${this.state.a2}${this.state.a3}${this.state.a4}${this.state.a5}${text}`)
                                      console.log(this.props.route.params.yzm)
                                        alert('失败')
                                    }
                                } else {
                                    this.refs.A6.focus()
                                }
                            }}
                            style={{
                                color: 'black',
                                padding: 0,
                               
                                textAlign: 'center',
                                fontSize: rpx(50),
                            }}
                            maxLength={1}
                            caretHidden={true}
                            keyboardType='numeric'
                        >
                        </TextInput>
                    </View>
                </View>

                <View
                    style={{
                        marginLeft: rpx(70),
                        marginTop: rpx(50),
                    }}
                >
                    {
                        this._show()
                    }
                </View>

            </View>
        )
    }
}
