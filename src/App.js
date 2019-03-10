import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import Detail from './Detail';
import Stack from './Stack';
import AlbumList from './AlbumList';

// import AlbumList from './AlbumList';

class HomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: '#ffffff'}}>
                <Text>Home Screen</Text>
            </View>
        );
    }
}


const AppNavigator = createDrawerNavigator({
        Home: {
            screen: HomeScreen
        },
        Tab: Detail,
        Stack: Stack,
        Albums: AlbumList
    },
    {
        initialRouteName: 'Home',
    });



export default createAppContainer(AppNavigator);
