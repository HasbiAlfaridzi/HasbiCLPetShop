import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

// Import komponen-komponen yang akan digunakan di dalam stack navigator
import {HomeScreen, DetailScreen} from '../screens';

const Stack = createStackNavigator<ParamList>();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="DetailScreen" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
