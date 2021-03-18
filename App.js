import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { useFonts } from 'expo-font';
import AppLoading  from 'expo-app-loading';
import Router from './Router';


const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#F99053',
    accent: '#DC7E47',
    success: '#47DC70',
    warning: '#DCCD47',
    danger: '#DC4747',
    info: '#47DCDC',
    light: '#F2F2F2',
    dark: '#212529' 
  },
};

export default App => {
  let [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Thin': require('./assets/fonts/Montserrat-Thin.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading/>
  }else{
    return(
      <PaperProvider theme={theme}>
        <Router />
      </PaperProvider>
    );
  }
}

