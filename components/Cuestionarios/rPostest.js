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

export default function rPostest({navigation}) {

    const [respuestas, setRespuestas] = useState([])

    useEffect(() => {
        db.collection('Postest').onSnapshot(querySnapshot => {
        const respuestas = [];
            querySnapshot.docs.forEach(doc =>{
                const {primera, segunda, tercera, cuarta, quinta, sexta, septima, octava, novena, decima, onceava, doceava} = doc.data() 
                respuestas.push({
                    id: doc.id,
                    primera,
                    segunda,
                    tercera,
                    cuarta,
                    quinta,
                    sexta,
                    septima,
                    octava,
                    novena,
                    decima,
                    onceava,
                    doceava
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
                                <ListItem.Subtitle>1. Edad: {respuesta.primera}</ListItem.Subtitle>
                                <ListItem.Subtitle>2. Genero: {respuesta.segunda}</ListItem.Subtitle>
                                <ListItem.Subtitle>3. ¿Qué semestre cursa actualmente?: {respuesta.tercera}</ListItem.Subtitle>
                                <ListItem.Subtitle>4. Pospongo lo que tengo que hacer más de lo razonable: {respuesta.cuarta}</ListItem.Subtitle>
                                <ListItem.Subtitle>5. Me lamento de no haber hecho antes lo que tenía pendiente: {respuesta.quinta}</ListItem.Subtitle>
                                <ListItem.Subtitle>6. Me pongo a pensar en otras cosas mientras realizo una actividad: {respuesta.sexta}</ListItem.Subtitle>
                                <ListItem.Subtitle>7. Suelo realizar las actividades sin tomar como referencia la fecha de entrega: {respuesta.septima}</ListItem.Subtitle>
                                <ListItem.Subtitle>8. Desperdicio mi tiempo libre haciendo cosas sin importancia: {respuesta.octava}</ListItem.Subtitle>
                                <ListItem.Subtitle>9. Omito la programación de un tiempo específico para realizar una actividad: {respuesta.novena}</ListItem.Subtitle>
                                <ListItem.Subtitle>10. No suelo enfocarme en una actividad durante su realización: {respuesta.decima}</ListItem.Subtitle>
                                <ListItem.Subtitle>11. No encuentro el gusto ni me motiva el comenzar una actividad o tarea: {respuesta.onceava}</ListItem.Subtitle>
                                <ListItem.Subtitle>12. No siento motivación al haber completado una actividad que tenía pendiente: {respuesta.doceava}</ListItem.Subtitle>
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
