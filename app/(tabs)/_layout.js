import {Tabs} from "expo-router";

import {HeartIcon, HomeIcon, InfoIcon} from "../../components/Icons";
import {useEffect} from "react";
import {check} from "prettier";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                initialRouteName: "index",
                headerShown: false,
                tabBarStyle: {backgroundColor: "#000"},
                tabBarActiveTintColor: "#ffbd40",
            }}
        >
            <Tabs.Screen
                name="custom"
                options={{
                    title: "Custom",
                    tabBarIcon: ({color}) => <HeartIcon color={color}/>,
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({color}) => <HomeIcon color={color}/>,
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: "About",
                    tabBarIcon: ({color}) => <InfoIcon color={color}/>,
                }}
            />
        </Tabs>
    );
}