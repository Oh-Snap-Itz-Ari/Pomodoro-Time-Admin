import React from 'react'
import {View, ScrollView, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native'
import 'firebase/firestore'
import {Icon} from 'react-native-elements'

export default function rPretestPostest({navigation}) {
    const Confirmacion = () => {
        Alert.alert('⚠️ Cerrar sesión', '¿Estás seguro que quieres cerrar sesión?', [
            {text: 'Cancel', onPress: console.log(false)},
            {text: 'OK', onPress: () => navigation.navigate('LoginScreen')},
        ])
    }
    return (
            <ScrollView style={styles.background}>
            <View style={styles.center}>
                <Text style={styles.text}>Seleccione que cuestionario desea observar:</Text>
            </View>
            <View style={{marginBottom:'2%',marginHorizontal: '8%'}}>
                <TouchableOpacity onPress={() => navigation.navigate('rPretest')}>
                <View style={styles.btnView}>
                    <Text style={styles.buttonText}>Cuestionario de Pretest</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={{marginBottom:'2%',marginHorizontal: '8%'}}>
                <TouchableOpacity onPress={() => navigation.navigate('rPostest')}>
                <View style={styles.btnView}>
                    <Text style={styles.buttonText}>Cuestionario de Postest</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={{marginBottom:'2%',marginHorizontal: '8%'}}>
                <TouchableOpacity onPress={() => navigation.navigate('CSeguimiento')}>
                <View style={styles.btnView}>
                    <Text style={styles.buttonText}>Cuestionario de Seguimiento</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={{marginBottom:'2%',marginHorizontal: '8%'}}>
                <TouchableOpacity onPress={Confirmacion}>
                <View style={styles.btnView}>
                    <Text style={styles.buttonText}>Cerrar sesión</Text>
                </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    background:{
        backgroundColor: "white",
    },
    center: {
        flex: 1,
        width: '80%',
        paddingTop: '10%',
        marginHorizontal: '4%'
    },
    questions: {
        flex: 1,
        width: '80%',
        marginHorizontal: '4%',
        paddingTop: '2%',
    },
    text: {
        fontSize: 14,
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
        marginHorizontal: '7%',

    },
    btnView:{
        borderRadius: 8,
        paddingVertical: 10,
        marginTop: 15,
        paddingHorizontal: 10,
        backgroundColor: '#3491cd'
    }
});