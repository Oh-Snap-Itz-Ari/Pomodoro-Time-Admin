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

export default function rCancion({navigation}) {

    const [state, setState] = useState({
        nombrecancion: "",
        autorcancion: "",
        albumcancion: "",
        linkcancion: "",
    })

    const EstablecerTexto = (nombrecancion, value) => {
        setState({ ...state, [nombrecancion]: value})
    }

    const crearCancion = async() => {
        await db.collection('RCancion').add({
            nombrecancion: state.nombrecancion,
            autorcancion: state.autorcancion,
            albumcancion: state.albumcancion,
            linkcancion: state.linkcancion,
        })
        Alert.alert(
            '✅ Proceso exitoso',
            'Ha subido la canción correctamente.',
        )
    }

    const Confirmacion = () => {
        if(state.nombrecancion === '' && state.autorcancion === '' && state.albumcancion === '' && state.linkcancion === ''){
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
        
        else if(state.nombrecancion === ''){
              Alert.alert(
                '⚠️ Nombre de la canción',
                'El campo de nombre esta vacío.',
                [
                  {text: 'Reintentar', onPress: () => console.log('Ask me later pressed')},
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
            )
        }

        else if(state.autorcancion === ''){
            Alert.alert(
              '⚠️ Autor de la canción',
              'El campo de autor esta vacío.',
              [
                {text: 'Reintentar', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              { cancelable: false }
          )
      }

        else if(state.albumcancion === ''){
            Alert.alert(
              '⚠️ Álbum de la canción',
              'El campo de álbum esta vacío.',
              [
                {text: 'Reintentar', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              { cancelable: false }
          )
      }

        else if(state.linkcancion === ''){
            Alert.alert(
              '⚠️ Link de la canción',
              'El campo de link esta vacío.',
              [
                {text: 'Reintentar', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              { cancelable: false }
          )
      }
      
        else{
            crearCancion();
        }
    }

    return (
            <ScrollView style={styles.background}>
            <View style={styles.questions}>
                <Text style={styles.text}>Nombre de una canción:</Text>
                    <TextInput selectTextOnFocus={true} name= "nombre" style={{marginHorizontal: 3,  borderWidth: 1, borderColor: '#344953', borderRadius: 5, marginVertical: '3%', fontFamily: 'regularO', paddingVertical: 8, paddingLeft:10}} placeholder="Ingresa el nombre de la canción" onChangeText={(value) => EstablecerTexto('nombrecancion', value)}></TextInput>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>Autor de una canción:</Text>
                    <TextInput selectTextOnFocus={true} style={{marginHorizontal: 3,  borderWidth: 1, borderColor: '#344953', borderRadius: 5, marginVertical: '3%', fontFamily: 'regularO', paddingVertical: 8, paddingLeft:10}} placeholder="Ingresa el autor de la canción" onChangeText={(value) => EstablecerTexto('autorcancion', value)}></TextInput>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>Álbum de una canción:</Text>
                    <TextInput selectTextOnFocus={true} style={{marginHorizontal: 3,  borderWidth: 1, borderColor: '#344953', borderRadius: 5, marginVertical: '3%', fontFamily: 'regularO', paddingVertical: 8, paddingLeft:10}} placeholder="Ingresa el álbum de la canción" onChangeText={(value) => EstablecerTexto('albumcancion', value)}></TextInput>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>Link de la canción:</Text>
                    <TextInput selectTextOnFocus={true} style={{marginHorizontal: 3,  borderWidth: 1, borderColor: '#344953', borderRadius: 5, marginVertical: '3%', fontFamily: 'regularO', paddingVertical: 8, paddingLeft:10}} placeholder="Ingresa el link de la canción" onChangeText={(value) => EstablecerTexto('linkcancion', value)}></TextInput>
            </View>
            <View style={{marginVertical: '5%', marginHorizontal: '15%'}}>
                <TouchableOpacity onPress={() => Confirmacion()}>
                <View style={styles.btnView}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={{marginVertical: '1%', marginHorizontal: '15%'}}>
                <TouchableOpacity onPress={() => navigation.navigate('TablaCancion')}>
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
        backgroundColor: "#1f65ff",
    },
});