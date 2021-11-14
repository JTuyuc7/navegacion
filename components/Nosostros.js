import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';


const Nosotros = (props) => {

    console.log(props.route.params, 'Data')

    return (  
        <>
            <SafeAreaView 
                style={ styles.container}
            >
                <View
                    style={styles.contentContainer}
                >
                    <Text style={ styles.texto}>Nosotros</Text>
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    contentContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    texto: {
        color: "red",
        fontSize: 20,
        textAlign: 'center'
    }
})

export default Nosotros;