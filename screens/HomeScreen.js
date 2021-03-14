import React, { Component } from 'react';
import { FlatList, ImageBackground, Platform, SafeAreaView, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Surface, Text, Button, Divider, ActivityIndicator, useTheme } from 'react-native-paper';
import { responsiveScreenWidth, responsiveScreenFontSize, responsiveScreenHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { useEffect, useState } from 'react';
import { color } from 'react-native-reanimated';


function HomeScreen(props){
    const { colors } = useTheme(); 
    const [isLoading, setLoading] = useState(true);
    const [news, setNews] = useState([]);

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
            <ImageBackground source={require('../assets/header.png')} style={{width: responsiveScreenWidth(105), zIndex: 999}}>
                <View style={{height: responsiveScreenHeight(20), alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: '#FFF', fontSize: responsiveFontSize(3), fontFamily: 'Montserrat-Bold'}}>SAMSAT INDRAMAYU</Text>

                </View>
            </ImageBackground>

            <View style={{backgroundColor: '#FFFFFF', width: responsiveScreenWidth(100), height: responsiveScreenHeight(30), marginTop: -50, borderRadius: 15}}>

            </View>

            <View style={{backgroundColor: '#FFFFFF', width: responsiveScreenWidth(100), height: responsiveScreenHeight(30), marginTop: 25, borderTopEndRadius: 15, borderTopStartRadius: 15}}>
                <Text style={{marginTop:25, marginLeft: 20,fontFamily: 'Montserrat-Bold'}}>Berita dan Info</Text>
                <View style={styles.headSection}>
                    { news?
                    <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={news}
                    renderItem={({ item }) => (
                        <Surface style={styles.btnMenu}>
                            <ImageBackground style={{width: responsiveScreenWidth(85), height: responsiveScreenHeight(20), borderRadius: 10}}
                            source={ {uri:  item.urlToImage} }>
                                <Text style={{fontFamily: 'Montserrat-Bold', fontSize: 20, marginTop: responsiveScreenHeight(12), marginHorizontal: responsiveScreenWidth(2), color: '#FFF'}}>{item.title}</Text>
                            </ImageBackground>
                        </Surface>
                        )}
                        /> :
                         <ActivityIndicator animating={true} color={color.primary}/>
                        }
                    
                </View>
            </View>

            

        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: Platform.OS === 'android' ? responsiveScreenHeight(4) : 0
    },
    headSection: {
        height: responsiveScreenHeight(25),
        marginTop: responsiveScreenWidth(5)
    },
    btnMenu: {
        padding: 8,
        height: responsiveScreenHeight(20),
        width: responsiveScreenWidth(85),
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 0,
        marginHorizontal: responsiveWidth(2),
        backgroundColor: '#ffc031',
        borderRadius: 10
    },
});