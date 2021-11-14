import React, { Component } from 'react'
import { Text, Alert, TextInput, FlatList,Button, TouchableWithoutFeedback, StyleSheet, View, Dimensions, ImageBackground, StatusBar, ActivityIndicator, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { dataa } from './index'


export default class suc extends Component {

    state = { uname: '', upwd: '', ulist: ['鲍师傅', '陈师傅', '554老狗'],refreshing:false }
    componentWillMount() {
         for(let i=0;i<15;i++){
         this.state.ulist.push('陈师傅')
         }

         
        this.props.navigation.setOptions({
            headerLeft:()=>(
      
                <Image
                style={{ width: 50, borderRadius:50,height: 50,position:'relative',bottom:6 }}
                source={{uri:'http://q1.qlogo.cn/g?b=qq&nk='+this.props.route.params.em+'&s=640'}}
              />
            ),
            headerStyle: {
                backgroundColor: '#601394',
                display: 'flex',
                alignItem: 'center',

            },
            title: '您好，尊敬的' + this.props.route.params.uname,

           
        })
        console.log('suc', this.props.route.params.uname)
        this.setState({ uname: this.props.route.params.uname })
        this.setState({ upwd: this.props.route.params.upwd })
        // type 'list'
    }
    rpx(p) {
        return (width / 750) * p
    }
    
    userlist =()=> {

        return this.state.ulist.map((item, index) => {
            return (
                <View style={{padding:10,backgroundColor:'white'}}>
                      <TouchableOpacity onPress={()=>{this.props.navigation.navigate('flatlistee')}} style={{flexDirection:'row'}}>
                    <Image
                        style={{ width: 50, borderRadius: 50, height: 50}}
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
            <View style={{backgroundColor:'lightgray'}}>
                <FlatList data={this.state.ulist} renderItem={this._renderItem}  
          ItemSeparatorComponent={this._ItemSeparatorComponent}
          keyExtractor={({item,index})=>index+''}
          ListHeaderComponent={this._ListHeaderComponent}
          onEndReached={this._onEndReached}
          onEndReachedThreshold={0.3}
          onRefresh={this._onRefresh}
          refreshing={this.state.refreshing}
          />
           <View style={{backgroundColor:'lightgray',width:'100%',position:'absolute',bottom:0,height:70,alignItems:"center",flexDirection:'row',justifyContent:'space-around'}}>
             <TouchableOpacity>
              
                 <Image source={require('../screens/msg1.png')} style={{width:20,height:20,marginBottom:3,position:'relative',left:4}}/>
                 <Text >消息</Text>
             </TouchableOpacity>
             <TouchableOpacity>
               
                 <Image source={require('../screens/somebody1.png')} style={{width:20,height:20,marginBottom:3,position:'relative',left:6}}/>
                 <Text>联系人</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={()=>{
                 this.props.navigation.navigate('look')
             }}>
                
                 <Image source={require('../screens/look.png')} style={{width:20,height:20,marginBottom:3,position:'relative',left:4}}/>
                 <Text>看点</Text>
             </TouchableOpacity>
             
             
           </View>
            </View>
        )
    }
    _onRefresh=()=>{
     this.setState({refreshing:true})

     this.props.navigation.navigate('suc')
     this.setState({refreshing:false})
    }
    _onEndReached=()=>{

    }
    _renderItem=({item})=>(

        <View style={{padding:10,backgroundColor:'white'}}>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('flatlistee')}} style={{flexDirection:'row'}}>
      {/* <Image
          style={{ width: 50, borderRadius: 50, height: 50}}
          source={require('../screens/sjb.jpg')}
      /> */}
      <Text>{item}</Text>
      </TouchableOpacity>
  </View>
       
       )
       _ItemSeparatorComponent=()=>(
           <View style={{height:1,backgroundColor:'black'}}>
   
           </View>
   
       )
       _ListHeaderComponent=()=>(
           <View style={{flexDirection:'row',alignItems:'center',height:60,justifyContent:'center'}}>
           <View style={{flexDirection:'row',justifyContent:'center',width:350,borderRadius:40,height:40,backgroundColor:'white' }}>
               <Image source={require('../screens/search.png')} style={{width:20,height:20,position:'relative',top:9 }} />
             <TextInput  placeholder='搜索'/>
           </View>
           </View>
       )
       /*
       _ListFooterComponent=()=>(
           <View style={{backgroundColor:'lightgray',height:70,alignItems:"center",flexDirection:'row',justifyContent:'space-around'}}>
             <TouchableOpacity>
              
                 <Image source={require('../screens/msg1.png')} style={{width:20,height:20,marginBottom:3,position:'relative',left:4}}/>
                 <Text >消息</Text>
             </TouchableOpacity>
             <TouchableOpacity>
               
                 <Image source={require('../screens/somebody1.png')} style={{width:20,height:20,marginBottom:3,position:'relative',left:6}}/>
                 <Text>联系人</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={()=>{
                 this.props.navigation.navigate('look')
             }}>
                
                 <Image source={require('../screens/look.png')} style={{width:20,height:20,marginBottom:3,position:'relative',left:4}}/>
                 <Text>看点</Text>
             </TouchableOpacity>
             
             
           </View>
       )*/
       _keyExtractor=(item,index)=>{
        console.log(item,index)
        return index+''
       }
}

const styles = StyleSheet.create({
    test: {
        borderRadius: 40
    }
})
