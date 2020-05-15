import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../Colors'

export default TodoList = ({list}) => {

    const completedCount = list.todos.filter(todo => todo.completed).length;
    const remainingCount = list.todos.length - completedCount;

    return (
        <View style={[styles.listContainer, {backgroundColor: list.color}]}>
            <Text style={styles.listTitle} numberOfLines={1}>
                {list.name}
            </Text>
            <View>
                <View style={{alignItems:'center'}}>
                    <Text style={styles.count}>{remainingCount}</Text>
                    <Text style={styles.subtitle}>Pendentes</Text>
                </View>
                <View style={{alignItems:'center',paddingTop:10}}>
                    <Text style={styles.count}>{completedCount}</Text>
                    <Text style={styles.subtitle}>Completos</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer:{
        paddingVertical: 20,
        paddingHorizontal: 16,
        borderRadius:6,
        marginHorizontal:12,
        alignItems:'center',
        width:200,
    },
    listTitle:{
        fontSize:24,
        fontWeight:'700',
        color:colors.white,
        marginBottom:18
    },
    count:{
        fontSize:48,
        fontFamily:'sans-serif-light',
        color:colors.white
    },
    subtitle:{
        fontSize:12,
        fontWeight:'700',
        color:colors.white
    }
})