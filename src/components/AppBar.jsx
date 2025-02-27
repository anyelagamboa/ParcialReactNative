import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'
export const AppBar=()=>{
    const AppBarTab=( {active, children, to} )=>{
        return (
            <Link style={styles.link} to={to}>
                <Text style={styles.AppTittle}>{children}</Text>
            </Link>
        )
    }
    return (
        <View style={styles.AppBar}>
            <AppBarTab active={true} to="/" >Lista de Pokemons</AppBarTab>
        </View>
    )
}

const styles = StyleSheet.create({
    AppBar:{
        backgroundColor: '#000',
        paddingVertical: 5,
        color:'#fff',
        flexDirection:'row',
        marginTop:20
    },
    AppTittle:{
        color:'#fff',
        paddingHorizontal: 5
    },
    link:{
        borderColor:'#fff',
        borderWidth:1,
        padding:5
    }
})