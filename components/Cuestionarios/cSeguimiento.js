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
                const {primera, segunda, tercera, cuarta, quinta, sexta, septima} = doc.data() 
                respuestas.push({
                    id: doc.id,
                    primera,
                    segunda,
                    tercera,
                    cuarta,
                    quinta,
                    sexta,
                    septima,
                })
            })
        setRespuestas(respuestas)
        })
    }, [])

    return(
        <ScrollView>
            <View style={styles.center}>
                <Text style={styles.text}>Listado de respuestas Cuestionario de Seguimiento</Text>
                </View>
                {respuestas.map(respuesta =>{
                    return(
                        <ListItem key={respuesta.id} bottomDivider> 
                            <ListItem.Chevron/>
                            <ListItem.Content>
                                <ListItem.Title>Respuesta:</ListItem.Title>
                                <ListItem.Subtitle>1. Correo electrónico: {respuesta.primera}</ListItem.Subtitle>
                                <ListItem.Subtitle>2. ¿Durante esta semana cuántas veces al día utilizó Pomodoro Time?: {respuesta.segunda}</ListItem.Subtitle>
                                <ListItem.Subtitle>3. ¿Durante esta semana cuánto duró en culminar una actividad aproximadamente?: {respuesta.tercera}</ListItem.Subtitle>
                                <ListItem.Subtitle>4. ¿Cuántas veces a la semana utilizo Pomodoro Time aproximadamente?: {respuesta.cuarta}</ListItem.Subtitle>
                                <ListItem.Subtitle>5. ¿En esta semana qué prefirió al momento de la realización de una actividad?: {respuesta.quinta}</ListItem.Subtitle>
                                <ListItem.Subtitle>6. ¿Qué recomendación fue la que le resulto más interesante durante el transcurso de la semana?: {respuesta.sexta}</ListItem.Subtitle>
                                <ListItem.Subtitle>7. ¿Considera que durante la realización de las actividades fue más productivo gracias a la utilización de Pomodoro Time?: {respuesta.septima}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    );
                })}
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
    text: {
        fontSize: 14,
    }
});
