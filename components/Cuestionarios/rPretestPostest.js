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
                <Text style={styles.text}>Opciones</Text>
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
        paddingTop: '10%',
        backgroundColor: "white"
    },
    center: {
        flex: 1,
        width: '80%',
        paddingVertical: '5%',
        marginHorizontal: '4%'
    },
    questions: {
        flex: 1,
        width: '80%',
        marginHorizontal: '4%',
        paddingTop: '2%',
    },
    text: {
        fontFamily: "boldM",
        fontSize: 20,
    },
    buttonText: {
        color: "white",
        fontFamily: 'regularM',
        fontSize: 14,
        textAlign: "center",
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
        marginHorizontal: '10%',
    },
    btnView:{
        borderRadius: 25,
        paddingVertical: 12,
        marginTop: 15,
        backgroundColor: "#1f65ff",
    }
});