import { Stack } from "expo-router";
import { View } from "react-native";
import { ClerkProvider, SignedIn, SignedOut, useAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";
import * as SecureStore from "expo-secure-store";
const tokenCache = {
    async getToken(key) {
        try {
            return SecureStore.getItemAsync(key);
        } catch (err) {
            return null;
        }
    },
    async saveToken(key, value) {
        try {
            return SecureStore.setItemAsync(key, value);
        } catch (err) {
            return;
        }
    },
};

// let's set to the key that in the .env file>>>
const clerk_Kay = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY



export default function RootLayout() {
    useWarmUpBrowser();
    return (
        <ClerkProvider tokenCache={tokenCache} publishableKey={clerk_Kay}>
            <RootLayoutNav />
        </ClerkProvider>
    )
}


const RootLayoutNav = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="card" options={{ presentation: 'card', animation: "fade_from_bottom" }} />
            <Stack.Screen name="[id]" options={{ headerShown: false }} />
            <Stack.Screen name="singIn" options={{ headerShown: false }} />
            <Stack.Screen name="profile" options={{ headerShown: false }} />
        </Stack>
    )
}
