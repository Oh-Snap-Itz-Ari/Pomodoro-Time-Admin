import {Text, View, StyleSheet, TextInput, Alert, TouchableOpacity} from 'react-native'
import React, {Component} from 'react'
import * as firebase from 'firebase'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

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

export default class ForgotPassword extends React.Component{

    constructor(props){
        super(props);
        this.state = {email:'', error:'', loading:false};
    }
    onLoginPress(){
        this.setState({error:'', loading:true});

        const{email} = this.state;
        firebase.auth().sendPasswordResetEmail(email)
        .then(() =>{
          if(email === 'afmelo@ucundinamarca.edu.co'){
            this.setState({error:'',loading:false});
            this.props.navigation.navigate('LoginScreen');}

          else if(email === 'diegoalexanderdiaz@ucundinamarca.edu.co'){
            this.setState({error:'',loading:false});
            this.props.navigation.navigate('LoginScreen');}

          else if(email === 'aparenas@ucundinamarca.edu.co'){
              this.setState({error:'',loading:false});
              this.props.navigation.navigate('LoginScreen');}
          else{
          Alert.alert(
            '⚠️ Datos invalidos',
            'El correo electrónico ingresado no coincide con el de un administrador.',
            [
              {text: 'Reintentar', onPress: () => console.log('Ask me later pressed')},
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          )
          }

        })
        .catch(() => {
            this.setState({error:'Autenticación fallida', loading:false});
            if(email === ''){
              Alert.alert(
                '⚠️ Campos vacios',
                'Ingrese un correo electrónico.',
                [
                  {text: 'Reintentar', onPress: () => console.log('Ask me later pressed')},
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              )
            }
            else{
            Alert.alert(
              '⚠️ Datos invalidos.',
              'El correo electrónico ingresado no coincide con ninguna cuenta.',
              [
                {text: 'Reintentar', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              { cancelable: false }
            )
            }
        })
    }

        renderButtonOrLoading(){
            return <View>
                <TouchableOpacity style={styles.login} onPress={this.onLoginPress.bind(this)}>
                  <Text style={styles.textLogin}>Restablecer</Text>
                </TouchableOpacity>
            </View>
        }
        
        onFocus(value){
          this.setState({
            borderColor: value
          });
        }

        render(){
            return(
                    <View style={styles.container}>
                      <Text style={styles.title}>Restablecer contraseña</Text>
                      <Text style={styles.text}>Pomodoro time te enviará un correo electrónico con el enlace para restablecer la contraseña.</Text>
                    <View style={styles.action}>
                      <View style={[styles.section,{borderColor:this.state.borderColor=="email" ? '#3465d9' : 'gray'}]}>
                        <MaterialIcons name="email" size={20}
                          color={this.state.borderColor=="email" ? '#3465d9' : 'gray'} />
                        <TextInput style={[styles.textInput,{color:this.state.borderColor=="email" ? '#3465d9' : 'gray'}]} value= {this.state.email} onChangeText={email => this.setState({email})}
                          placeholder="Correo electrónico" 
                          onFocus={()=>this.onFocus("email")}
                        />
                      </View>
                    </View>
                      {this.renderButtonOrLoading()}
                  </View>
            )
        }
    }

const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingHorizontal: 30,
        paddingVertical: 100
      }, 
      
      img:{ 
        resizeMode: 'contain',
        width: 220,
        height: 120,
      },
      text: {
        color: 'grey',
        fontSize: 14,
      },
      title: {
        color: '#3465d9',
        fontWeight: 'bold',
        fontSize: 30
      },
      section: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignItems: 'center',
        marginTop: 20
      },
      textInput: {
        flex: 1,
        paddingLeft: 10,
      },
      textLogin: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
      },
      login: {
        width: '100%',
        height: 40,
        backgroundColor: '#3465d9',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        borderRadius: 50
      },
      signup: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'center'
      },
      textSingup: {
        textAlign: 'center',
      },
});