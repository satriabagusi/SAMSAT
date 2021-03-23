import React, { Component, useState } from 'react';
import { ImageBackground, Pressable, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Text, useTheme } from 'react-native-paper';
import { responsiveScreenWidth, responsiveScreenFontSize, responsiveScreenHeight, responsiveWidth, responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import { Ionicons } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';

function JadwalSamling({props, navigation, route}){
    const { colors } = useTheme(); 

    const { urlId } = route.params;

    
    return(
        <View style={styles.container}>
            <StatusBar style="light" />
            <ImageBackground source={require('../../assets/header.png')} style={styles.headerBackground}>
                <View style={styles.header}>
                    <Pressable onPress={() => {navigation.goBack()}}>
                    <Ionicons name="arrow-back-circle" size={34} color={colors.light} />
                    </Pressable>
                    {urlId == 1 ? 
                    <Text style={styles.headerText}>Jadwal Samling (Indramayu I)</Text>
                    : 
                    <Text style={styles.headerText}>Jadwal Samling (Indramayu II)</Text>
                    }

                </View>
            </ImageBackground>

                {urlId == 1 ? 
                <WebView source={{ uri: 'https://bapenda.jabarprov.go.id/jadwal-samsat-keliling-samsat-gendong-wilayah-kabupaten-indramayu-i/' }} style={{ marginTop: responsiveScreenHeight(8) }} />
                :
                <WebView source={{ uri: 'https://bapenda.jabarprov.go.id/jadwal-samsat-keliling-samsat-gendong-wilayah-kabupaten-indramayu-ii-haurgeulis/' }} style={{ marginTop: responsiveScreenHeight(8) }} />
                }

            

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
        fontSize: responsiveFontSize(2.5), 
        fontFamily: 'Montserrat-Bold',
        marginLeft: responsiveScreenWidth(5)
    },
    menuSection:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: responsiveScreenWidth(100),
        height: responsiveScreenHeight(100),
    }, 
    container: {
        flex: 1,
        // marginTop: Platform.OS === 'android' ? responsiveScreenHeight(4) : 0
    },


});