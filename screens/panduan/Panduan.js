import React, { Component } from 'react';
import {ImageBackground, Pressable, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Surface, Text, Button, ActivityIndicator, useTheme } from 'react-native-paper';
import { responsiveScreenWidth, responsiveScreenFontSize, responsiveScreenHeight, responsiveWidth, responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';


function Panduan(props){
    const { colors } = useTheme(); 
    const navigation = useNavigation();

    
    return(
        <View style={styles.container}>
            <StatusBar style="light" />
            <ImageBackground source={require('../../assets/header.png')} style={styles.headerBackground}>
                <View style={styles.header}>
                    <Pressable onPress={() => {navigation.goBack()}}>
                    <Ionicons name="arrow-back-circle" size={34} color={colors.light} />
                    </Pressable>
                    <Text style={styles.headerText}>Panduan</Text>

                </View>
            </ImageBackground>


            <View style={styles.menuSection}>
                <View style={{flex:1, flexDirection: 'row', flexWrap: 'wrap',height: 60,marginTop: 65, marginHorizontal:6, justifyContent: 'center', width: responsiveScreenWidth(100)}}>

                
                </View>

            </View>

            <View style={styles.newsSection}>
                
            </View>

            

        </View>
    );
}

export default Panduan;

const styles = StyleSheet.create({
    headerBackground:{
        width: responsiveScreenWidth(105),
        height: responsiveScreenHeight(25), 
        zIndex: 999,
        position: 'absolute'
    },
    header:{
        flex:1,
        flexDirection: 'row',
        height: responsiveScreenHeight(20), 
        alignItems: 'center', 
        justifyContent: 'space-between',
        marginHorizontal: responsiveScreenWidth(5),
        width: responsiveScreenWidth(90)
    },
    headerText:{
        color: '#FFF', 
        fontSize: responsiveFontSize(3), 
        fontFamily: 'Montserrat-Bold'
    },
    menuSection:{
        backgroundColor: '#FFFFFF', 
        width: responsiveScreenWidth(100), 
        height: 305, 
        marginTop: responsiveHeight(16), 
        borderRadius: 15,
    }, 
    container: {
        flex: 1,
        // marginTop: Platform.OS === 'android' ? responsiveScreenHeight(4) : 0
    },
    newsSection:{
        backgroundColor: '#FFFFFF', 
        width: responsiveScreenWidth(100), 
        height: responsiveHeight(33), 
        marginTop: 25, 
        borderTopEndRadius: 15, 
        borderTopStartRadius: 15
    },

});