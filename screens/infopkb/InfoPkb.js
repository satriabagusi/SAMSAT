import React, { Component, useState } from 'react';
import {ImageBackground, PickerIOSComponent, PickerIOSItem, Pressable, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, useTheme, TextInput } from 'react-native-paper';
import { responsiveScreenWidth, responsiveScreenFontSize, responsiveScreenHeight, responsiveWidth, responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import PkbForm from '../../assets/components/PkbForm';
import Dropdown from '../../assets/components/Dropdown';


function InfoPkb(props){
    const { colors } = useTheme(); 
    const navigation = useNavigation();

    const [plat1, setPlat1] = useState('');
    const [plat2, setPlat2] = useState('');
    const [plat3, setPlat3] = useState('');

    const options = [
        { value:'1', label:'HITAM' },
        { value:'2', label:'KUNING' },
        { value:'3', label:'MERAH' }
      ]
      
      const onViewBySelected = (viewBy) => {
        console.log(viewBy);
      }
    
    return(
        <View style={styles.container}>
            <StatusBar style="light" />
            <ImageBackground source={require('../../assets/header.png')} style={styles.headerBackground}>
                <View style={styles.header}>
                    <Pressable onPress={() => {navigation.goBack()}}>
                    <Ionicons name="arrow-back-circle" size={34} color={colors.light} />
                    </Pressable>
                    <Text style={styles.headerText}>INFO PKB</Text>

                </View>
            </ImageBackground>


            <View style={styles.menuSection}>
                <View style={{flex:1, flexDirection: 'column', marginBottom: 25, justifyContent: 'center', alignItems: 'center'}}>

                    <View style={{...styles.form}}>
                        <TextInput
                        placeholder="E"
                        mode="outlined"
                        maxLength={2}
                        style={{fontFamily:'Montserrat-Bold', fontSize:24,width: 65, textAlign: 'center'}}
                        keyboardType="default"
                        onChange={() => console.log("aaa")}
                        autoCapitalize="characters"
                        />
                        <Text style={{...styles.seperator}}>-</Text>
                        <TextInput
                        placeholder="0000"
                        onChange={setPlat2}
                        mode="outlined"
                        style={{fontFamily:'Montserrat-Bold', fontSize:24, width: 100, textAlign:'center'}}
                        maxLength={4}
                        keyboardType="number-pad"
                        />
                        <Text style={{...styles.seperator}}>-</Text>
                        <TextInput
                        placeholder="X"
                        onChange={setPlat3}
                        mode="outlined"
                        maxLength={3}
                        keyboardType="default"
                        style={{fontFamily:'Montserrat-Bold', fontSize:24, width: 75, textAlign: 'center'}}
                        autoCapitalize="characters"
                        />
                        
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                        <View style={{marginTop: 30}}>
                            <Text style={{fontSize: 14, fontFamily: 'Montserrat-Bold'}}>Warna TNKB</Text>
                            <Dropdown defaultValue={'1'} options={options} onDropdownSelected={(viewBy) => onViewBySelected(viewBy)} />
                        </View>

                        <Button mode="contained" style={{justifyContent: 'center',borderRadius: 5, height: 50, width: 115, zIndex:-1}} onPress={() => console.log()}>
                            <Ionicons name="search" size={16} color="white"/>
                            <Text style={{fontWeight:'bold', fontFamily: 'Montserrat-Bold', textAlign: 'center', fontSize: 18, color: 'white'}}>CARI</Text>
                        </Button>
                    </View>
                </View>


            </View>

        </View>
    );
}

export default InfoPkb;

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
        backgroundColor: '#FFFFFF', 
        width: responsiveScreenWidth(100), 
        height: responsiveScreenHeight(50), 
        top: 0,
        borderRadius: 15,
    }, 
    container: {
        flex: 1,
        // marginTop: Platform.OS === 'android' ? responsiveScreenHeight(4) : 0
    },
    form:{
        flex:1,
        flexDirection: 'row',
        marginTop: responsiveHeight(20),
        justifyContent: 'center',
        alignItems: 'center'
    },
    seperator: {
        marginHorizontal: responsiveScreenWidth(2),
        fontWeight: 'bold',
        fontSize: 32,
        fontFamily: 'Montserrat-Bold'
    }

});