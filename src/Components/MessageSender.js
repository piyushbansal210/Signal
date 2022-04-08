import React,{useState} from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
import Layout from '../.././src/Constants/Layout';

import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function MessageSender(){

    const [input,setInput]=useState('');

    return(
        <View style={styles.container}>
            <View style={styles.messageSendArea}>
            <SimpleLineIcons name="emotsmile" size={26} color="black" />
                <TextInput 
                    style={styles.input}
                    placeholder="Signal message"
                    onChangeText={(text)=>setInput(text)}
                    value={input}
                />
                {
                    input.length>0?null:<View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                    <Ionicons name="ios-camera-outline" size={26} color="black" />
                    <View style={{marginLeft:10}}>
                        <Ionicons name="md-mic-outline" size={26} color="black" />
                    </View>
                </View>
                }
                
                
            </View>
            <View style={styles.plusSend}>
                {
                    input.length>0?<MaterialCommunityIcons name="send-lock" size={24} color="white" />:
                    <Feather name="plus" size={27} color="white" />
                }
                
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        bottom:4,
        flexDirection:'row',
        marginHorizontal:5,
        alignItems: 'center'
    },
    messageSendArea:{
        backgroundColor:'#F4F4F4',
        flexDirection:'row',
        flex:1,
        borderRadius:10,
        alignItems: 'center',
        paddingHorizontal:4,
        height:Layout.window.height*0.07,
    },
    plusSend:{
        backgroundColor:'#2B6BED',
        width:Layout.window.height*0.06,
        borderRadius:50,
        alignItems: 'center',
        justifyContent: 'center',
        margin:4,
        height:Layout.window.height*0.06,
    },
    input:{
        flex:1,
        fontFamily:'Regular',
        paddingHorizontal:10
    }
})