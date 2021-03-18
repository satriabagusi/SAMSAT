import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, TextInput, useTheme } from 'react-native-paper';
import { responsiveHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

import { Ionicons } from '@expo/vector-icons';

export default function PkbForm(props) {
    const { colors } = useTheme(); 
 
    const tnkb = [
        { label: 'Hitam', value: '1' },
        { label: 'Kuning', value: '2' },
        { label: 'Merah', value: '3' },
      ];

      const [plat1, setPlat1] = useState('');
      const [plat2, setPlat2] = useState('');
      const [plat3, setPlat3] = useState('');

      const onViewBySelected = (viewBy) => {
        console.log(viewBy);
      }

    return(
        <View style={{flex:1, flexDirection: 'column',  height: responsiveScreenWidth(70), marginTop: 50, justifyContent: 'space-between'}}>

        
        </View>
    );
}

const styles = StyleSheet.create({
    
});

