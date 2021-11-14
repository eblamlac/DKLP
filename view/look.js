import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity, View, Dimensions, Image, ActivityIndicator } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
const { width, height } = Dimensions.get('screen')
function rpx(p) {
    return width / 750 * p
}
export default class look extends Component {
    state = { result: [], refreshing: false }
    page = 1
    url = 'https://api.apiopen.top/getWangYiNews?count=30&page='
    componentDidMount() {

        let url = this.url + 1
        fetch(url).then((res) => res.json()).then((res) => {
            console.log(res)
            this.setState({ result: res.result })
        })
    }
    state = {}
    render() {
        return (
            <View>
                <FlatList data={this.state.result} renderItem={this._renderItem}
                    style={{ marginBottom: rpx(100) }}
                    keyExtractor={(item, index) => index + ''}
                    onEndReached={this._onEndReached}
                    onEndReachedThreshold={0.1}
                    onRefresh={this._onRefresh}
                    refreshing={false}
                    ListFooterComponent={this._ListFooterComponent}
                    ItemSeparatorComponent={() => <View style={{ backgroundColor: 'gray', height: 1 }}></View>}
                />
                <View style={{ backgroundColor: 'lightgray', width: '100%', position: 'absolute', bottom: 0, height: 70, alignItems: "center", flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('suc')

                    }}
                    >

                        <Image source={require('../screens/msg.png')} style={{ width: 20, height: 20, marginBottom: 3, position: 'relative', left: 4 }} />
                        <Text >消息</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>

                        <Image source={require('../screens/somebody1.png')} style={{ width: 20, height: 20, marginBottom: 3, position: 'relative', left: 6 }} />
                        <Text>联系人</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('look')
                    }}>

                        <Image source={require('../screens/look1.png')} style={{ width: 20, height: 20, marginBottom: 3, position: 'relative', left: 4 }} />
                        <Text>看点</Text>
                    </TouchableOpacity>


                </View>
            </View>
        )
    }
    _onRefresh = () => {
        this.setState({ refreshing: true })
        let url = this.url + 1
        fetch(url).then((res) => res.json()).then((res) => {
            this.setState({ result: res.result, refreshing: false })
            this.page = 1
        })
    }
    _ListFooterComponent = () => (
        <View style={{
            backgroundColor: 'rgba(240,240,240)',
            alignItems: 'center',
            paddingVertical: rpx(6)
        }}>
            <ActivityIndicator color='red' size='large' />
            <Text style={{ fontSize: rpx(23) }}>加载中请稍后</Text>
        </View>
    )
    _onEndReached = () => {
        let nextPage = this.page + 1
        let url = this.url + nextPage
        fetch(url).then(res => res.json()).then((res) => {
            this.setState({ result: this.state.result.concat(res.result) })
            this.page = nextPage
        })
    }
    _renderItem = ({ item }) => <View style={{ flexDirection: 'row' }}>
        <Image source={{ uri: item.image }} style={{ width: rpx(140) * 1.4, height: rpx(88) * 1.4, margin: rpx(10) }} />
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: rpx(28) }}>{item.title}</Text>
            <Text style={{ fontSize: rpx(23), color: 'gray' }}>{item.passtime}</Text>
        </View>


    </View>
}

const styles = StyleSheet.create({})
