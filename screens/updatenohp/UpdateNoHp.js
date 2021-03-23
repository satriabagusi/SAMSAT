import React, { Component, useState, useEffect } from 'react';
import {ImageBackground, TextInput, Pressable, StyleSheet, View, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, useTheme, Portal, Modal } from 'react-native-paper';
import { responsiveScreenWidth, responsiveScreenFontSize, responsiveScreenHeight, responsiveWidth, responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import { Ionicons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';

function UpdateNoHp({props, navigation}){
    const { colors } = useTheme(); 

    const [platId, setPlatId] = useState('1');
    const [platIdList, setPlatIdList] = useState([ 
        {label: 'Hitam', value: '1', selected: true},
        {label: 'Kuning', value: '2'},
        {label: 'Merah', value: '3'}
    ]);

    const [plat1, setPlat1] = useState('');
    const [plat2, setPlat2] = useState('');
    const [plat3, setPlat3] = useState('');

    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    function checkPlat(){
        if(plat1 == '' || plat2 == '' || plat3 == '') {
            showModal()
        }else{
            Alert.alert('OK');
        }

    }

    
    return(
        <View style={styles.container}>
            <StatusBar style="light" />
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.containerStyle}>
                    <Text style={{fontFamily: 'Montserrat-Bold'}}>Plat Nomor Kosong</Text>
                    <Text style={{fontFamily: 'Montserrat-Regular', marginTop: 20}}>Plat Nomor belum terisi, silahkan periksa kembali</Text>
                    <Button 
                    mode="outlined" 
                    style={{marginTop: 20, borderRadius: 10}}
                    onPress={hideModal}>Ok</Button>
                </Modal>
            </Portal>
            <ImageBackground source={require('../../assets/header.png')} style={styles.headerBackground}>
                <View style={styles.header}>
                    <Pressable onPress={() => {navigation.goBack()}}>
                    <Ionicons name="arrow-back-circle" size={34} color={colors.light} />
                    </Pressable>
                    <Text style={styles.headerText}>Update No Handphone</Text>

                </View>
            </ImageBackground>


            <View style={styles.menuSection}>

            <View style={{flex:1, flexDirection: 'column', marginBottom: 25, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{...styles.form}}>
                    <TextInput
                    placeholder="E"
                    mode="outlined"
                    maxLength={2}
                    style={{fontFamily:'Montserrat-Bold', fontSize:24,width: 65, textAlign: 'center', borderColor: '#F99053', borderWidth:2, height: 65, borderRadius: 5}}
                    keyboardType="default"
                    onChangeText={value => setPlat1(value)}
                    autoCapitalize="characters"
                    />
                    <Text style={{...styles.seperator}}>-</Text>
                    <TextInput
                    placeholder="0000"
                    onChangeText={value => setPlat2(value)}
                    mode="outlined"
                    style={{fontFamily:'Montserrat-Bold', fontSize:24, width: 100, textAlign:'center', borderColor: '#F99053', borderWidth:2, height: 65, borderRadius: 5}}
                    maxLength={4}
                    keyboardType="number-pad"
                    />
                    <Text style={{...styles.seperator}}>-</Text>
                    <TextInput
                    placeholder="X"
                    onChangeText={value => setPlat3(value)}
                    mode="outlined"
                    maxLength={3}
                    keyboardType="default"
                    style={{fontFamily:'Montserrat-Bold', fontSize:24, width: 95, textAlign: 'center', borderColor: '#F99053', borderWidth:2, height: 65, borderRadius: 5}}
                    autoCapitalize="characters"
                    />
                    
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                    <View style={{marginTop: 30}}>
                        <Text style={{fontSize: 14, fontFamily: 'Montserrat-Bold'}}>Warna TNKB</Text>
                        {/* <Dropdown defaultValue={'1'} options={options} onDropdownSelected={(viewBy) => onViewBySelected(viewBy)} /> */}
                        <DropDownPicker
                            items={platIdList}
                            containerStyle={{height: responsiveHeight(6), width: responsiveWidth(60)}}
                            style={{backgroundColor: 'white', marginTop: 5}}
                            labelStyle={{fontFamily: 'Montserrat-Regular', fontSize: 16, justifyContent: 'center'}}
                            itemStyle={{
                                justifyContent: 'center',
                                backgroundColor: 'white',
                                marginVertical: 3,
                            }}
                            dropDownStyle={{backgroundColor: 'white', 
                            shadowColor: '#000',
                            shadowOffset: { width: 1, height: 2 },
                            shadowOpacity: 0.2,
                            shadowRadius: 3,
                            elevation: 2}}
                            value={platId}
                            onChangeItem={platIdList => setPlatId(platIdList.value)}
                        />

                    <Button mode="outlined" style={{marginTop: 20, borderRadius: 10,}} onPress={checkPlat}>
                        <Text style={{fontFamily: 'Montserrat-Bold', fontSize: 18, color: colors.accent}}>
                            <Ionicons name="cash" size={18} style={{color: colors.accent}} />
                            Bayar
                        </Text>
                    </Button>
                    
                    </View>

        </View>
    </View>

            </View>

        </View>
    );
}

export default UpdateNoHp;

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
      },

      containerStyle: {
        backgroundColor: 'white', 
        padding: 20,
        marginHorizontal: responsiveScreenWidth(10),
        borderRadius: 20
    },

});