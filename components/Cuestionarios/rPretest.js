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

export default function rPretest({navigation}) {

    const [respuestas, setRespuestas] = useState([])

    useEffect(() => {
        db.collection('Pretest').onSnapshot(querySnapshot => {
        const respuestas = [];
            querySnapshot.docs.forEach(doc =>{
                const {primera, segunda, tercera, cuarta, quinta, sexta, septima, octava, novena, decima} = doc.data() 
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
                    decima
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
                                <ListItem.Subtitle>4. ¿Dispone actualmente de un dispositivo móvil?: {respuesta.cuarta}</ListItem.Subtitle>
                                <ListItem.Subtitle>5. ¿Ha utilizado con anterioridad aplicaciones de gestión de tiempo?: {respuesta.quinta}</ListItem.Subtitle>
                                <ListItem.Subtitle>6. ¿Considera necesario una planeación y una organización al momento de realizar una actividad?: {respuesta.sexta}</ListItem.Subtitle>
                                <ListItem.Subtitle>7. ¿Ha oído hablar de la técnica de trabajo Pomodoro?: {respuesta.septima}</ListItem.Subtitle>
                                <ListItem.Subtitle>8. ¿Consideraría necesaria la creación de una aplicación móvil que permita gestionar su tiempo?: {respuesta.octava}</ListItem.Subtitle>
                                <ListItem.Subtitle>9. ¿Cree usted que las pausas activas estimulan el aprendizaje?: {respuesta.novena}</ListItem.Subtitle>
                                <ListItem.Subtitle>10. ¿Estaría a favor de la implementación de un gestor de tiempo con pausas activas de 5 minutos cada 25 minutos de clase?: {respuesta.decima}</ListItem.Subtitle>
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
