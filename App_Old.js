/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/*


 */


import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,Button,Image
} from 'react-native';


import { createStackNavigator } from 'react-navigation';


/*
import {
    StackNavigator,
} from 'react-navigation';
*/
// import HomeScreen from 'src/components/HomeScreen/HomeScreen';

/*
const App = StackNavigator({
    Home: { screen: HomeScreen },
    // Profile: { screen: ProfileScreen },
});
*/

//only one App will be present.

//type Props = {};
/*
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
            </View>
        );
    }
}
*/

/*
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
*/

// extends Component<Props>

// class HomeScreen extends React.Component {
/*
class HomeScreen extends Component<Props> {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button
                title="Go to Jane's profile"
                onPress={() =>
                    navigate('Profile', { name: 'Jane' })
                }
            />
        );
    }
}

const RootStack = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
});

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}

export default createStackNavigator({
    Home: {
        screen: HomeScreen
        //screen is required. Home can be lowercase.
    },
});

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
            </View>
        );
    }
}

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
    },
    {
        initialRouteName: 'Home',
    }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
*/

// import React from 'react';
// import { View, Text,Button,Image } from 'react-native';

// import { createStackNavigator } from 'react-navigation';
// Version can be specified in package.json




class LogoTitle extends React.Component {
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
    static navigationOptions = ({navigation}) => {
        const params = navigation.state.params || {};

        return {
            // headerLeft: (
            //     <Button
            //         onPress={() => navigation.navigate('MyModal')}
            //         title="Info"
            //         color="#fff"
            //     />
            // ),
            headerTitle: <LogoTitle/>,
            headerRight: (
        <Button onPress={params.increaseCount} title="+1" color="skyblue"/>
    ),
    };
    };

    // before render ,executed
    componentWillMount() {
        this.props.navigation.setParams({increaseCount: this._increaseCount});
    }

    state = {
        count: 0,
    };

    _increaseCount = () => {
        this.setState({count: this.state.count + 1});
    };





    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
        <Text>Count: {this.state.count}</Text>
        <Button
        title="Go to Details"
        onPress={() => {
            // 1. Navigate to the Details route with params
            this.props.navigation.navigate('Details', {
                itemId: 86,
                otherParam: 'First Details',
            });
        }}
        />
        </View>
    );
    }

}





/*
class HomeScreen extends React.Component {
    static navigationOptions = {
        // headerTitle instead of title
        headerTitle: <LogoTitle />,
        headerRight: (
            <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="skyblue"
            />
        ),
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => {
                        /* 1. Navigate to the Details route with params
                        this.props.navigation.navigate('Details', {
                            itemId: 86,
                            otherParam: 'anything you want here',
                        });
                    }}
                />
            </View>
        );
    }
}


*/


/*
class HomeScreen extends React.Component {
    static navigationOptions={
        // Title:'Home',
        title:'Home',
};
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => {
                         //1. Navigate to the Details route with params
                        this.props.navigation.navigate('Details', {
                            itemId: 86,
                            otherParam: 'anything you want here',
                        });
                    }}
                />
            </View>
        );
    }
}
*/

/*
class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

*/

class DetailsScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        return {
            title: params ? params.otherParam : 'A Nested Details Screen',
            /* These values are used instead of the shared configuration! */
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

/*
class DetailsScreen extends React.Component {
    // here navigationOptions and navigation
    static navigationOptions = ({ navigation, navigationOptions }) => {
        console.log(navigationOptions);
        // console.log(navigation);
        // Notice the logs ^
        // sometimes we call with the default navigationOptions and other times
        // we call this with the previous navigationOptions that were returned from
        // this very function
        return {
            title: navigation.getParam('otherParam', 'A Nested Details Screen'),
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor,
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor,
        };
    };

    render() {
        // 2. Get the param, provide a fallback value if not available
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const otherParam = navigation.getParam('otherParam', 'some default value');

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() =>
                        this.props.navigation.push('Details', {
                            itemId: Math.floor(Math.random() * 100),
                        })}
                />
                <Button
                    title="Update the title"
                    onPress={() =>
                        this.props.navigation.setParams({ otherParam: 'Updated!' })}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}
*/

/*
class DetailsScreen extends React.Component {
    static navigationOptions = {
        title: 'Details',
    };
    render() {
        // 2. Get the param, provide a fallback (DEFAULT ) value if not available
        // const NOID="Test";

        // const a =5;
        // As an alternative to getParam, you may use this.props.navigation.state.params. It is null if no parameters are specified.

    // THIS render() method is executed every time , click "Go to Details...again, to see "some default value"
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        var otherParam = navigation.getParam('otherParam', 'some default value');
        otherParam= this.props.navigation.state.params; // not null since on parameter 'itemId' always passed

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() =>
                        this.props.navigation.push('Details', {
                            itemId: Math.floor(Math.random() * 100),
                        })}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}
*/

/*
class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex:4, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
            </View>
        );
    }
}

*/
/*
class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Button
                    title="Go to Details... again"
                    // onPress={() => this.props.navigation.navigate('Details')}
                    onPress={() => this.props.navigation.push('Details')}
                />
            </View>
        );
    }
}
*/

/*
class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.push('Details')}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go to Root"
                    onPress={() => this.props.navigation.popToTop()}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}
*/


//For modal RootStack changed to this




const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
    },
    {
        initialRouteName: 'Home',
        // The header config from HomeScreen is now here
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'gold',
            },
            headerTintColor:'floralwhite',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);



/*
const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,

    },
    {
        initialRouteName: 'Home',
        // initialRouteName: 'Details',

    }
);

*/
/* this approach gives more control to root element /arefin*/
export default class App extends React.Component {
    render() {
        return <RootStack/>;
    }
}

