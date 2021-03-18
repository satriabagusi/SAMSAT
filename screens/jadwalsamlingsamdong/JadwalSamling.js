import React, { Component, useState } from 'react';
import {Alert, FlatList, ImageBackground, Linking, Platform, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Surface, Text, Button, ActivityIndicator, useTheme, Card, Avatar, Title, Paragraph } from 'react-native-paper';
import { responsiveScreenWidth, responsiveScreenFontSize, responsiveScreenHeight, responsiveWidth, responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import MapView, { Marker } from 'react-native-maps';


function JadwalSamling(props){
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
                    <Text style={styles.headerText}>Jadwal Samling</Text>

                </View>
            </ImageBackground>


            <View style={styles.menuSection}>
                <ScrollView>
                    <Card style={{marginBottom: 10, width: responsiveScreenWidth(90)}}>
                        <Card.Title title="Jadwal SAMLING" subtitle="Jadwal Samsat Keliling"/>
                        <Card.Content>
                        </Card.Content>
                    </Card>
                    <Card style={{marginBottom: 10, width: responsiveScreenWidth(90)}}>
                        <Card.Title title="Jadwal SAMLING" subtitle="Jadwal Samsat Keliling"/>
                        <Card.Content>
                        </Card.Content>
                    </Card>
                </ScrollView>
            
            </View>

            

        </View>
    );
}

export default JadwalSamling;

const styles = StyleSheet.create({
    headerBackground:{
        width: responsiveScreenWidth(105),
        height: responsiveScreenHeight(25), 
        zIndex: 999,
        position: 'absolute',
        top: -40
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: responsiveScreenWidth(100),
        height: responsiveScreenHeight(100),
        marginTop: responsiveScreenHeight(20)
    }, 
    container: {
        flex: 1,
        // marginTop: Platform.OS === 'android' ? responsiveScreenHeight(4) : 0
    },


});