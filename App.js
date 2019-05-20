import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

// Initial "FLOOR PLANS"
// const rootStack = createStackNavigator({
//   Home: HomeScreen,
//   Login: LoginSCreen,
//   Player: Playerscreen
//   },{
//     initialRouteName: 'Home'
//   }
// )

// const AppContainer = createAppContainer(rootStack)
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
