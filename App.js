import 'react-native-gesture-handler';
import React from 'react'
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';

// Importar Componentes de las pantallas
import Login from './components/Login';
import Nosotros from './components/Nosostros';

//Importar navegacion
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Crear el stach de nvegacion
const Stack = createStackNavigator();

const App = () => {
  return (  
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Login'
        >
          <Stack.Screen
            name='Login'
            component={ Login }
            options={{
              title: 'Login JS', // set new title
              headerTitleAlign: 'center', // justify the content
              headerStyle: { backgroundColor: 'red' }, // give styles to the header
              headerShown: true, // show or hide the header
              headerTintColor: 'yellow', // text header color
              //headerStatusBarHeight: 30, // header heigth
              headerTitle: 'Holaaa', // new title
              headerTitleStyle: { fontWeight: 'bold', fontSize: 22}
            }}
          />

          <Stack.Screen
            name='Nosotros'
            component={ Nosotros }
            options={ () => ({
              title: 'UserName'
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'purple'
  },
  contentContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  textoTitulo: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  }
})

export default App;