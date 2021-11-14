import React from 'react'
import { Text, View, SafeAreaView, StyleSheet, Button,  } from 'react-native';


const Login = ({ navigation }) => {

    const data = {
        nombre: 'James',
        age: 23
    }

    const navegarNosotros = () => {
        navigation.navigate('Nosotros', { data: data})
    }

    return (  
        <>  
            <SafeAreaView
                style={ styles.contenedor }
            >
                <View
                    style={ styles.contentContainer}
                >
                    <Text style={ styles.texto}>Login Screen</Text>

                    <Button
                        title='Nosotros'
                        onPress={ () => navegarNosotros() }
                    />
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: 'purple'
    },
    contentContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    texto: {
        color: "#FFF",
        fontSize: 20,
        textAlign: 'center'
    }
})
export default Login;

/*
    // STEPS TO INSTALL REACT NAVIGATION
    // Instalar react-navigation/native
    npm install @react-navigation/native

    // Instalar las dependencias

    npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

    // Instalar navegación en Stack

    npm i @react-navigation/stack

    // Si desarrollas una app para iOS 

    cd ios/
    pod install

    // En Android android/app/build.gradle
    implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
    implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'

    // en el App.js 
    import 'react-native-gesture-handler';
*/