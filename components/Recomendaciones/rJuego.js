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

export default function rJuego({navigation}) {

    const [state, setState] = useState({
        titulojuego: "",
        desarrolladorjuego: "",
        fuentejuego: ""
    })

    const EstablecerTexto = (titulojuego, value) => {
        setState({ ...state, [titulojuego]: value})
    }

    const crearJuego = async() => {
        await db.collection('RJuego').add({
            titulojuego: state.titulojuego,
            desarrolladorjuego: state.desarrolladorjuego,
            fuentejuego: state.fuentejuego,
        })
        Alert.alert(
            '✅ Proceso exitoso',
            'Ha subido el juego correctamente.',
        )
    }

    const Confirmacion = () => {
        
        if(state.titulojuego === '' && state.desarrolladorjuego === '' && state.fuentejuego === ''){
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
        
        else if(state.titulojuego === ''){
              Alert.alert(
                '⚠️ Titulo del juego',
                'El campo de titulo esta vacío.',
                [
                  {text: 'Reintentar', onPress: () => console.log('Ask me later pressed')},
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
            )
        }

        else if(state.desarrolladorjuego === ''){
            Alert.alert(
              '⚠️ Desarrollador del juego',
              'El campo de desarrollador esta vacío.',
              [
                {text: 'Reintentar', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              { cancelable: false }
          )
      }

        else if(state.fuentejuego === ''){
            Alert.alert(
              '⚠️ Fuente del juego',
              'El campo de fuente esta vacío.',
              [
                {text: 'Reintentar', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              { cancelable: false }
          )
      }
        
        else{
            crearJuego();
        }
    }

    return (
            <ScrollView>
            <View style={styles.center}>
                <Text style={styles.text}>Ingresa un titulo para el juego:</Text>
                    <TextInput selectTextOnFocus={true} style={{marginVertical: '2%'}} placeholder="Ingresa el titulo del juego" onChangeText={(value) => EstablecerTexto('titulojuego', value)}></TextInput>
            </View>
            <View style={styles.center}>
                <Text style={styles.text}>Ingresa una empresa desarrolladora para el juego:</Text>
                    <TextInput selectTextOnFocus={true} style={{marginVertical: '2%'}} placeholder="Ingresa una empresa desarrolladora" onChangeText={(value) => EstablecerTexto('desarrolladorjuego', value)}></TextInput>
            </View>
            <View style={styles.center}>
                <Text style={styles.text}>Ingresa la fuente del juego:</Text>
                    <TextInput selectTextOnFocus={true} style={{marginVertical: '2%'}} placeholder="Ingresa la fuente del juego" onChangeText={(value) => EstablecerTexto('fuentejuego', value)}></TextInput>
            </View>
            <View style={{marginBottom:'2%',marginHorizontal: '8%'}}>
                <TouchableOpacity onPress={() => Confirmacion()}>
                <View style={styles.btnView}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={{marginBottom:'2%',marginHorizontal: '8%'}}>
                <TouchableOpacity onPress={() => navigation.navigate('TablaJuego')}>
                <View style={styles.btnView}>
                    <Text style={styles.buttonText}>Ver Tabla</Text>
                </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
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