import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import compo from './screens/compo';
import projects from './screens/projects';
import BreadBoard from './co121/BreadBoard'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Components" component={compo} />
        <Stack.Screen name="projects" component={projects} />
        <Stack.Screen name="BreadBoard" component={BreadBoard} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
