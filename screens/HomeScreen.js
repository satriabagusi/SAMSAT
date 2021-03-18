import React, { Component } from 'react';
import { Alert, FlatList, ImageBackground, Platform, Pressable, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Surface, Text, Button, Divider, ActivityIndicator, useTheme } from 'react-native-paper';
import { responsiveScreenWidth, responsiveScreenFontSize, responsiveScreenHeight, responsiveWidth, responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import { useEffect, useState } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { Ionicons } from '@expo/vector-icons';


function HomeScreen({props, navigation}){
    const { colors } = useTheme(); 
    const [isLoading, setLoading] = useState(true);
    const [news, setNews] = useState([]);
    const [newsLink, setNewsLink] = useState('');

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=indramayu&apiKey=6f0e7d3efe8a4836a0d7621f2c324e05&sortBy=popularity&pageSize=3')
        .then((response) => response.json())
        .then((json) => setNews(json.articles))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false))
    }, []);

    
    return(
        <View style={styles.container}>
            <StatusBar style="light" />
            <ImageBackground source={require('../assets/header.png')} style={styles.headerBackground}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>SAMSAT INDRAMAYU</Text>

                </View>
            </ImageBackground>


            <View style={styles.menuSection}>
                <View style={{flex:1, flexDirection: 'row', flexWrap: 'wrap',height: 60,marginTop: 65, marginHorizontal:6, justifyContent: 'center', width: responsiveScreenWidth(100)}}>

                <Pressable style={styles.btnMenu} 
                onPress={() => {navigation.navigate('InfoPkb')}}>
                <Surface style={{...styles.btnMenuRound, backgroundColor: colors.accent}}>
                    <Ionicons name="car" size={32} color="white" />
                </Surface>
                <Text style={{fontSize:11, fontFamily:'Montserrat-Regular', textAlign: 'center', marginTop: 5}}>Info PKB & Kode Bayar</Text>
                </Pressable>
                
                <Pressable style={styles.btnMenu} 
                onPress={() => {navigation.navigate('Pembayaran')}}>
                <Surface style={{...styles.btnMenuRound, backgroundColor: colors.accent}}>
                    <Ionicons name="cash" size={32} color="white" />
                </Surface>
                <Text style={{fontSize:11, fontFamily:'Montserrat-Regular', textAlign: 'center', marginTop: 5}}>Pembayaran</Text>
                </Pressable>

                <Pressable style={styles.btnMenu} 
                onPress={() => {navigation.navigate('UpdateNoHp')}}>
                <Surface style={{...styles.btnMenuRound, backgroundColor: colors.accent}}>
                    <Ionicons name="create" size={32} color="white" />
                </Surface>
                <Text style={{fontSize:11, fontFamily:'Montserrat-Regular', textAlign: 'center', marginTop: 5}}>Update No Handphone</Text>
                </Pressable>

                <Pressable style={styles.btnMenu} 
                onPress={() => {navigation.navigate('ProteksiKepemilikan')}}>
                <Surface style={{...styles.btnMenuRound, backgroundColor: colors.accent}}>
                    <Ionicons name="lock-open" size={32} color="white" />
                </Surface>
                <Text style={{fontSize:11, fontFamily:'Montserrat-Regular', textAlign: 'center', marginTop: 5}}>Proteksi Kepemilikan</Text>
                </Pressable>

                <Pressable style={styles.btnMenu} 
                onPress={() => {navigation.navigate('LokasiPelayananSamsat')}}>
                <Surface style={{...styles.btnMenuRound, backgroundColor: colors.accent}}>
                    <Ionicons name="map" size={32} color="white" />
                </Surface>
                <Text style={{fontSize:11, fontFamily:'Montserrat-Regular', textAlign: 'center', marginTop: 5}}>Lokasi Pelayanan Samsat</Text>
                </Pressable>
                
                <Pressable style={styles.btnMenu} 
                onPress={() => {navigation.navigate('JadwalSamlingSamdong')}}>
                <Surface style={{...styles.btnMenuRound, backgroundColor: colors.accent}}>
                    <Ionicons name="calendar" size={32} color="white" />
                </Surface>
                <Text style={{fontSize:11, fontFamily:'Montserrat-Regular', textAlign: 'center', marginTop: 5}}>Jadwal SAMLING dan SAMDONG</Text>
                </Pressable>

                <Pressable style={styles.btnMenu} 
                onPress={() => {navigation.navigate('PersyaratanPendaftaran')}}>
                <Surface style={{...styles.btnMenuRound, backgroundColor: colors.accent}}>
                    <Ionicons name="document-text" size={32} color="white" />
                </Surface>
                <Text style={{fontSize:11, fontFamily:'Montserrat-Regular', textAlign: 'center', marginTop: 5}}>Persyaratan Pendaftaran Samsat</Text>
                </Pressable>

                <Pressable style={styles.btnMenu} 
                onPress={() => {navigation.navigate('Panduan')}}>
                <Surface style={{...styles.btnMenuRound, backgroundColor: colors.accent}}>
                    <Ionicons name="book" size={32} color="white" />
                </Surface>
                <Text style={{fontSize:11, fontFamily:'Montserrat-Regular', textAlign: 'center', marginTop: 5}}>Panduan</Text>
                </Pressable>


                
                </View>

            </View>

            <View style={styles.newsSection}>
                <Text style={{marginTop:25, marginLeft: 20,fontFamily: 'Montserrat-Bold'}}>Berita dan Info</Text>
                <View style={styles.newsSlider}>
                    { isLoading !== true ?
                    <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={news}
                    renderItem={({item }) => (
                        <Pressable onPress={() => WebBrowser.openBrowserAsync(item.url)}>
                        <Surface style={styles.btnNews}>
                            <ImageBackground style={{width: responsiveScreenWidth(85), height: responsiveScreenHeight(20)}}
                            imageStyle={{borderRadius: 10}}
                            keyExtractor={(item, index) => item.key}
                            source={ {uri:  item.urlToImage} }>
                                <Text style={styles.newsTitle}>{item.title}</Text>
                                <View style={{position: 'absolute', height: '100%', width: '100%', backgroundColor: '#000',opacity: 0.3, borderRadius: 10}}/>
                            </ImageBackground>
                        </Surface>
                        </Pressable>
                        )}
                        /> :
                         <ActivityIndicator animating={true} color={colors.primary}/>
                        }
                    
                </View>
            </View>

            

        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    headerBackground:{
        width: responsiveScreenWidth(105),
        height: responsiveScreenHeight(25), 
        zIndex: 999,
        position: 'absolute'
    },
    header:{
        height: responsiveScreenHeight(20), 
        alignItems: 'center', 
        justifyContent: 'center'
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
    newsSlider: {
        height: responsiveScreenHeight(25),
        marginTop: responsiveScreenWidth(5)
    },
    newsSection:{
        backgroundColor: '#FFFFFF', 
        width: responsiveScreenWidth(100), 
        height: responsiveHeight(33), 
        marginTop: 25, 
        borderTopEndRadius: 15, 
        borderTopStartRadius: 15
    },
    newsTitle:{
        fontFamily: 'Montserrat-Bold', 
        fontSize: responsiveScreenFontSize(2), 
        marginTop: responsiveScreenHeight(12), 
        marginHorizontal: responsiveScreenWidth(2), 
        color: '#FFF',
        zIndex: 97
    },
    btnNews: {
        padding: 8,
        height: responsiveScreenHeight(20),
        width: responsiveScreenWidth(85),
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        marginHorizontal: responsiveWidth(2),
        backgroundColor: '#ffc031',
        borderRadius: 10
    },
    btnMenu: {
        marginRight: 15,
        marginTop: 15,
        alignItems: 'center', 
        width: 80
    },
    btnMenuRound: {
        elevation: 3, 
        borderRadius: 50, 
        width: 60, 
        height: 60,
        alignItems: 'center', 
        justifyContent:'center'
    },

});