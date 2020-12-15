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
        Alert.alert('Se ha subido la canción correctamente.')
    }

    const Confirmacion = () => {
        if (state.nombrecancion===""){
            Alert.alert("Debe llenar todos los campos.")
        }
        else if (state.autorcancion===""){
            Alert.alert("Debe llenar todos los campos.")
        }
        else if (state.albumcancion===""){
            Alert.alert("Debe llenar todos los campos.")
        }
        else if (state.linkcancion===""){
            Alert.alert("Debe llenar todos los campos.")
        }
        else{
            crearCancion();
        }
    }

    return (
            <ScrollView>
            <View style={styles.container}>
            <TouchableOpacity style={{marginTop: '14%'}} onPress={() => navigation.navigate('rCancion')}>
                <View style={styles.buttonContainer}>
                    <Icon name='music' color='#135D81' type='font-awesome'/>
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
                    <Icon name='globe' color='#3491cd' type='font-awesome'/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop: '14%'}} onPress={() => navigation.navigate('rPretestPostest')}>
                <View style={styles.buttonContainer}>
                    <Icon name='book' color='#3491cd' type='font-awesome'/>
                </View>
            </TouchableOpacity>
            </View>
            <View style={styles.center}>
                <Text style={styles.text}>Ingresa el nombre de una canción:</Text>
                    <TextInput style={{marginVertical: '2%'}} placeholder="Ingresa el nombre de la canción" onChangeText={(value) => EstablecerTexto('nombrecancion', value)}></TextInput>
            </View>
            <View style={styles.center}>
                <Text style={styles.text}>Ingresa el autor de una canción:</Text>
                    <TextInput style={{marginVertical: '2%'}} placeholder="Ingresa el autor de la canción" onChangeText={(value) => EstablecerTexto('autorcancion', value)}></TextInput>
            </View>
            <View style={styles.center}>
                <Text style={styles.text}>Ingresa el álbum de una canción:</Text>
                    <TextInput style={{marginVertical: '2%'}} placeholder="Ingresa el álbum de la canción" onChangeText={(value) => EstablecerTexto('albumcancion', value)}></TextInput>
            </View>
            <View style={styles.center}>
                <Text style={styles.text}>Ingresa el link de la canción:</Text>
                    <TextInput style={{marginVertical: '2%'}} placeholder="Ingresa el link de la canción" onChangeText={(value) => EstablecerTexto('linkcancion', value)}></TextInput>
            </View>
            <View style={{marginBottom:'2%',marginHorizontal: '8%'}}>
                <TouchableOpacity onPress={() => Confirmacion()}>
                <View style={styles.btnView}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={{marginBottom:'2%',marginHorizontal: '8%'}}>
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