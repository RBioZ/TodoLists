import React from 'react';
import {View,Text,StyleSheet,KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import {AntDesign} from '@expo/vector-icons'
import colors from '../Colors'
import Constants from 'expo-constants';

export default class AddListModal extends React.Component{
    render(){
        return(
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <TouchableOpacity style={{position:'absolute', top:15, right:15}}>
                    <AntDesign name='close' size={24} color={colors.black}/>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})