import { useEffect, useRef } from "react";
import {
    View,
    Text,
    Image,
    Animated,
    Pressable,
} from "react-native";
import { Score } from "./Score";
import { Link } from "expo-router";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export function GameCard({ game }) {
    return (
        <Link href={`/${game.slug}`} asChild>
            <StyledPressable className="active:opacity-70 border border-black active:border-white/50 mb-6 bg-neutral-800 rounded-xl p-4">
                <View className="flex-row gap-4" key={game.slug}>
                    <Image source={{ uri: game.image }} className="w-[107px] h-[147px] rounded-lg" />
                    <View className="flex-shrink">
                        <Text className="text-2xl font-bold text-neutral-100">
                            {game.title}
                        </Text>
                        <Score score={game.score} maxScore={100} />
                        <Text className="mt-1 text-lg text-neutral-300">
                            {game.description.slice(0, 100)}...
                        </Text>
                    </View>
                </View>
            </StyledPressable>
        </Link>
    );
}

export function AnimatedGameCard({ game, index }) {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            delay: index * 250,
            useNativeDriver: true,
        }).start();
    }, [opacity, index]);

    return (
        <Animated.View style={{ opacity }}>
            <GameCard game={game} />
        </Animated.View>
    );
}
