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

const CRUDNoticia = (props) => {
    
    const initialState = {
        id: "",
        titulonoticia: "",
        especificacionnoticia: "",
        fuentenoticia: ""
    }

    const [respuesta, setRespuesta] = useState(initialState);

    const [loading, setLoading] = useState(true)

    const getDataById = async (id) => {
        const dbRef = db.collection('RNoticia').doc(id);
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

    const EstablecerTexto = (titulonoticia, value) => {
        setRespuesta({ ...respuesta, [titulonoticia]: value})
    };

    const deleteRespuesta = async() => {
        const dbRef = db.collection('RNoticia').doc(props.route.params.respuestaId);
        await dbRef.delete();
        props.navigation.navigate('TablaNoticia')
    }

    const updateRespuesta = async() => {
        const dbRef = db.collection('RNoticia').doc(respuesta.id);
        await dbRef.set({
            titulonoticia: respuesta.titulonoticia,
            especificacionnoticia: respuesta.especificacionnoticia,
            fuentenoticia: respuesta.fuentenoticia,
        });
        setRespuesta(initialState)
        props.navigation.navigate('TablaNoticia')
    }

    const Confirmacion = () => {
        Alert.alert('⚠️ Eliminar Noticia', 
        '¿Estás seguro que la quieres eliminar?', 
        [
            {text: 'Cancel', onPress: console.log(false) },
            {text: 'OK', onPress: () => deleteRespuesta()},
        ],
        { cancelable: false }
        )
    }

    if (loading){
        return(
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#9e9e9e"/>
            </View>
        )
    }

    return(
        <ScrollView style={styles.background}>
            <View style={styles.center}>
                <Text style={styles.text}>Titulo de la Noticia:</Text>
                    <TextInput selectTextOnFocus={true} style={{marginVertical: '2%'}} value={respuesta.titulonoticia} onChangeText={(value) => EstablecerTexto("titulonoticia", value)}></TextInput>
            </View>
            <View style={styles.center}>
                <Text style={styles.text}>Especificacion de la Noticia:</Text>
                    <TextInput selectTextOnFocus={true} style={{marginVertical: '2%'}} value={respuesta.especificacionnoticia} onChangeText={(value) => EstablecerTexto("especificacionnoticia", value)}></TextInput>
            </View>
            <View style={styles.center}>
                <Text style={styles.text}>Fuente de la Noticia:</Text>
                    <TextInput selectTextOnFocus={true} style={{marginVertical: '2%'}} value={respuesta.fuentenoticia} onChangeText={(value) => EstablecerTexto("fuentenoticia", value)}></TextInput>
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

export default CRUDNoticia;

const styles = StyleSheet.create({
    background: {
        backgroundColor: "white"
    },
    center: {
        flex: 1,
        width: '80%',
        paddingTop: '8%',
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
        fontWeight: 'bold'
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