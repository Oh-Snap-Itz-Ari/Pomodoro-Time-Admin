import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import RPretest from '../components/Cuestionarios/rPretest'
import RPostest from '../components/Cuestionarios/rPostest'
import RPretestPostest from '../components/Cuestionarios/rPretestPostest'
import RNoticia from '../components/Recomendaciones/rNoticia'
import RFrase from '../components/Recomendaciones/rFrase'
import RCancion from '../components/Recomendaciones/rCancion'
import REjercicio from '../components/Recomendaciones/rEjercicio'
import TablaCancion from '../components/TablasRecomendaciones/TablaCancion'
import TablaEjercicio from '../components/TablasRecomendaciones/TablaEjercicio'
import TablaFrase from '../components/TablasRecomendaciones/TablaFrase'
import TablaNoticia from '../components/TablasRecomendaciones/TablaNoticia'
import CRUDCancion from '../components/CRUDTablas/CRUDCancion'
import CRUDEjercicio from '../components/CRUDTablas/CRUDEjercicio'
import CRUDFrase from '../components/CRUDTablas/CRUDFrase'
import CRUDNoticia from '../components/CRUDTablas/CRUDNoticia'

const Stack = createStackNavigator()

export default function Navigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name = 'rPretestPostest'
                component = {RPretestPostest}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name = 'CRUDCancion'
                component = {CRUDCancion}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name = 'CRUDEjercicio'
                component = {CRUDEjercicio}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name = 'CRUDFrase'
                component = {CRUDFrase}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name = 'CRUDNoticia'
                component = {CRUDNoticia}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name = 'rCancion'
                component = {RCancion}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name = 'TablaCancion'
                component = {TablaCancion}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name = 'TablaEjercicio'
                component = {TablaEjercicio}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name = 'TablaFrase'
                component = {TablaFrase}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name = 'TablaNoticia'
                component = {TablaNoticia}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name = 'rPostest'
                component = {RPostest}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name = 'rFrase'
                component = {RFrase}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name = 'rEjercicio'
                component = {REjercicio}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name = 'rPretest'
                component = {RPretest}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name = 'rNoticia'
                component = {RNoticia}
                options={{ headerShown: false }}
            />
            
        </Stack.Navigator>
    )
}