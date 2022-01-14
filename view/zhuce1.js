import React, { Component } from 'react'
import { Text, TouchableHighlight, TextInput, Image, Dimensions, TouchableOpacity, View, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler'
import { color } from 'react-native-reanimated'
import { HeaderBackButton } from '@react-navigation/stack'
import { forNoAnimation } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators'
const { width, height } = Dimensions.get('screen')
function rpx(p) {
  return (width /height) * p
}
function he() {
  return height
}
function we() {
  return width
}
export default class zhuce1 extends Component {
  state = {
    yzm: '',
    QQemail: '',
    enable: false,
    click:false,
    color: 'rgb(234,235,237)'
  }
  _emailChange(email) {
    if (email.length > 5) {
      this.setState({
        color: 'rgb(16,185,244)'
        , enable: true
      })
    } else {
      this.setState({
        color: 'rgb(234,235,237)',
        enable: false
      })
    }
    this.setState({ QQemail: email })
  }
  Ni() {
    if (this.state.enable) {
      return (
        <TouchableOpacity
          onPress={() => {
            if(this.state.click){
              this.props.navigation.navigate('zhuce2', {
                QQemail: this.state.QQemail,
                yzm: this.state.yzm
              })
            }else{
              this.setState({click:true})
            var arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
            var qwq = ''
            var newArray = [];
            for (var i = 1; i <=6; i++) {
              var nym = Math.floor(Math.random() * arr.length);
              newArray = [qwq += arr[nym]];
            }
            var yzm1 = newArray.toString()
            console.log(yzm1,this.state.QQemail)
            this.setState({ yzm:yzm1})
            console.log(yzm1+"ahcqc")
            fetch('http://clayawky.com/user/yzm', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
            
              body: 'yzm=' + yzm1+ '&email=' + this.state.QQemail+"@qq.com"
            }).then((res) =>console.log(res.json)
            )
            this.props.navigation.navigate('zhuce2', {
              QQemail: this.state.QQemail,
              yzm:yzm1
            })
          }}
        }
          enabled='false'
          style={{
            width: rpx(610),
            height: rpx(82),
            marginTop: rpx(100),
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
            下一步
      </Text>
        </TouchableOpacity>
      )
    } else {
      return (
        <View
          style={{
            width: rpx(610),
            height: rpx(82),
            marginTop: rpx(100),

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
            下一步
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
                  width: we() / 3,

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
        }}>用QQ邮箱注册</Text>
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
          <TextInput placeholder='请输入QQ'
            keyboardType='numeric'

            placeholderTextColor='gray'
            onChangeText={this._emailChange.bind(this)}
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
          <Text
            style={
              {
                position: 'relative',
                right: rpx(350),
                top: rpx(36)
                , fontSize: rpx(35),
                color: 'gray',
              }
            }
          >@qq.com</Text>
        </View>

        {this.Ni()}

      </View>
    )
  }

}
