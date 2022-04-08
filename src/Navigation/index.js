import React from 'react';
import {View,Text,Image,TouchableOpacity,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import ChatRoom from '../Screens/ChatRoom';
import ChatScreen from '../Screens/ChatScreen';

import Layout from './../Constants/Layout';

const Stack = createStackNavigator();
export default function Navigation(){
    console.log('hi')
    return(
        <NavigationContainer>
            <Stack.Navigator>

            <Stack.Screen 
                component={ChatRoom} 
                name="ChatRoom"
                options={{
                    title:'Signal',
                    headerStyle:{
                    },
                    headerTitleStyle:{
                        fontFamily:'SemiBold',
                        fontSize:18,
                    },
                    headerTitleAlign:'center',
                    headerRight: () => (
                        <View style={{flexDirection:'row',marginRight:10,width:Layout.window.width/6,justifyContent:'space-between'}}>
                            <Ionicons name="camera-outline" size={26} color="black" />
                            <Entypo name="pencil" size={26} color="black" />
                        </View>
                      ),
                    headerLeft:()=>(
                        <View style={{marginLeft:15}}>
                            
                            <Image source={{uri:'https://images.unsplash.com/photo-1528475597236-1aa99d5dd88b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'}} style={{height:34,width:34,borderRadius:20}}/>
                        </View>
                    )
                }}
                />
            <Stack.Screen 
                component={ChatScreen} 
                name="ChatScreen"
                options={({route,navigation})=>({
                    headerShown:true,
                    headerStyle:{
                        // backgroundColor:'#2B6BED',
                    },
                    headerTitleStyle:{
                        fontFamily:'SemiBold',
                        fontSize:18,
                    },
                    headerTitle:route.params.user.name,
                    headerTintColor:'black',
                    headerTitleStyle:{
                        fontFamily:'Medium',
                        fontSize:16,

                    },
                    headerRight:()=>(
                        <View style={{flexDirection:'row',width:Layout.window.width/3.5,marginRight:10,justifyContent:'space-between'}}>
                            <FontAwesome name="video-camera" size={24} color="black" />
                            <FontAwesome5 name="phone-alt" size={24} color="black" />
                            <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />
                        </View>
                    ),
                    headerLeft:()=>(
                        <View style={{flexDirection: 'row',alignItems: 'center',marginLeft:10,}}>
                            <TouchableOpacity onPress={()=>navigation.goBack()}>
                                <MaterialIcons name="arrow-back" size={26} color="black" />
                            </TouchableOpacity>
                            <Image source={{uri: route.params.user.imageUri}} style={{width: Layout.window.width/11,height: Layout.window.width/11,marginLeft:13,borderRadius:50,marginRight:-10}}/>
                        </View>
                    )
                })}
            />
                
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}