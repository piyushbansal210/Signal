import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import ChatRooms from '../Data/ChatRooms';
import ChatRoomListItem from '../Components/ChatRoomListItem';

const ChatRoom = ({navigation}) =>{

    console.log(navigation)
    return(
        <View style={styles.container}>
            
            <FlatList
                data={ChatRooms}
                renderItem={({item})=><ChatRoomListItem data={item} navigation={navigation} />}
                keyExtractor={(item)=>item.id}
                showsVerticalScrollIndicator={false}
            />
            
        </View>
    )
}

export default ChatRoom;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    }
})