import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, ActivityIndicator } from 'react-native'

export default class aaaa extends Component {
    names=[
        '亮亮','然然','东东','花花','小心','l卡卡','小新','开开','foda','dew','dsewf'
    ]
    render() {
        /*
        flatList属于一个只能列表组件；
        用户只需要告知有哪些数据要进行展示每条数据什么样
        Flatlist就会把每一条数据展现出来
         data用于传入要显示的数据数组
         renderItem数组中每一项的样子
         ItemSeparatorComponent栏目的分割组件
           keyExtractor:循环生成的每一个项目必须有唯一标识 key
           ListHeaderComponent：表头

        */
    
        return (
          <FlatList data={this.names} renderItem={this._renderItem}  
          ItemSeparatorComponent={this._ItemSeparatorComponent}
          keyExtractor={({item,index})=>index+''}
          ListHeaderComponent={this._ListHeaderComponent}
          ListFooterComponent={this._ListFooterComponent}
          />
        )
    }
    _renderItem=({item})=>(
     <Text style={{fontSize:120}}>{item}</Text>
    )
    _ItemSeparatorComponent=()=>(
        <View style={{height:1,backgroundColor:'black'}}>

        </View>

    )
    _ListHeaderComponent=()=>(
        <Text>聊天室</Text>
    )
    _ListFooterComponent=()=>(
        <View style={{backgroundColor:'lightgray',alignItems:'center'}}>
<ActivityIndicator color='red' size='large' />
        <Text style={{fontSize:30}}>加载中</Text>
        </View>
    )
    _keyExtractor=(item,index)=>{
     console.log(item,index)
     return index+''
    }
}

const styles = StyleSheet.create({})
