import React, { Component, useState } from 'react';
import {Alert, FlatList, ImageBackground, Linking, Platform, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Surface, Text, Button, ActivityIndicator, useTheme, Card, Avatar, Title, Paragraph } from 'react-native-paper';
import { responsiveScreenWidth, responsiveScreenFontSize, responsiveScreenHeight, responsiveWidth, responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import MapView, { Marker } from 'react-native-maps';


function LokasiPelayananSamsat(props){
    const { colors } = useTheme(); 
    const navigation = useNavigation();

    const DATA = [
        {
            nama: 'Samsat Indramayu',
            alamat: 'Jl. Gatot Subroto, Kepandean, Kec. Indramayu, Kabupaten Indramayu, Jawa Barat 45214',
            telp: '(0234) 274301',
            latitude:"-6.349024376532137", 
            longitude: "108.32728788261835",
        },
        {
            nama: 'Samsat Outlet Jatibarang',
            alamat: 'Jl. Sinar, Jatibarang Baru, Kec. Jatibarang, Kabupaten Indramayu, Jawa Barat 45273',
            telp: '-',
            latitude:"-6.473231", 
            longitude: "108.303589",
        },
      ];
    
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
                <ScrollView>
                    
                <FlatList
                    data={DATA}
                    renderItem={({item }) => (
                        <Pressable onPress={() => {Platform.OS == "android" ?
                        Linking.openURL('google.navigation:q='+item.latitude+','+item.longitude+'') :
                        Linking.openURL('maps://app?saddr=100+101&daddr='+item.latitude+'+'+item.lon+'')
                        } }>
                        
                        <Card style={{marginBottom: 10, width: responsiveScreenWidth(90)}}>
                            <Card.Title title={item.nama} />
                            <Card.Content>
                            <Paragraph>{item.alamat}</Paragraph>
                            <Paragraph>{item.telp}</Paragraph>
                            </Card.Content>
                        </Card>
                        </Pressable>
                        )}
                />
                </ScrollView>
            
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
        width: responsiveScreenWidth(100),
        height: responsiveScreenHeight(100),
        marginTop: responsiveScreenHeight(20)
    }, 
    container: {
        flex: 1,
        // marginTop: Platform.OS === 'android' ? responsiveScreenHeight(4) : 0
    },


});