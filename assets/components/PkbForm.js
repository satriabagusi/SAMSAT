import React,  { Component, useState } from 'react';
import { TextInput, View, StyleSheet, Pressable } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import DropDownPicker from 'react-native-dropdown-picker';
import { Ionicons, Feather as Icon } from '@expo/vector-icons';




export default class PkbForm extends Component{
  
  render(){
    // const [plat1, setPlat1] = useState('');

    this.state = {
      country: 'uk'
  }

    const options = [
      { value:'1', label:'HITAM' },
      { value:'2', label:'KUNING' },
      { value:'3', label:'MERAH' }
    ]
    
    const onViewBySelected = (viewBy) => {
      console.log(viewBy);
    }

    return(
      <View style={{flex:1, flexDirection: 'column', marginBottom: 25, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{...styles.form}}>
            <TextInput
            placeholder="E"
            mode="outlined"
            maxLength={2}
            style={{fontFamily:'Montserrat-Bold', fontSize:24,width: 65, textAlign: 'center', borderColor: '#F99053', borderWidth:2, height: 65, borderRadius: 5}}
            keyboardType="default"
            // value={setPlat1}
            autoCapitalize="characters"
            />
            <Text style={{...styles.seperator}}>-</Text>
            <TextInput
            placeholder="0000"
            // value={setPlat2}
            mode="outlined"
            style={{fontFamily:'Montserrat-Bold', fontSize:24, width: 100, textAlign:'center', borderColor: '#F99053', borderWidth:2, height: 65, borderRadius: 5}}
            maxLength={4}
            keyboardType="number-pad"
            />
            <Text style={{...styles.seperator}}>-</Text>
            <TextInput
            placeholder="X"
            // value={setPlat3}
            mode="outlined"
            maxLength={3}
            keyboardType="default"
            style={{fontFamily:'Montserrat-Bold', fontSize:24, width: 75, textAlign: 'center', borderColor: '#F99053', borderWidth:2, height: 65, borderRadius: 5}}
            autoCapitalize="characters"
            />
            
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
            <View style={{marginTop: 30}}>
                <Text style={{fontSize: 14, fontFamily: 'Montserrat-Bold'}}>Warna TNKB</Text>
                {/* <Dropdown defaultValue={'1'} options={options} onDropdownSelected={(viewBy) => onViewBySelected(viewBy)} /> */}
                <DropDownPicker
                    items={[
                      {label: 'Hitam', value: '1', selected: true},
                      {label: 'Kuning', value: '2'},
                      {label: 'Merah', value: '3'},
                    ]}
                    containerStyle={{height: responsiveHeight(6)}}
                    style={{backgroundColor: '#fafafa'}}
                    itemStyle={{
                        justifyContent: 'flex-start',
                        backgroundColor: 'white'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item => this.setState({
                        country: item.value
                    })}
                />
            
            </View>

            <View style={{marginTop: 25}}>
              <Button icon="camera" mode="outlined" onPress={() => console.log('Pressed')}>
                Press me
              </Button>
            </View>

        </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
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
})