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

const TablaNoticia = (props) => {

    const [respuestas, setRespuestas] = useState([])

    useEffect(() => {
        db.collection('RNoticia').onSnapshot(querySnapshot => {
        const respuestas = [];
            querySnapshot.docs.forEach(doc =>{
                const {titulonoticia, especificacionnoticia, fuentenoticia} = doc.data() 
                respuestas.push({
                    id: doc.id,
                    titulonoticia,
                    especificacionnoticia,
                    fuentenoticia
                })
            })
        setRespuestas(respuestas)
        })
    }, [])

    return(
        <ScrollView>
            <View style={styles.center}>
                <Text style={styles.text}>Noticias:</Text>
                </View>
                {respuestas.map(respuesta =>{
                    return(
                        <ListItem key={respuesta.id} bottomDivider onPress={() => {
                            props.navigation.navigate ('CRUDNoticia', { 
                            respuestaId: respuesta.id,
                        })}}>
                            <ListItem.Chevron/>
                            <ListItem.Content>
                                <ListItem.Title>{respuesta.titulonoticia}:</ListItem.Title>
                                <ListItem.Subtitle>{respuesta.especificacionnoticia}</ListItem.Subtitle>
                                <ListItem.Subtitle>Fuente: {respuesta.fuentenoticia}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    );
                })}
                
        </ScrollView>
    )
}

export default TablaNoticia;

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