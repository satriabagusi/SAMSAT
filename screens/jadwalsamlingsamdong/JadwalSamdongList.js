import React, { Component, useState } from 'react';
import {Alert, FlatList, ImageBackground, Linking, Platform, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Surface, Text, Button, ActivityIndicator, useTheme, Card, Avatar, Title, Paragraph } from 'react-native-paper';
import { responsiveScreenWidth, responsiveScreenFontSize, responsiveScreenHeight, responsiveWidth, responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import MapView, { Marker } from 'react-native-maps';


function JadwalSamdongList(props){
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
                    <Text style={styles.headerText}>Jadwal Samdong</Text>

                </View>
            </ImageBackground>


            <View style={styles.menuSection}>
                        <Card style={{ width: responsiveScreenWidth(95)}}>
                            <Card.Title 
                            title="Samsat Gendong Belum Tersedia" 
                            subtitle="Samsat gendong belum tersedia"
                            left={(props) => <Avatar.Icon {...props} size={46} icon="bike" style={{marginTop:15}} />} />
                                <Card.Content>
                            </Card.Content>
                        </Card>
                {/* <ScrollView>
                    <Pressable onPress={() => Alert.alert('Jadwal SAMLING')}>
                        <Card style={{marginBottom: 10, width: responsiveScreenWidth(90)}}>
                            <Card.Title 
                            title="Indramayu I (Kab)" 
                            subtitle="Jadwal Samsat Keliling Wilayah Indramayu I"
                            left={(props) => <Avatar.Icon {...props} size={46} icon="car" style={{marginTop:15}} />} />
                                <Card.Content>
                            </Card.Content>
                        </Card>
                    </Pressable>
                    <Pressable onPress={() => Alert.alert('Jadwal SAMLING')}>
                        <Card style={{marginBottom: 10, width: responsiveScreenWidth(90)}}>
                            <Card.Title 
                            title="Indramayu II (Kab) Hargeulis" 
                            subtitle="Jadwal Samsat Keliling Wilayah Indramayu II"
                            left={(props) => <Avatar.Icon {...props} size={46} icon="car" style={{marginTop:15}} />} />
                                <Card.Content>
                            </Card.Content>
                        </Card>
                    </Pressable>
                </ScrollView> */}
            
            </View>

            

        </View>
    );
}

export default JadwalSamdongList;

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
    }, 
    container: {
        flex: 1,
        // marginTop: Platform.OS === 'android' ? responsiveScreenHeight(4) : 0
    },


});