import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import MainHome from '../components/MainHome'
import LoginScreen from '../components/LoginScreen'
import RPretest from '../components/Cuestionarios/rPretest'
import RPostest from '../components/Cuestionarios/rPostest'
import CSeguimiento from '../components/Cuestionarios/cSeguimiento'
import RPretestPostestH from '../components/Cuestionarios/rPretestPostest'
import RNoticia from '../components/Recomendaciones/rNoticia'
import RFrase from '../components/Recomendaciones/rFrase'
import RJuego from '../components/Recomendaciones/rJuego'
import RCancion from '../components/Recomendaciones/rCancion'
import REjercicio from '../components/Recomendaciones/rEjercicio'
import TablaCancion from '../components/TablasRecomendaciones/TablaCancion'
import TablaEjercicio from '../components/TablasRecomendaciones/TablaEjercicio'
import TablaFrase from '../components/TablasRecomendaciones/TablaFrase'
import TablaNoticia from '../components/TablasRecomendaciones/TablaNoticia'
import TablaJuego from '../components/TablasRecomendaciones/TablaJuego'
import CRUDCancion from '../components/CRUDTablas/CRUDCancion'
import CRUDEjercicio from '../components/CRUDTablas/CRUDEjercicio'
import CRUDFrase from '../components/CRUDTablas/CRUDFrase'
import CRUDNoticia from '../components/CRUDTablas/CRUDNoticia'
import CRUDJuego from '../components/CRUDTablas/CRUDJuego'
import RNoticiaH from '../components/homeNoticia'
import RFraseH from '../components/homeFrase'
import RCancionH from '../components/homeCancion'
import REjercicioH from '../components/homeEjercicio'
import RJuegoH from '../components/homeJuego'

const Stack = createStackNavigator()

export default function Navigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name = 'LoginScreen'
                component = {LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name = 'MainHome'
                component = {MainHome}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name = 'rNoticiaH'
                component = {RNoticiaH}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name = 'rFraseH'
                component = {RFraseH}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name = 'rCancionH'
                component = {RCancionH}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name = 'rEjercicioH'
                component = {REjercicioH}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name = 'rJuegoH'
                component = {RJuegoH}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name = 'rPretestPostestH'
                component = {RPretestPostestH}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name = 'CSeguimiento'
                component = {CSeguimiento}
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
                name = 'CRUDJuego'
                component = {CRUDJuego}
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
                name = 'TablaJuego'
                component = {TablaJuego}
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
                name = 'rCancion'
                component = {RCancion}
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
            <Stack.Screen
                name = 'rJuego'
                component = {RJuego}
                options={{ headerShown: false }}
            />
            
        </Stack.Navigator>
    )
}