import React, {useEffect, useState} from 'react'
import {View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Alert, ActivityIndicator} from 'react-native'
import * as firebase from 'firebase'
import 'firebase/firestore'

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

const CRUDCancion = (props) => {
    
    const initialState = {
        id: "",
        nombrecancion: "",
        autorcancion: "",
        albumcancion: "",
        linkcancion: "",
    }

    const [respuesta, setRespuesta] = useState(initialState);

    const [loading, setLoading] = useState(true)

    const getDataById = async (id) => {
        const dbRef = db.collection('RCancion').doc(id);
        const doc = await dbRef.get();
        const respuesta = doc.data();
        setRespuesta({
            ...respuesta,
            id: doc.id,
        });
        setLoading(false)
    };

    useEffect(() => {
        getDataById(props.route.params.respuestaId);
    }, []);

    const EstablecerTexto = (nombrecancion, value) => {
        setRespuesta({ ...respuesta, [nombrecancion]: value})
    };

    const deleteRespuesta = async() => {
        const dbRef = db.collection('RCancion').doc(props.route.params.respuestaId);
        await dbRef.delete();
        props.navigation.navigate('TablaCancion')
    }

    const updateRespuesta = async() => {
        const dbRef = db.collection('RCancion').doc(respuesta.id);
        await dbRef.set({
            nombrecancion: respuesta.nombrecancion,
            autorcancion: respuesta.autorcancion,
            albumcancion: respuesta.albumcancion,
            linkcancion: respuesta.linkcancion,
        });
        setRespuesta(initialState)
        props.navigation.navigate('TablaCancion')
    }

    const Confirmacion = () => {
        Alert.alert('Eliminar', '¿Estás seguro que lo quieres eliminar?', [
            {text: 'Cancelar', onPress: console.log(false) },
            {text: 'Aceptar', onPress: () => deleteRespuesta()},
        ])
    }

    if (loading){
        return(
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#9e9e9e"/>
            </View>
        )
    }

    return(
        <ScrollView>
            <View style={styles.center}>
                <Text style={styles.text}>Nombre de la canción:</Text>
                    <TextInput style={{marginVertical: '2%'}} value={respuesta.nombrecancion} onChangeText={(value) => EstablecerTexto("nombrecancion", value)}></TextInput>
            </View>
            <View style={styles.center}>
                <Text style={styles.text}>Autor de la canción:</Text>
                    <TextInput style={{marginVertical: '2%'}} value={respuesta.autorcancion} onChangeText={(value) => EstablecerTexto("autorcancion", value)}></TextInput>
            </View>
            <View style={styles.center}>
                <Text style={styles.text}>Álbum de la canción:</Text>
                    <TextInput style={{marginVertical: '2%'}} value={respuesta.albumcancion} onChangeText={(value) => EstablecerTexto("albumcancion", value)}></TextInput>
            </View>
            <View style={styles.center}>
                <Text style={styles.text}>Link de la canción:</Text>
                    <TextInput style={{marginVertical: '2%'}} value={respuesta.linkcancion} onChangeText={(value) => EstablecerTexto("linkcancion", value)}></TextInput>
            </View>
            <View style={{marginBottom:'2%',marginHorizontal: '8%'}}>
                <TouchableOpacity onPress ={() => updateRespuesta()}>
                <View style={styles.btnView}>
                    <Text style={styles.buttonText}>Actualizar</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={{marginBottom:'2%',marginHorizontal: '8%'}}>
                <TouchableOpacity onPress ={() => Confirmacion()}>
                <View style={styles.btnView}>
                    <Text style={styles.buttonText}>Borrar</Text>
                </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
        
    )
}

export default CRUDCancion;

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