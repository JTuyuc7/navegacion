import React from 'react'
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';


const App = () => {
  return (  
    <>
      <SafeAreaView style={ styles.mainContainer }>
        <View style={ styles.contentContainer }>
          <Text style={ styles.textoTitulo}>React Navegation</Text>
        </View>
      </SafeAreaView>
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