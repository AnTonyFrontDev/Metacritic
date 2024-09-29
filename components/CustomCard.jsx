import React, {useEffect, useRef} from 'react';
import {Link} from "expo-router";
import {Image, Text, View, Animated, Pressable} from 'react-native';
import {Score} from "./Score";
import {styled} from "nativewind";
import {MovieCard} from "./GameCard";

const StyledPressable = styled(Pressable);

export function CustomCard({game}) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    };

    return (
        <Link href={`/${game.slug}`} asChild>
            <StyledPressable
                className="active:opacity-70 border border-neutral-800 active:border-neutral-300 rounded-xl">
                <View className="p-4 bg-neutral-800 rounded-lg">
                    <Text className="text-white text-xl font-bold mb-4">{game.title}</Text>
                    <View className="bg-neutral-900 py-8 rounded-lg">
                        <Image source={{uri: game.image}} className="w-72 h-72 rounded-lg m-auto "/>
                    </View>
                    <View className="mt-4 w-10 h-10">
                        <Score score={game.score} maxScore={100}/>
                    </View>
                    <Text className="text-white text-sm mt-3">{formatDate(game.releaseDate)}</Text>
                    <Text className="text-white text-sm mt-2 flex-shrink">{game.description}</Text>
                </View>
            </StyledPressable>
        </Link>
    );
}

export function AnimatedGameCard({game, index}) {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            delay: index * 500,
            useNativeDriver: true,
        }).start();
    }, [opacity, index]);

    return (
        <Animated.View className="my-2 rounded-lg" style={{opacity}}>
            <CustomCard game={game}/>
        </Animated.View>
    );
}

