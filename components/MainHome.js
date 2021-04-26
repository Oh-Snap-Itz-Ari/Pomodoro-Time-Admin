import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import { Ionicons } from '@expo/vector-icons';

import RPretestPostestH from './Cuestionarios/rPretestPostest'
import RNoticiaH from './homeNoticia'
import RFraseH from './homeFrase'
import RCancionH from './homeCancion'
import REjercicioH from './homeEjercicio'
import RJuegoH from './homeJuego'

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="rCancionH"
      activeColor="#007AFF"
    >
      <Tab.Screen
        name="rCancionH"
        component={RCancionH}
        options={{
          tabBarLabel: 'Canción',
          tabBarColor: '#FDFDFD',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-musical-notes" color={'#007AFF'} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="rJuegoH"
        component={RJuegoH}
        options={{
          tabBarLabel: 'Juego',
          tabBarColor: '#FDFDFD',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-game-controller" color={'#007AFF'} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="rEjercicioH"
        component={REjercicioH}
        options={{
          tabBarLabel: 'Ejercicio',
          tabBarColor: '#FDFDFD',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-walk" color={'#007AFF'} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="rFraseH"
        component={RFraseH}
        options={{
          tabBarLabel: 'Frase',
          tabBarColor: '#FDFDFD',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-book" color={'#007AFF'} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="rNoticiaH"
        component={RNoticiaH}
        options={{
          tabBarLabel: 'Noticia',
          tabBarColor: '#FDFDFD',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-globe" color={'#007AFF'} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="rPretestPostestH"
        component={RPretestPostestH}
        options={{
          tabBarLabel: 'Opciones',
          tabBarColor: '#FDFDFD',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-settings" color={'#007AFF'} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;