import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import {getGameDetails} from "../lib/metacritic";
import { Score } from "../components/Score";

export default function Detail() {
    const { gameslug } = useLocalSearchParams();
    console.log(gameslug);
    const [gameInfo, setGameInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (gameslug) {
            setLoading(true);
            getGameDetails(gameslug)
                .then((data) => {
                    setGameInfo(data);
                })
                .finally(() => setLoading(false)); // Termina la carga
        }
    }, [gameslug]);

    return (
        <Screen>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "#fdbc3f" },
                    headerTintColor: "black",
                    headerLeft: () => {},
                    headerTitle: gameInfo?.title || "Cargando...",
                    headerRight: () => {},
                }}
            />
            <View>
                {loading ? (
                    <>
                        <Text>id {gameslug}</Text>
                        <ActivityIndicator color={"#fff"} size={"large"} />
                    </>
                ) : gameInfo ? (
                    <ScrollView>
                        <View className="justify-center items-center text-center">
                            <Image
                                className="mb-4 rounded"
                                source={{ uri: gameInfo.img }}
                                style={{ width: 214, height: 294 }}
                            />
                            <Score score={gameInfo.score} maxScore={100} />
                            <Text className="text-white text-center font-bold text-xl">
                                {gameInfo.title}
                            </Text>
                            <Text className="text-white/70 mt-4 text-left mb-8 text-base">
                                {gameInfo.description}
                            </Text>
                        </View>
                    </ScrollView>
                ) : (
                    <Text>No se encontró información del juego.</Text>
                )}
            </View>
        </Screen>
    );
}