import { StyleSheet, Text, View, } from 'react-native'
import React, { useState, useContext } from 'react'
import TodoList from '../components/TodoList';
import { TodoContext } from './../contexts/TodoContext';

const HomeScreen = () => {

    console.log("Home Screen")


    return (
        <View style={{ flex: 1 }}>
            <TodoList />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})