import { Link, Stack } from "expo-router";
import { Pressable, View } from "react-native";
import { Logo } from "../components/Logo";
import { CircleInfoIcon } from "../components/Icons";

export default function Layout() {
    return (
        <View className="flex-1 bg-neutral-800">
            <Stack
                screenOptions={{
                    headerStyle: { backgroundColor: "#262626" },
                    headerTintColor: "#fdbc3f",
                    headerTitle: "",
                    headerLeft: () => <Logo />,
                    headerRight: () => (
                        <Link asChild href="/about">
                            <Pressable>
                                <CircleInfoIcon />
                            </Pressable>
                        </Link>
                    ),
                }}
            />
        </View>
    );
}