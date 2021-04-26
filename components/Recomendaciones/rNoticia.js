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

export default function rNoticia({navigation}) {

    const [state, setState] = useState({
        titulonoticia: "",
        especificacionnoticia: "",
        fuentenoticia: ""
    })

    const EstablecerTexto = (titulonoticia, value) => {
        setState({ ...state, [titulonoticia]: value})
    }

    const crearNoticia = async() => {
        await db.collection('RNoticia').add({
            titulonoticia: state.titulonoticia,
            especificacionnoticia: state.especificacionnoticia,
            fuentenoticia: state.fuentenoticia,
        })
        Alert.alert(
            '✅ Proceso exitoso',
            'Ha subido la noticia correctamente.',
        )
    }

    const Confirmacion = () => {
        
        if(state.titulonoticia === '' && state.especificacionnoticia === '' && state.fuentenoticia === ''){
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
        
        else if(state.titulonoticia === ''){
              Alert.alert(
                '⚠️ Titulo de la noticia',
                'El campo de titulo esta vacío.',
                [
                  {text: 'Reintentar', onPress: () => console.log('Ask me later pressed')},
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
            )
        }

        else if(state.especificacionnoticia === ''){
            Alert.alert(
              '⚠️ Especificación de la noticia',
              'El campo de especificación esta vacío.',
              [
                {text: 'Reintentar', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              { cancelable: false }
          )
      }

        else if(state.fuentenoticia === ''){
            Alert.alert(
              '⚠️ Fuente de la noticia',
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
            crearNoticia();
        }
    }

    return (
            <ScrollView style={styles.background}>
            <View style={styles.questions}>
                <Text style={styles.text}>Titulo para la noticia:</Text>
                    <TextInput selectTextOnFocus={true} style={{marginHorizontal: 3,  borderWidth: 1, borderColor: '#344953', borderRadius: 5, marginVertical: '3%', fontFamily: 'regularO', paddingVertical: 8, paddingLeft:10}} placeholder="Ingresa el titulo de la noticia" onChangeText={(value) => EstablecerTexto('titulonoticia', value)}></TextInput>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>Especificación para la noticia:</Text>
                    <TextInput selectTextOnFocus={true} style={{marginHorizontal: 3,  borderWidth: 1, borderColor: '#344953', borderRadius: 5, marginVertical: '3%', fontFamily: 'regularO', paddingVertical: 8, paddingLeft:10}} placeholder="Ingresa la especificación de la noticia" onChangeText={(value) => EstablecerTexto('especificacionnoticia', value)}></TextInput>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>Fuente de la noticia:</Text>
                    <TextInput selectTextOnFocus={true} style={{marginHorizontal: 3,  borderWidth: 1, borderColor: '#344953', borderRadius: 5, marginVertical: '3%', fontFamily: 'regularO', paddingVertical: 8, paddingLeft:10}} placeholder="Ingresa la fuente de la noticia" onChangeText={(value) => EstablecerTexto('fuentenoticia', value)}></TextInput>
            </View>
            <View style={{marginBottom:'2%',marginHorizontal: '8%'}}>
                <TouchableOpacity onPress={() => Confirmacion()}>
                <View style={styles.btnView}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={{marginBottom:'2%',marginHorizontal: '8%'}}>
                <TouchableOpacity onPress={() => navigation.navigate('TablaNoticia')}>
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