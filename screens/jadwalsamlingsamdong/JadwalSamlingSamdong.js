import React, { Component } from 'react';
import {Alert, ImageBackground, Pressable, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Surface, Text, Button, ActivityIndicator, useTheme, Card, Avatar, Paragraph } from 'react-native-paper';
import { responsiveScreenWidth, responsiveScreenFontSize, responsiveScreenHeight, responsiveWidth, responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';


function JadwalSamlingSamdong(props){
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
                    <Text style={styles.headerText}>Jadwal SAMLING dan SAMDONG</Text>

                </View>
            </ImageBackground>


            <View style={styles.menuSection}>
                <Pressable onPress={() => Alert.alert('Jadwal SAMLING')}>
                <Card style={{marginBottom: 10, width: responsiveScreenWidth(90), fontFamily: 'Montserrat-Regular'}}>
                    <Card.Title 
                        title="Jadwal SAMLING" 
                        subtitle="Jadwal Samsat Keliling"
                        left={(props) => <Avatar.Icon {...props} size={46} icon="car" style={{marginTop:15}} />} />
                    <Card.Content>
                    </Card.Content>
                </Card>
                </Pressable>

                <Pressable onPress={() => Alert.alert('Jadwal SAMLING')}>
                <Card style={{marginBottom: 10, width: responsiveScreenWidth(90)}}>
                    <Card.Title 
                    title="Jadwal SAMDONG" 
                    subtitle="Jadwal Samsat Gendong"
                    left={(props) => <Avatar.Icon {...props} size={46} icon="bike" style={{marginTop:15}} />} />
                        <Card.Content>
                    </Card.Content>
                </Card>
                </Pressable>
            </View>

            

        </View>
    );
}

export default JadwalSamlingSamdong;

const styles = StyleSheet.create({
    headerBackground:{
        width: responsiveScreenWidth(105),
        height: responsiveScreenHeight(25), 
        zIndex: 999,
        position: 'absolute',
        top: -35
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
        fontFamily: 'Montserrat-Bold',
        marginLeft: responsiveScreenWidth(15)
    },
    menuSection:{
        flex:1,
        flexDirection: 'column',
        alignItems: 'center',
        width: responsiveScreenWidth(100), 
        height: 305, 
        marginTop: responsiveHeight(28),
    }, 
    container: {
        flex: 1,
        // marginTop: Platform.OS === 'android' ? responsiveScreenHeight(4) : 0
    },

});