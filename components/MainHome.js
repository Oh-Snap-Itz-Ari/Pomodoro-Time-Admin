import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import { Ionicons } from '@expo/vector-icons';

import RPretestPostest from './Cuestionarios/rPretestPostest'
import RNoticia from './Recomendaciones/rNoticia'
import RFrase from './Recomendaciones/rFrase'
import RCancion from './Recomendaciones/rCancion'
import REjercicio from './Recomendaciones/rEjercicio'
import RJuego from './Recomendaciones/rJuego'

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="RCancion"
      activeColor="#fff"
    >
      <Tab.Screen
        name="RCancion"
        component={RCancion}
        options={{
          tabBarLabel: 'Canción',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-musical-notes" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="RJuego"
        component={RJuego}
        options={{
          tabBarLabel: 'Juego',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-game-controller" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="REjercicio"
        component={REjercicio}
        options={{
          tabBarLabel: 'Ejercicio',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-walk" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="RFrase"
        component={RFrase}
        options={{
          tabBarLabel: 'Frase',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-book" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="RNoticia"
        component={RNoticia}
        options={{
          tabBarLabel: 'Noticia',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-globe" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="RPretestPostest"
        component={RPretestPostest}
        options={{
          tabBarLabel: 'Test',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-document" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;