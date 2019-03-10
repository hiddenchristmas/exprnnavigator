import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationActions, StackActions, createStackNavigator } from 'react-navigation';

class StackScreen1 extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red' }}>
                <Text>Details 1</Text>
            </View>
        );
    }
}

class StackScreen2 extends Component {
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
                                actions: [NavigationActions.navigate({ routeName: 'Stack1' })],
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
    },
    Stack2: {
        screen: StackScreen2,
    },
}, {
    initialRouteName: 'Stack2',
});

export default Detail;