import React, { Component } from 'react'
import { Text, Alert, TextInput, FlatList, Button, TouchableWithoutFeedback, StyleSheet, View, Dimensions, ImageBackground, StatusBar, ActivityIndicator, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { dataa } from './index'
import LinearGradient from 'react-native-linear-gradient';


const { width, height } = Dimensions.get('screen')
export default class suc extends Component {

    state = { uname: '', upwd: '', email: "", ulist: ['鲍师傅', '陈师傅', '554老狗'], refreshing: false }
    componentWillMount() {
        // for (let i = 0; i < 14; i++) {
        //     this.state.ulist.push('陈师傅')
        // }
        fetch('http://clayawky.com/user/AllUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },

        }).then((res) => res.json()).then((res) => {
            console.log(res)

            this.setState({ ulist: res })

        })
        console.log('suc', this.props.route.params.uname)
        this.setState({ uname: this.props.route.params.uname })
        this.setState({ upwd: this.props.route.params.upwd })
        this.setState({ email: this.props.route.params.em })
        // type 'list'
    }

    rpx(p) {
        return (width / height) * p
    }

    userlist = () => {

        return this.state.ulist.map((item, index) => {
            return (
                <View style={{ padding: 10, backgroundColor: 'white' }}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('flatlistee') }} style={{ flexDirection: 'row' }}>
                        <Image
                            style={{ width: this.rpx(200), borderRadius: 50, height: this.rpx(200), borderWidth: 0 }}
                            source={require('../screens/sjb.jpg')}
                        />
                        <Text>{item}</Text>
                    </TouchableOpacity>
                </View>
            )

        })

    }

    render() {
        return (

            <View style={{ backgroundColor: 'rgb(245,245,245)', height: "100%" }}>
                <LinearGradient colors={["rgb(0,216,255)", "rgb(0,184,255)", "rgb(0,168,255)"]}
                    style={{
                        height: this.rpx(150),
                        paddingTop: this.rpx(50),
                        justifyContent: 'space-between', alignItems: "center", flexDirection: 'row',
                    }}
                    start={{ x: 0.1, y: 0.1 }} end={{ x: 0.85, y: 0.85 }}>
                    <View style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        alignItems: "center",
                    }}>
                        <Image
                            style={{ width: this.rpx(70), borderRadius: 50, height: this.rpx(70), marginLeft: this.rpx(40) }}
                            source={{ uri: 'http://q1.qlogo.cn/g?b=qq&nk=' + this.props.route.params.em + '&s=640' }}
                        />
                        <Text style={{
                            position: "relative",
                            left: this.rpx(30),
                            color: "white",
                            fontSize: this.rpx(45),
                            fontFamily: "cursive"
                        }}>{this.props.route.params.uname}</Text>
                    </View>
                    <TouchableOpacity onPress={() => alert('我被点击了')}><Image source={require('../screens/tianjia.png')} style={{ width: this.rpx(60), height: this.rpx(60), color: 'white', marginRight: this.rpx(20) }}
                    /></TouchableOpacity>
                </LinearGradient>
                <StatusBar
                    barStyle={'dark-content'} //两个参数 dark-content 和 light-content,请根据实际情况设置
                    translucent
                    backgroundColor="rgba(0, 0, 0, 0)"
                />

                <FlatList data={this.state.ulist} renderItem={this._renderItem}
                    style={{
                        width: "100%",
                    }}
                    ItemSeparatorComponent={this._ItemSeparatorComponent}
                    keyExtractor={({ item, index }) => index + ''}
                    ListHeaderComponent={this._ListHeaderComponent}
                    onEndReached={this._onEndReached}
                    onEndReachedThreshold={0.1}
                    onRefresh={this._onRefresh}
                    refreshing={this.state.refreshing}
                />
                <View style={{
                    backgroundColor: 'rgb(250,250,250)',
                    width: '100%', position:
                        "relative", bottom: 0, height: 70, alignItems: "center", flexDirection: 'row', justifyContent: 'space-around'
                }}>
                    <TouchableOpacity>

                        <Image source={require('../screens/msg1.png')} style={{ width: 20, height: 20, marginBottom: 3, position: 'relative', left: 4 }} />
                        <Text >消息</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>

                        <Image source={require('../screens/somebody1.png')} style={{ width: 20, height: 20, marginBottom: 3, position: 'relative', left: 6 }} />
                        <Text>联系人</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('look')
                    }}>

                        <Image source={require('../screens/look.png')} style={{ width: 20, height: 20, marginBottom: 3, position: 'relative', left: 4 }} />
                        <Text>看点</Text>
                    </TouchableOpacity>


                </View>
            </View>
        )
    }
    _onRefresh = () => {
        this.setState({ refreshing: true })
        fetch('http://clayawky.com/user/AllUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: ""
        }).then((res) => res.json()).then((res) => {
            this.setState({ ulist: res })
        })
        this.props.navigation.navigate('suc')
        this.setState({ refreshing: false })
    }
    _onEndReached = () => {

    }
    _renderItem = ({ item }) => (

        <View style={{ padding: this.rpx(30), backgroundColor: 'white' }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('flatlistee', { item: item, user: this.state.uname, qq: this.state.email }) }} style={{ flexDirection: 'row' }}>
                {<Image
                    style={{ width: 50, borderRadius: 50, height: 50 }}
                    source={{ uri: 'http://q1.qlogo.cn/g?b=qq&nk=' + String(item.email).split("@")[0] + '&s=640' }}
                />}
                <Text style={{ marginLeft: this.rpx(20), fontSize: this.rpx(30), marginTop: this.rpx(10) }}>{item.uname}</Text>
            </TouchableOpacity>
        </View>

    )
    _ItemSeparatorComponent = () => (
        <View style={{ height: 0, backgroundColor: 'black' }}>

        </View>

    )
    _ListHeaderComponent = () => (
        <View style={{ flexDirection: 'row', alignItems: 'center', height: 60, justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', width: 350, borderRadius: 40, height: 40, backgroundColor: 'white' }}>
                <Image source={require('../screens/search.png')} style={{ width: 20, height: 20, position: 'relative', top: 9 }} />
                <TextInput placeholder='搜索' />
            </View>
        </View>
    )
    _keyExtractor = (item, index) => {
        console.log(item, index)
        return index + ''
    }
}

const styles = StyleSheet.create({
    test: {
        borderRadius: 40
    }
})
