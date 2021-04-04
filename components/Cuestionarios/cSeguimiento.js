import React, {useEffect, useState} from 'react'
import {View, ScrollView, StyleSheet, Text} from 'react-native'
import * as firebase from 'firebase'
import 'firebase/firestore'
import {ListItem} from 'react-native-elements'

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

export default function cSeguimiento({navigation}) {

    const [respuestas, setRespuestas] = useState([])

    useEffect(() => {
        db.collection('CSeguimiento').onSnapshot(querySnapshot => {
        const respuestas = [];
            querySnapshot.docs.forEach(doc =>{
                const {primera, segunda, tercera, cuarta} = doc.data() 
                respuestas.push({
                    id: doc.id,
                    primera,
                    segunda,
                    tercera,
                    cuarta,
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
                        <ListItem key={respuesta.id} bottomDivider> 
                            <ListItem.Chevron/>
                            <ListItem.Content>
                                <ListItem.Title>Respuesta</ListItem.Title>
                                <ListItem.Subtitle>1. Correo electrónico: {respuesta.primera}</ListItem.Subtitle>
                                <ListItem.Subtitle>2. ¿Durante esta semana cuántas veces al día utilizó Pomodoro Time? - {respuesta.segunda}</ListItem.Subtitle>
                                <ListItem.Subtitle>3. ¿Durante esta semana cuánto duró en culminar una actividad aproximadamente? - {respuesta.tercera}</ListItem.Subtitle>
                                <ListItem.Subtitle>4. ¿Cuántas veces a la semana utilizo Pomodoro Time aproximadamente? - {respuesta.cuarta}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    );
                })}
        </ScrollView>
    )
}

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
