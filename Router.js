import React, { useState } from 'react';
import { Text, TextInput } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';

import InfoPkb from './screens/infopkb/InfoPkb';
import InfoPkbDetail from './screens/infopkb/InfoPkbDetail';

import Pembayaran from './screens/pembayaran/Pembayaran';
import PembayaranDetail from './screens/pembayaran/PembayaranDetail';

import UpdateNoHp from './screens/updatenohp/UpdateNoHp';

import ProteksiKepemilikan from './screens/proteksikepemilikan/ProteksiKepemilikan';

import LokasiPelayananSamsat from './screens/lokasipelayanansamsat/LokasiPelayananSamsat';
import LokasiPelayananSamsatList from './screens/lokasipelayanansamsat/LokasiPelayananSamsatList';

import JadwalSamlingSamdong from './screens/jadwalsamlingsamdong/JadwalSamlingSamdong';
import JadwalSamling from './screens/jadwalsamlingsamdong/JadwalSamling';
import JadwalSamdong from './screens/jadwalsamlingsamdong/JadwalSamdong';

import PersyaratanPendaftaran from './screens/persyaratanpendaftaran/PersyaratanPendaftaran';

import Panduan from './screens/panduan/Panduan';

const InfoPkbStack = createStackNavigator();
function InfoPkbStackScreen() {
    return(
            <InfoPkbStack.Navigator
            initialRouteName="InfoPkb"
            screenOptions={{headerShown:false}}>
                <InfoPkbStack.Screen name="InfoPkb" component={InfoPkb}/>
                {/* <InfoPkb.Screen name="InfoPkbDetail" component={InfoPkbDetail}/> */}
            </InfoPkbStack.Navigator>
    );
}

const PembayaranStack = createStackNavigator();
function PembayaranStackScreen(){
    return(
        <PembayaranStack.Navigator
        initialRouteName="Pembayaran"
            screenOptions={{headerShown:false}}>
            <PembayaranStack.Screen name="Pembayaran" component={Pembayaran}/>
        </PembayaranStack.Navigator>
    );
}

const UpdateNoHpStack = createStackNavigator();
function UpdateNoHpStackScreen(){
    return(
        <UpdateNoHpStack.Navigator
        initialRouteName="UpdateNoHp"
            screenOptions={{headerShown:false}}>
            <UpdateNoHpStack.Screen name="UpdateNoHp" component={UpdateNoHp}/>
        </UpdateNoHpStack.Navigator>
    );
}

const ProteksiKepemilikanStack = createStackNavigator();
function ProteksiKepemilikanStackScreen(){
    return(
        <ProteksiKepemilikanStack.Navigator
        initialRouteName="ProteksiKepemilikan"
        screenOptions={{headerShown: false}}>
            <ProteksiKepemilikanStack.Screen name="ProteksiKepemilikan" component={ProteksiKepemilikan}/>
        </ProteksiKepemilikanStack.Navigator>
    );
}

const LokasiPelayananSamsatStack = createStackNavigator();
function LokasiPelayananSamsatStackScreen(){
    return(
        <LokasiPelayananSamsatStack.Navigator
        initialRouteName="LokasiPelayananSamsat"
        screenOptions={{headerShown: false}}>
            <LokasiPelayananSamsatStack.Screen name="LokasiPelayananSamsat" component={LokasiPelayananSamsat}/>
            <LokasiPelayananSamsatStack.Screen name="LokasiPelayananSamsatList" component={LokasiPelayananSamsatList} />
        </LokasiPelayananSamsatStack.Navigator>
    );
}

const JadwalSamlingSamdongStack = createStackNavigator();
function JadwalSamlingSamdongStackScreen(){
    return(
        <JadwalSamlingSamdongStack.Navigator
        initialRouteName="JadwalSamlingSamdong"
        screenOptions={{headerShown: false}}>
            <JadwalSamlingSamdongStack.Screen name="JadwalSamlingSamdong" component={JadwalSamlingSamdong} />
            <JadwalSamlingSamdongStack.Screen name="JadwalSamling" component={JadwalSamling} />
            <JadwalSamlingSamdongStack.Screen name="JadwalSamdong" component={JadwalSamdong} />
        </JadwalSamlingSamdongStack.Navigator>
    );
}

const PersyaratanPendaftaranStack = createStackNavigator();
function PersyaratanPendaftaranStackScreen(){
    return(
        <PersyaratanPendaftaranStack.Navigator
        initialRouteName="JadwalSamlingSamdong"
        screenOptions={{headerShown: false}}>
            <PersyaratanPendaftaranStack.Screen name="PersyaratanPendaftaran" component={PersyaratanPendaftaran} />
        </PersyaratanPendaftaranStack.Navigator>
    );
}

const PanduanStack = createStackNavigator();
function PanduanStackScreen(){
    return(
        <PanduanStack.Navigator
        initialRouteName="JadwalSamlingSamdong"
        screenOptions={{headerShown: false}}>
            <PanduanStack.Screen name="Panduan" component={Panduan} />
        </PanduanStack.Navigator>
    );
}

const Stack = createStackNavigator();
function Router () {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="InfoPkb" component={InfoPkbStackScreen}/>
                <Stack.Screen name="Pembayaran" component={PembayaranStackScreen}/>
                <Stack.Screen name="UpdateNoHp" component={UpdateNoHpStackScreen}/>
                <Stack.Screen name="ProteksiKepemilikan" component={ProteksiKepemilikanStackScreen}/>
                <Stack.Screen name="LokasiPelayananSamsat" component={LokasiPelayananSamsatStackScreen}/>
                <Stack.Screen name="JadwalSamlingSamdong" component={JadwalSamlingSamdongStackScreen} />
                <Stack.Screen name="PersyaratanPendaftaran" component={PersyaratanPendaftaranStackScreen} />
                <Stack.Screen name="Panduan" component={PanduanStackScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;