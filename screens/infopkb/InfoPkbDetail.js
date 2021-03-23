import React, { Component, useState, useEffect } from 'react';
import {ImageBackground, TextInput, Pressable, StyleSheet, View, Modal, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, useTheme, DataTable } from 'react-native-paper';
import { responsiveScreenWidth, responsiveScreenFontSize, responsiveScreenHeight, responsiveWidth, responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import { Ionicons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';


function InfoPkbDetail({navigation, route}){
    const { colors } = useTheme(); 

    const [platId, setPlatId] = useState(null);
    const [platIdList, setPlatIdList] = useState([ 
        {label: 'Hitam', value: '1', selected: true},
        {label: 'Kuning', value: '2'},
        {label: 'Merah', value: '3'}
    ]);

    const {p1, p2, p3, pId} = route.params;

    const plat1 = p1;
    const plat2 = p2;
    const plat3 = p3;

    console.log(p1+' , '+p2+' , '+p3+' , '+pId);


    
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


            <ScrollView>

            <View style={styles.menuSection}>

            <View style={{marginBottom: 25, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{top: responsiveScreenHeight(20), width: responsiveScreenWidth(90)}}>

                <Text style={{fontFamily: 'Montserrat-Bold', fontSize: 36, textAlign: 'center'}}>{p1+' - '+p2+' - '+p3}</Text>

                <Text style={{fontFamily: 'Montserrat-Bold', textAlign: 'right', marginTop: 30, marginBottom:10}}>Info Kendaraan</Text>

                <DataTable style={{backgroundColor: 'white', shadowColor: '#000',
                            shadowOffset: { width: 1, height: 2 },
                            shadowOpacity: 0.2,
                            shadowRadius: 3,
                            elevation: 2}}>
                    <DataTable.Row style={{marginVertical: -5,}}>
                        <DataTable.Cell>MERK/TAHUN</DataTable.Cell>
                        <DataTable.Cell>:</DataTable.Cell>
                        <DataTable.Cell>-</DataTable.Cell>
                    </DataTable.Row >
                    <DataTable.Row style={{marginVertical: -5,}}>
                        <DataTable.Cell>MODEL</DataTable.Cell>
                        <DataTable.Cell>:</DataTable.Cell>
                        <DataTable.Cell>-</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={{marginVertical: -5,}}>
                        <DataTable.Cell>WARNA</DataTable.Cell>
                        <DataTable.Cell>:</DataTable.Cell>
                        <DataTable.Cell>-</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={{marginVertical: -5,}}>
                        <DataTable.Cell>NO RANGKA</DataTable.Cell>
                        <DataTable.Cell>:</DataTable.Cell>
                        <DataTable.Cell>-</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={{marginVertical: -5,}}>
                        <DataTable.Cell>NO MESIN</DataTable.Cell>
                        <DataTable.Cell>:</DataTable.Cell>
                        <DataTable.Cell>-</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={{marginVertical: -5,}}>
                        <DataTable.Cell>NO POLISI</DataTable.Cell>
                        <DataTable.Cell>:</DataTable.Cell>
                        <DataTable.Cell>-</DataTable.Cell>
                    </DataTable.Row>

                </DataTable>
                </View>
            </View>

            </View>
            <View style={{backgroundColor: 'white', marginTop: 15, borderTopLeftRadius: 15, borderTopRightRadius: 15}}>

            <View style={{marginBottom: 25, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{ width: responsiveScreenWidth(90)}}>

                <Text style={{fontFamily: 'Montserrat-Bold', textAlign: 'right', marginTop: 30, marginBottom:10}}>Info Pajak Kendaraan dan PNBP</Text>

                <DataTable style={{backgroundColor: 'white', shadowColor: '#000',
                            shadowOffset: { width: 1, height: 2 },
                            shadowOpacity: 0.2,
                            shadowRadius: 3,
                            elevation: 2}}>
                    <DataTable.Row style={{marginVertical: -5,}}>
                        <DataTable.Cell>PKB POK</DataTable.Cell>
                        <DataTable.Cell>:</DataTable.Cell>
                        <DataTable.Cell>-</DataTable.Cell>
                    </DataTable.Row >
                    <DataTable.Row style={{marginVertical: -5,}}>
                        <DataTable.Cell>PKB DEN</DataTable.Cell>
                        <DataTable.Cell>:</DataTable.Cell>
                        <DataTable.Cell>-</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={{marginVertical: -5,}}>
                        <DataTable.Cell>SWDKLLJ POK</DataTable.Cell>
                        <DataTable.Cell>:</DataTable.Cell>
                        <DataTable.Cell>-</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={{marginVertical: -5,}}>
                        <DataTable.Cell>SWDKLLJ DEN</DataTable.Cell>
                        <DataTable.Cell>:</DataTable.Cell>
                        <DataTable.Cell>-</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={{marginVertical: -5,}}>
                        <DataTable.Cell>PNBP STNK</DataTable.Cell>
                        <DataTable.Cell>:</DataTable.Cell>
                        <DataTable.Cell>-</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={{marginVertical: -5,}}>
                        <DataTable.Cell>TOTAL</DataTable.Cell>
                        <DataTable.Cell>:</DataTable.Cell>
                        <DataTable.Cell>-</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={{marginVertical: -5,}}>
                        <DataTable.Cell>TGL PAJAK</DataTable.Cell>
                        <DataTable.Cell>:</DataTable.Cell>
                        <DataTable.Cell>-</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={{marginVertical: -5,}}>
                        <DataTable.Cell>TGL STNK</DataTable.Cell>
                        <DataTable.Cell>:</DataTable.Cell>
                        <DataTable.Cell>-</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={{marginVertical: -5,}}>
                        <DataTable.Cell>MILIK KE</DataTable.Cell>
                        <DataTable.Cell>:</DataTable.Cell>
                        <DataTable.Cell>-</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={{marginVertical: -5,}}>
                        <DataTable.Cell>WILAYAH</DataTable.Cell>
                        <DataTable.Cell>:</DataTable.Cell>
                        <DataTable.Cell>-</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={{marginVertical: -5,}}>
                        <DataTable.Cell>KETERANGAN</DataTable.Cell>
                        <DataTable.Cell>:</DataTable.Cell>
                        <DataTable.Cell>-</DataTable.Cell>
                    </DataTable.Row>

                </DataTable>
                </View>
            </View>

            </View>

        </ScrollView>
        </View>
    );
}

export default InfoPkbDetail;

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
        height: responsiveScreenHeight(63), 
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