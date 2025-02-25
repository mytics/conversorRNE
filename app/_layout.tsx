import { Stack } from "expo-router";

export default function Layout(){
    return(
        <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen name="(teoria)" />
            <Stack.Screen name="(1-conversor)" />
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="(drawer)" />
        </Stack>
    )
}