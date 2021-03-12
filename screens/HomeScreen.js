import React, { Component } from 'react';
import { FlatList, Platform, SafeAreaView, StyleSheet, View } from 'react-native';
import { Surface, Text, Button, Divider } from 'react-native-paper';
import { responsiveScreenWidth, responsiveScreenFontSize, responsiveScreenHeight, responsiveWidth } from 'react-native-responsive-dimensions';


const DATA = [
    {
        title: 'First Item',
    },
    {
        title: 'Second Item',
    },
    {
        title: 'Third Item',
    },
];

function HomeScreen(){
    
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.headSection}>
            <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={DATA}
            renderItem={({ item }) => (
                <Surface style={styles.btnMenu}>
                        <Text>{item.title}</Text>
                    </Surface>
                )}
                />
            </View>

        </SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: Platform.OS === 'android' ? responsiveScreenHeight(4) : 0
    },
    headSection: {
        height: responsiveScreenHeight(25),
        marginTop: responsiveScreenWidth(25)
    },
    btnMenu: {
        padding: 8,
        height: responsiveScreenHeight(20),
        width: responsiveScreenWidth(85),
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        marginHorizontal: responsiveWidth(2),
    },
});