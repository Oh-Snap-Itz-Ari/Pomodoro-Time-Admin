import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import "firebase/firestore";
import { AppLoading } from "expo";
import {
    useFonts,
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";
import {
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";
import { Icon } from "react-native-elements";

export default function homeCancion({ navigation }) {
    let [fontsLoaded, error] = useFonts({
        regularO: OpenSans_400Regular,
        semiBoldO: OpenSans_600SemiBold,
        boldO: OpenSans_700Bold,
        lightM: Montserrat_300Light,
        regularM: Montserrat_400Regular,
        mediumM: Montserrat_500Medium,
        boldM: Montserrat_700Bold,
        extraBoldM: Montserrat_800ExtraBold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.text}>Recomendación de canciones</Text>
                <Text style={styles.basetext}>
                    Añade, edita o elimina recomendaciones de canciones en Pomodoro Time.
                </Text>
            </View>
            <View style={styles.btn}>
                <TouchableOpacity onPress={() => navigation.navigate("rCancion")}>
                    <View style={styles.btnView}>
                        <Text style={styles.buttonText}>Añadir canción</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "white",
    },
    top: {
        paddingHorizontal: 24,
    },
    text: {
        fontFamily: "boldM",
        fontSize: 30,
    },
    basetext: {
        fontSize: 13,
        fontFamily: "semiBoldO",
        paddingBottom: 30,
        paddingVertical: 5,
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonText: {
        color: "white",
        fontFamily: 'regularM',
        fontSize: 14,
        textAlign: "center",
    },
    btnView: {
        borderRadius: 25,
        paddingVertical: 12,
        marginTop: 15,
        paddingHorizontal: 95,
        backgroundColor: "#1f65ff",
    },
});
