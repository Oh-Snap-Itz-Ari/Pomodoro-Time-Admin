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
        Alert.alert('Se ha subido la noticia correctamente.')
    }

    const Confirmacion = () => {
        if (state.titulonoticia===""){
            Alert.alert("Debe llenar todos los campos.")
        }
        else if (state.especificacionnoticia===""){
            Alert.alert("Debe llenar todos los campos.")
        }
        else if (state.fuentenoticia===""){
            Alert.alert("Debe llenar todos los campos.")
        }
        else{
            crearNoticia();
        }
    }

    return (
            <ScrollView>
            <View style={styles.container}>
            <TouchableOpacity style={{marginTop: '14%'}} onPress={() => navigation.navigate('rCancion')}>
                <View style={styles.buttonContainer}>
                    <Icon name='music' color='#3491cd' type='font-awesome'/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop: '14%'}} onPress={() => navigation.navigate('rEjercicio')}>
                <View style={styles.buttonContainer}>
                    <Icon name='heartbeat' color='#3491cd' type='font-awesome'/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop: '14%'}} onPress={() => navigation.navigate('rFrase')}>
                <View style={styles.buttonContainer}>
                    <Icon name='font' color='#3491cd' type='font-awesome'/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop: '14%'}} onPress={() => navigation.navigate('rNoticia')}>
                <View style={styles.buttonContainer}>
                    <Icon name='globe' color='#135D81' type='font-awesome'/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop: '14%'}} onPress={() => navigation.navigate('rPretestPostest')}>
                <View style={styles.buttonContainer}>
                    <Icon name='book' color='#3491cd' type='font-awesome'/>
                </View>
            </TouchableOpacity>
            </View>
            <View style={styles.center}>
                <Text style={styles.text}>Ingresa un titulo para la noticia:</Text>
                    <TextInput style={{marginVertical: '2%'}} placeholder="Ingresa el titulo de la noticia" onChangeText={(value) => EstablecerTexto('titulonoticia', value)}></TextInput>
            </View>
            <View style={styles.center}>
                <Text style={styles.text}>Ingresa una especificación para la noticia:</Text>
                    <TextInput style={{marginVertical: '2%'}} placeholder="Ingresa la especificación de la noticia" onChangeText={(value) => EstablecerTexto('especificacionnoticia', value)}></TextInput>
            </View>
            <View style={styles.center}>
                <Text style={styles.text}>Ingresa la fuente de la noticia:</Text>
                    <TextInput style={{marginVertical: '2%'}} placeholder="Ingresa la fuente de la noticia" onChangeText={(value) => EstablecerTexto('fuentenoticia', value)}></TextInput>
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