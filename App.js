import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,Button,Image
} from 'react-native';


import { createStackNavigator } from 'react-navigation';
// import DetailsScreen from "./DetailsScreen";
// import PlaceList from "./src/components/PlaceList/PlaceList";


class LogoTitle extends Component {
    render() {
        return (
            <Image
                source={require('./spiro.png')}
                style={{ width: 30, height: 30 }}
            />
        );
    }



}


class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};

        return {
            headerTitle:<LogoTitle/>,
            headerLeft: (
                <Button
                    onPress={() => navigation.navigate('MyModal')}
                    title="Info"
                    color="#fff"
                />
            ),
            headerRight:(
                <Button
                    title="Go to Details"
                    onPress={() => {
                        /* 1. Navigate to the Details route with params */
                        this.props.navigation.navigate('Details', {
                            itemId: 86,
                            otherParam: 'anything you want here',
                        });
                    }}
                />
            ),

            /* the rest of this config is unchanged */


        };
    };

    /* render function, etc */
}



class ModalScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30 }}>This is a modal!</Text>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Dismiss"
                />
            </View>
        );
    }
}

// createStackNavigator is a funtion that returns a react component,thus it is a react Component
// see 1st chapter on  ract-navigation

const MainStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        }
        ,
        Details: {
            screen: DetailsScreen,
        },
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            /* Same configuration as before */
        },
    }

);





const DetailScreen= class DetailsScreen extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        return {
            title: params ? params.otherParam : 'A Nested Details Screen',
            // These values are used instead of the shared configuration!
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor,
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor,
        };
    };

    render() {
        // 2. Read the params from the navigation state
        const { params } = this.props.navigation.state;
        const itemId = params ? params.itemId : null;
        const otherParam = params ? params.otherParam : null;

        return (

            <View
                style={

                    {
                        flex: 1, alignItems: 'center', justifyContent: 'center'
                    }
                }>

                <Text>
                    Details Screen
                </Text>
                <Text>itemId: {JSON.stringify(itemId)}
                </Text>
                <Text>otherParam: {JSON.stringify(otherParam)}
                </Text>
                <Button
                    title="Update the title"
                    onPress={() =>
                        this.props.navigation.setParams({ otherParam: 'Updated!' })}
                />
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}



const RootStack = createStackNavigator(
    {
        Main: {
            screen: MainStack,
        },
        MyModal: {
            screen: ModalScreen,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
);


/* this approach gives more control to root element /arefin*/
export default class App extends Component {
    render() {
        return <RootStack/>;
    }
}

