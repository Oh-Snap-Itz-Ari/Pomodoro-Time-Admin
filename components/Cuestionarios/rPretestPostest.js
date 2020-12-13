import React, {useState} from 'react'
import {View, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, Alert} from 'react-native'
import 'firebase/firestore'
import {Icon} from 'react-native-elements'

export default function rPretestPostest({navigation}) {
    return (
            <ScrollView>
            <View style={styles.container}>
            <TouchableOpacity style={{marginTop: '14%'}} onPress={() => navigation.navigate('rCancion')}>
                <View style={styles.buttonContainer}>
                    <Icon name='music' color='#3491cd' type='font-awesome'/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop: '14%'}} onPress={() => navigation.navigate('rEjercicio')}>
                <View style={styles.buttonContainer}>
                    <Icon name='heartbeat' color='#3491cd' type='font-awesome'/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop: '14%'}} onPress={() => navigation.navigate('rFrase')}>
                <View style={styles.buttonContainer}>
                    <Icon name='font' color='#3491cd' type='font-awesome'/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop: '14%'}} onPress={() => navigation.navigate('rNoticia')}>
                <View style={styles.buttonContainer}>
                    <Icon name='globe' color='#3491cd' type='font-awesome'/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop: '14%'}} onPress={() => navigation.navigate('rPretestPostest')}>
                <View style={styles.buttonContainer}>
                    <Icon name='book' color='#135D81' type='font-awesome'/>
                </View>
            </TouchableOpacity>
            </View>
            <View style={styles.center}>
                <Text style={styles.text}>Seleccione que cuestionario desea observar:</Text>
            </View>
            <View style={{marginBottom:'2%',marginHorizontal: '8%'}}>
                <TouchableOpacity onPress={() => navigation.navigate('rPretest')}>
                <View style={styles.btnView}>
                    <Text style={styles.buttonText}>Pretest</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={{marginBottom:'2%',marginHorizontal: '8%'}}>
                <TouchableOpacity onPress={() => navigation.navigate('rPostest')}>
                <View style={styles.btnView}>
                    <Text style={styles.buttonText}>Postest</Text>
                </View>
                </TouchableOpacity>
            </View>
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
    questions: {
        flex: 1,
        width: '80%',
        marginHorizontal: '4%',
        paddingTop: '2%',
    },
    text: {
        fontSize: 14,
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