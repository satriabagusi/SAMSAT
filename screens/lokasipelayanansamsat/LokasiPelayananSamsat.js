import React, { Component, useState } from 'react';
import {Alert, ImageBackground, Pressable, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Surface, Text, Button, ActivityIndicator, useTheme } from 'react-native-paper';
import { responsiveScreenWidth, responsiveScreenFontSize, responsiveScreenHeight, responsiveWidth, responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';


function LokasiPelayananSamsat(props){
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
                    <Text style={styles.headerText}>Lokasi Samsat</Text>

                </View>
            </ImageBackground>


            <View style={styles.menuSection}>
            <MapView style={styles.map} 
            provider="google"
            initialRegion={{
                latitude: -6.409414,
                longitude: 108.2955219,
                latitudeDelta: 0.25,
                longitudeDelta: 0.1,
            }}>
                <Marker
                coordinate={{latitude:-6.473231, longitude: 108.303589}}
                title="SAMSAT OUTLET JATIBARANG"
                description="SAMSAT Outlet JATIBARANG"
                pinColor={colors.primary}
                />
                <Marker
                coordinate={{latitude:-6.348820, longitude: 108.327323}}
                title="SAMSAT INDRAMAYU"
                description="SAMSAT INDRAMAYU"
                pinColor={colors.primary}
                />
            </MapView>
            
            <Pressable style={{...styles.btnMapMenu, backgroundColor: colors.accent}} onPress={() => {navigation.navigate('LokasiPelayananSamsatList')}}>
            <Surface style={{...styles.mapMenu, }}>
                <Ionicons name="menu" size={32} color="white"/>
            </Surface>
            </Pressable>
            </View>

            

        </View>
    );
}

export default LokasiPelayananSamsat;

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
    }, 
    container: {
        flex: 1,
        // marginTop: Platform.OS === 'android' ? responsiveScreenHeight(4) : 0
    },
    map: {
        width: responsiveScreenWidth(100),
        height: responsiveScreenHeight(100),
      },
    mapMenu:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        backgroundColor: 'transparent'
    },
    btnMapMenu: {
        width: 62,
        height: 62,
        borderRadius: 42,
        position: 'absolute',
        bottom: responsiveScreenHeight(3),
        left: responsiveScreenWidth(3),
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 2,
    }

});