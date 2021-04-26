import React, {useState} from 'react'
import {View, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, Alert} from 'react-native'
import * as firebase from 'firebase'
import 'firebase/firestore'
import {Icon} from 'react-native-elements'

const firebaseConfig = {
    apiKey: "AIzaSyChe_Kq-FqKXY3ylU8uafoYr5VIzL9wv1A",
    authDomain: "pomodoro-time-b4d8d.firebaseapp.com",
    projectId: "pomodoro-time-b4d8d",
    storageBucket: "pomodoro-time-b4d8d.appspot.com",
    messagingSenderId: "510640349059",
    appId: "1:510640349059:web:b18193ac3a84a96802e0b6",
    measurementId: "G-GKER2EPPBW"
  };

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

export default function rFrase({navigation}) {

    const [state, setState] = useState({
        frase: "",
        autorfrase: "",
        linkbiografia: "",
    })

    const EstablecerTexto = (frase, value) => {
        setState({ ...state, [frase]: value})
    }

    const crearFrase = async() => {
        await db.collection('RFrase').add({
            frase: state.frase,
            autorfrase: state.autorfrase,
            linkbiografia: state.linkbiografia,
        })
        Alert.alert(
            '✅ Proceso exitoso',
            'Ha subido la frase correctamente.',
        )
    }

    const Confirmacion = () => {
        if(state.frase === '' && state.autorfrase === '' && state.linkbiografia === ''){
            Alert.alert(
              '⚠️ Campos vacios',
              'Debe de llenar todos los campos.',
              [
                {text: 'Reintentar', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              { cancelable: false }
            )
        }

        else if(state.frase === ''){
            Alert.alert(
              '⚠️ Frase',
              'El campo frase esta vacío.',
              [
                {text: 'Reintentar', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              { cancelable: false }
          )
      }

        else if(state.autorfrase === ''){
            Alert.alert(
            '⚠️ Autor de la frase',
            'El campo de autor esta vacío.',
            [
                {text: 'Reintentar', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
        )
    }
        else if(state.linkbiografia === ''){
            Alert.alert(
            '⚠️ Autor de la frase',
            'El campo de autor esta vacío.',
            [
                {text: 'Reintentar', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
        )
    }

        else{
            crearFrase();
        }
    }

    return (
            <ScrollView style={styles.background}>
            <View style={styles.questions}>
                <Text style={styles.text}>Ingresa la frase:</Text>
                    <TextInput selectTextOnFocus={true} style={{marginHorizontal: 3,  borderWidth: 1, borderColor: '#344953', borderRadius: 5, marginVertical: '3%', fontFamily: 'regularO', paddingVertical: 8, paddingLeft:10}} placeholder="Ingresa una frase para recomendar" onChangeText={(value) => EstablecerTexto('frase', value)}></TextInput>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>Autor de la frase:</Text>
                    <TextInput selectTextOnFocus={true} style={{marginHorizontal: 3,  borderWidth: 1, borderColor: '#344953', borderRadius: 5, marginVertical: '3%', fontFamily: 'regularO', paddingVertical: 8, paddingLeft:10}} placeholder="Ingresa el autor de la frase" onChangeText={(value) => EstablecerTexto('autorfrase', value)}></TextInput>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>Link de la Biografía:</Text>
                    <TextInput selectTextOnFocus={true} style={{marginHorizontal: 3,  borderWidth: 1, borderColor: '#344953', borderRadius: 5, marginVertical: '3%', fontFamily: 'regularO', paddingVertical: 8, paddingLeft:10}} placeholder="Ingresa el link de la biografía" onChangeText={(value) => EstablecerTexto('linkbiografia', value)}></TextInput>
            </View>
            <View style={{marginBottom:'2%',marginHorizontal: '8%'}}>
                <TouchableOpacity onPress={() => Confirmacion()}>
                <View style={styles.btnView}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={{marginBottom:'2%',marginHorizontal: '8%'}}>
                <TouchableOpacity onPress={() => navigation.navigate('TablaFrase')}>
                <View style={styles.btnView}>
                    <Text style={styles.buttonText}>Ver Tabla</Text>
                </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "white"
    },
    center: {
        flex: 1,
        width: '80%',
        paddingTop: '9%',
        marginHorizontal: '4%'
    },
    questions: {
        width: '80%',
        justifyContent: 'center',
        alignContent: 'center',
        marginHorizontal: '8%',
        paddingTop: '2%',
        marginVertical: '1%',
    },
    text: {
        marginHorizontal: 3,
        fontFamily: 'regularO',
        textAlign: 'justify',
        fontSize: 14,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontFamily: 'regularM',
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
    },
    btnView:{
        borderRadius: 25,
        paddingVertical: 12,
        marginTop: 15,
        backgroundColor: "#1f65ff",
    },
});