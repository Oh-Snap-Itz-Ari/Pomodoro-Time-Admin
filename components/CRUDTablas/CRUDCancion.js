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
        Alert.alert('⚠️ Eliminar Canción', 
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
                <Text style={styles.text}>Nombre de la canción:</Text>
                    <TextInput selectTextOnFocus={true} style={{marginHorizontal: 3,  borderWidth: 1, borderColor: '#344953', borderRadius: 5, marginVertical: '3%', fontFamily: 'regularO', paddingVertical: 8, paddingLeft:10}} value={respuesta.nombrecancion} onChangeText={(value) => EstablecerTexto("nombrecancion", value)}></TextInput>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>Autor de la canción:</Text>
                    <TextInput selectTextOnFocus={true} style={{marginHorizontal: 3,  borderWidth: 1, borderColor: '#344953', borderRadius: 5, marginVertical: '3%', fontFamily: 'regularO', paddingVertical: 8, paddingLeft:10}} value={respuesta.autorcancion} onChangeText={(value) => EstablecerTexto("autorcancion", value)}></TextInput>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>Álbum de la canción:</Text>
                    <TextInput selectTextOnFocus={true} style={{marginHorizontal: 3,  borderWidth: 1, borderColor: '#344953', borderRadius: 5, marginVertical: '3%', fontFamily: 'regularO', paddingVertical: 8, paddingLeft:10}} value={respuesta.albumcancion} onChangeText={(value) => EstablecerTexto("albumcancion", value)}></TextInput>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>Link de la canción:</Text>
                    <TextInput selectTextOnFocus={true} style={{marginHorizontal: 3,  borderWidth: 1, borderColor: '#344953', borderRadius: 5, marginVertical: '3%', fontFamily: 'regularO', paddingVertical: 8, paddingLeft:10}} value={respuesta.linkcancion} onChangeText={(value) => EstablecerTexto("linkcancion", value)}></TextInput>
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
        marginTop: 2,
        backgroundColor: "#1f65ff",
    },
});