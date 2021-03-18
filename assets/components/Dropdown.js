import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign'
import {r} from '../style/Responsive'

const styles = StyleSheet.create({
    boxDropdown: {
        alignItems:'flex-start',
        marginVertical: r(10),
        zIndex: 999,
    },
    dropdown: {
        width: r(324),
        height: r(37),
        justifyContent: 'center',
        borderWidth: 1,
        borderTopRightRadius: 3,
        borderTopLeftRadius: 3,
        borderColor: '#C0C0C0',
        paddingHorizontal: r(8)
    },
    boxLabel: {
        flexDirection:'row',
        alignItems:'center',
        backgroundColor: 'white'
    },
    label: {
        fontSize: 16,
        // fontFamily: "m-medium",
        color: 'black',
        fontFamily: 'Montserrat-Regular',
    },
    arrow: {
        position:'absolute',
        right:0,
        fontSize:20,
        marginLeft:20
    },
    containerOptions: {
        position:'absolute',
        top:r(35),
        width: r(324),
        // paddingVertical:8,
        borderWidth: 1,
        borderColor: '#C0C0C0',
        borderBottomRightRadius: 3,
        borderBottomLeftRadius: 3,
        backgroundColor: 'white',
        zIndex:999,
    },
    labelOption: {
        fontSize: 16,
        paddingVertical: r(5),
        // paddingLeft: 30,
        paddingHorizontal: r(8),
        color: 'black',
        fontFamily: 'Montserrat-Regular',
    }
});

class DropdownItem extends Component {
    render() {
        return (
            <View >
                <Text style={styles.labelOption} onPress={this.props.clickHandle}>{this.props.label}</Text>
                <View style={{borderBottomWidth: 1, borderColor: '#C0C0C0'}}/>
            </View>
        )
    }
}

export default class Dropdown extends Component {
    constructor(props) {
        super(props);
        
        // initialize state
        this.state = { 
            showDropdown: false,
            // loading: true
        };

        this.options = props.options;
        this.options.map((option, key) => {
            if (option.value == props.defaultValue) {
                this.state.selectedValue = option.value;
                this.state.selectedText = option.label;
            }
        });

        // onDropdownSelected event
        this.onDropDownSelected = (selectedValue) => props.onDropdownSelected(selectedValue);
    }
    selectOption = (selectedValue) => {
        this.options.map((option, key) => {
            if (option.value == selectedValue) {
                this.setState({
                    selectedValue: option.value,
                    selectedText: option.label
                });
                
                this.onDropDownSelected(selectedValue);
                this._onPress();
            }
        });
    }

    _renderOptions(options) {
        this.options = options;

        return options.map((val, key) => {
            return <DropdownItem key={key} label={val.label} clickHandle={() => this.selectOption(val.value)} />
        });
    }

    _onPress = () => {
        this.setState({
            showDropdown: !this.state.showDropdown
        });
    }

    static Item = DropdownItem;

	render() {
        return (
            <View style={styles.boxDropdown}>
                <TouchableOpacity activeOpacity={1} underlayColor='#f0f0f0' style={[styles.dropdown, 
                    {borderBottomLeftRadius: this.state.showDropdown ? 0 : 3,
                    borderBottomRightRadius: this.state.showDropdown ? 0 : 3}]} 
                    onPress={this._onPress}>
                    <View style={styles.boxLabel}>
                        <Text style={styles.label}>{this.state.selectedText}</Text>
                    <View style={{marginLeft: 'auto'}}>
                        {this.state.showDropdown ? (<Icon size={r(18)} name={'up'} color='#C0C0C0' />) : 
                        (<Icon size={r(18)} name={'down'} color='#C0C0C0' />)}
                    </View>
                    </View>
                </TouchableOpacity>
                {this.state.showDropdown ? (
                    <View style={styles.containerOptions}>
                        {this._renderOptions(this.props.options)}
                    </View>
                ) : (
                    null
                )}
            </View>
		)
	}
}