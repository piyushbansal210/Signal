import React from 'react';
import {View,Text,StyleSheet,FlatList,KeyboardAvoidingView } from 'react-native';
import TEXTS from '../Data/Chats'
import { StatusBar } from 'expo-status-bar';
import Message from '../Components/Message';
import MessageSender from '../Components/MessageSender';

const ChatScreen = ({navigation}) =>{
    const messages =TEXTS.messages
    
    
    const me = TEXTS.users[0].id;
    return(
        <View style={styles.container}>
            
                <FlatList
                    data={messages}    
                    renderItem={({item})=>{
                        return(
                            <Message
                                message={item}
                                me={me}
                                navigation={navigation}
                            />
                        )
                    }
                    }
                    keyExtractor={(item)=>item.id}
                />
            
            <MessageSender/>
            <StatusBar style="dark"  />
        </View>
    )
}
//2B6BED
export default ChatScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    }
})