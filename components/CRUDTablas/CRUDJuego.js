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

const CRUDJuego = (props) => {
    
    const initialState = {
        id: "",
        titulojuego: "",
        desarrolladorjuego: "",
        fuentejuego: ""
    }

    const [respuesta, setRespuesta] = useState(initialState);

    const [loading, setLoading] = useState(true)

    const getDataById = async (id) => {
        const dbRef = db.collection('RJuego').doc(id);
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

    const EstablecerTexto = (titulojuego, value) => {
        setRespuesta({ ...respuesta, [titulojuego]: value})
    };

    const deleteRespuesta = async() => {
        const dbRef = db.collection('RJuego').doc(props.route.params.respuestaId);
        await dbRef.delete();
        props.navigation.navigate('TablaJuego')
    }

    const updateRespuesta = async() => {
        const dbRef = db.collection('RJuego').doc(respuesta.id);
        await dbRef.set({
            titulojuego: respuesta.titulojuego,
            desarrolladorjuego: respuesta.desarrolladorjuego,
            fuentejuego: respuesta.fuentejuego,
        });
        setRespuesta(initialState)
        props.navigation.navigate('TablaJuego')
    }

    const Confirmacion = () => {
        Alert.alert('⚠️ Eliminar Juego', 
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
            <View style={styles.questions}>
                <Text style={styles.text}>Titulo del juego:</Text>
                    <TextInput selectTextOnFocus={true} style={{marginHorizontal: 3,  borderWidth: 1, borderColor: '#344953', borderRadius: 5, marginVertical: '3%', fontFamily: 'regularO', paddingVertical: 8, paddingLeft:10}} value={respuesta.titulojuego} onChangeText={(value) => EstablecerTexto("titulojuego", value)}></TextInput>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>Empresa desarrolladora:</Text>
                    <TextInput selectTextOnFocus={true} style={{marginHorizontal: 3,  borderWidth: 1, borderColor: '#344953', borderRadius: 5, marginVertical: '3%', fontFamily: 'regularO', paddingVertical: 8, paddingLeft:10}} value={respuesta.desarrolladorjuego} onChangeText={(value) => EstablecerTexto("desarrolladorjuego", value)}></TextInput>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>Link del Juego:</Text>
                    <TextInput selectTextOnFocus={true} style={{marginHorizontal: 3,  borderWidth: 1, borderColor: '#344953', borderRadius: 5, marginVertical: '3%', fontFamily: 'regularO', paddingVertical: 8, paddingLeft:10}} value={respuesta.fuentejuego} onChangeText={(value) => EstablecerTexto("fuentejuego", value)}></TextInput>
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

export default CRUDJuego;

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