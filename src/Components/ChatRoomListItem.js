import React from 'react';
import {View,Text,StyleSheet,Image, TouchableOpacity} from 'react-native';

import Layout from '../Constants/Layout'
export default function ChatRoomListItem({data,navigation}){

    var d = new Date(data.lastMessage.createdAt);
    const hour = d.getUTCHours()
    const minute = d.getUTCMinutes()

    console.log()

    return(
        <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate('ChatScreen',{user:{name:data.users[1].name ,imageUri: data.users[1].imageUri,id:data.users[1].id}})}>
            <Image source={{uri:data.users[1].imageUri}} style={styles.image}/>
            {data.newMessages>0?
            <View style={styles.badge}>
                <Text style={styles.badgeText}>{data.newMessages}</Text>
            </View>:null
            }
            
            <View style={styles.rightContainer}>
                <View style={styles.rightNameDateContainer}>
                    <View style={styles.rightNameContainer}>
                        <Text style={styles.name}>{data.users[1].name}</Text>
                    </View>
                    <Text style={data.newMessages>0?styles.timeUnRead:styles.time }>{hour+":"+minute}</Text>
                </View>
                <View>
                    <Text style={data.newMessages>0?styles.messageUnRead:styles.message } numberOfLines={1}>{data.lastMessage.content}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:7,
    },
    image:{
        height:Layout.window.height/14,
        width:Layout.window.height/14,
        borderRadius:50,
    },
    rightContainer:{
        flex:1,
        justifyContent: 'center',
        paddingLeft:6,
        justifyContent:'center',
        
    },
    rightNameDateContainer:{
        flexDirection:'row',
        marginBottom:0
    },
    rightNameContainer:{
        flex:1,
    },
    name:{
        fontFamily:'SemiBold',
        fontSize:16,
    },
    time:{
        fontFamily:'Medium',
        color:'#616161',
        fontSize:12
    },
    message:{
        fontFamily:'Regular',
        color:'#616161',
        fontSize:14,
    },
    badge:{
        backgroundColor:'#2B6BED',
        height:18,
        borderColor :'white',
        width:18,
        borderRadius: 10,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        position:'absolute',
        left:50,
        top:10,
    },
    badgeText:{
        color:'white',
        fontFamily:'Medium',
        fontSize:10,
    },
    messageUnRead:{
        fontFamily:'SemiBold',
        color:'black',
        fontSize:14,
    },
    timeUnRead:{
        fontFamily:'SemiBold',
        color:'black',
        fontSize:12
    }
})