/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

// import  React, { Component } from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';
// import HomeScreen from './src/components/homeScreen';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// export default class App extends React.Component{
  
//   render() {
//     return (
//       <View style={styles.container}>
//         {/* <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text> */}
//         <HomeScreen />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });


import{createStackNavigator, createAppContainer} from 'react-navigation';
// import HomeScreen from './src/components/homeScreen';
import Home from './src/redux/container/home';

const AppStackNavigator = createStackNavigator({
  // Home: HomeScreen,
  homeContainer: Home
}, {
  defaultNavigationOptions: {
    title: 'Welcome'
  }
})

const App = createAppContainer(AppStackNavigator);

export default App;