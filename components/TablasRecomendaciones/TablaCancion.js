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

const TablaCancion = (props) => {

    const [respuestas, setRespuestas] = useState([])

    useEffect(() => {
        db.collection('RCancion').onSnapshot(querySnapshot => {
        const respuestas = [];
            querySnapshot.docs.forEach(doc =>{
                const {nombrecancion, autorcancion, albumcancion, linkcancion} = doc.data() 
                respuestas.push({
                    id: doc.id,
                    nombrecancion,
                    autorcancion,
                    albumcancion,
                    linkcancion,
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
                            props.navigation.navigate ('CRUDCancion', { 
                            respuestaId: respuesta.id,
                        })}}>
                            <ListItem.Chevron/>
                            <ListItem.Content>
                                <ListItem.Title>Canción</ListItem.Title>
                                <ListItem.Subtitle>Nombre: {respuesta.nombrecancion}</ListItem.Subtitle>
                                <ListItem.Subtitle>Autor: {respuesta.autorcancion}</ListItem.Subtitle>
                                <ListItem.Subtitle>Álbum: {respuesta.albumcancion}</ListItem.Subtitle>
                                <ListItem.Subtitle>Link YouTube: {respuesta.linkcancion}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    );
                })}
        </ScrollView>
    )
}

export default TablaCancion;

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