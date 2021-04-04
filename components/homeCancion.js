import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import "firebase/firestore";

export default function homeCancion({ navigation }) {

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
        backgroundColor: "white",
    },
    text: {
        fontSize: 30,
    },
    basetext: {
        fontSize: 13,
        paddingBottom: 30,
        paddingVertical: 5,
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonText: {
        color: "white",
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
