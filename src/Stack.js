import React, { Component } from 'react';
import { View, Text, Button, Image, TouchableHighlight } from 'react-native';
import { NavigationActions, HeaderBackButton, StackActions, createStackNavigator } from 'react-navigation';
import BackButton from './BackButton';

class StackScreen2 extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red' }}>
                <Text>Details 1</Text>
            </View>
        );
    }
}

class StackScreen1 extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'violet' }}>
                <Text>Details 2</Text>
                <Button
                    title="Go to Red"
                    onPress={() => {
                        this.props.navigation.dispatch(
                            StackActions.reset({
                                index: 0,
                                actions: [NavigationActions.navigate({ routeName: 'Stack2' })],
                            })
                        );
                    }}
                />
            </View>
        );
    }
}

const Detail = createStackNavigator({
    Stack1: {
        screen: StackScreen1,
        navigationOptions: () => ({
            title: 'Profile',
        }),
        headerBackTitle: 'A much too long text for back button from B to A',
        headerTruncatedBackTitle: `to A`
    },
    Stack2: {
        screen: StackScreen2,
        navigationOptions: ({navigation}) => ({
            title: `B`,
            headerLeft: <HeaderBackButton onPress={() => navigation.goBack('Stack1')} />,
        }),
    },
}, {
    initialRouteName: 'Stack1',
});

export default Detail;