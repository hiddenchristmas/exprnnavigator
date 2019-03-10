import React, { Component } from 'react';
import { TouchableOpacity, Image, Button } from 'react-native';

class BackButton extends Component {


    render() {
        return (
            <TouchableOpacity
                onPress={this._handleDrawer}>
                <Image source={{uri: 'https://image.flaticon.com/icons/png/128/52/52045.png'}}/>
            </TouchableOpacity>
        );
    }

}

export default BackButton;