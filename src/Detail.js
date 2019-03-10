import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import InStack from './InStack';
import AlbumList from './AlbumList';

class DetailsScreen1 extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'yellow' }}>
                <Text>Details 1</Text>
            </View>
        );
    }
}

class DetailsScreen2 extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue' }}>
                <Text>Details 2</Text>
            </View>
        );
    }
}

class DetailsScreen3 extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green' }}>
                <Text>Details 3</Text>
            </View>
        );
    }
}

class DetailsScreen4 extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'pink' }}>
                <Text>Details 4</Text>
            </View>
        );
    }
}



const Detail = createBottomTabNavigator({
    yellow: {
        screen: DetailsScreen1,
        navigationOptions: {
            header: true,
        },
    },
    blue: {
        screen: DetailsScreen2,
    },
    green: {
        screen: DetailsScreen3,
    },
    pink: {
        screen: AlbumList,
    },
    stack: {
        screen: InStack,
    },
}, {
    initialRouteName: 'yellow',
});

export default Detail;