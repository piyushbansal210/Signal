import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet} from 'react-native';

import Layout from '../Constants/Layout';

const myID='u1';
export default function Message({message,me}){
    const isMe = message.user.id === me;
    return(
        <View style={isMe ?styles.meContainer:styles.container}>
            <Text style={{color: isMe ?'black':'white',fontFamily:'Light'}}>{message.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#2B6BED',
        padding:10,
        margin:10,
        borderRadius:10,
        maxWidth:Layout.window.width*0.7,
        marginLeft:10,
        marginRight:'auto',
    },
    meContainer:{
        backgroundColor:'lightgrey',
        padding:10,
        margin:10,
        borderRadius:10,
        maxWidth:Layout.window.width*0.7,
        marginLeft:'auto',
        marginRight:10,
    }
})