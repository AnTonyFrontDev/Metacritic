import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {StyleSheet, View,} from 'react-native';
import {Main} from "./components/Main";
import {SafeAreaProvider} from "react-native-safe-area-context";

export default function App() {

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <StatusBar style="light" />
                <Main/>
            </View>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#171717',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
    }
});
