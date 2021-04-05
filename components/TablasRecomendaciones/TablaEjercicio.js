import React, {useEffect, useState} from 'react'
import {View, ScrollView, StyleSheet, Text, Alert} from 'react-native'
import * as firebase from 'firebase'
import 'firebase/firestore'
import {ListItem, Avatar} from 'react-native-elements'

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

const TablaEjercicio = (props) => {

    const [respuestas, setRespuestas] = useState([])

    useEffect(() => {
        db.collection('REjercicio').onSnapshot(querySnapshot => {
        const respuestas = [];
            querySnapshot.docs.forEach(doc =>{
                const {ejercicio, linkyoutube} = doc.data() 
                respuestas.push({
                    id: doc.id,
                    ejercicio,
                    linkyoutube,
                })
            })
        setRespuestas(respuestas)
        })
    }, [])

    return(
        <ScrollView style={styles.background}>
            <View style={styles.center}>
                </View>
                {respuestas.map(respuesta =>{
                    return(
                        <ListItem key={respuesta.id} bottomDivider onPress={() => {
                            props.navigation.navigate ('CRUDEjercicio', { 
                            respuestaId: respuesta.id,
                        })}}>
                            <ListItem.Chevron/>
                            <ListItem.Content>
                                <ListItem.Title>Ejercicio</ListItem.Title>
                                <ListItem.Subtitle>{respuesta.ejercicio}</ListItem.Subtitle>
                                <ListItem.Subtitle>Link YouTube: {respuesta.linkyoutube}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    );
                })}
                
        </ScrollView>
    )
}

export default TablaEjercicio;

const styles = StyleSheet.create({
    background: {
        backgroundColor: "white"
    },
    center: {
        flex: 1,
        paddingTop: '1%',
        backgroundColor: "white"
    },
    text: {
        fontSize: 14,
    }
});