import { Stack } from 'expo-router';
import { MaterialIcons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function Layout(){
    return(
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer>
                <Stack screenOptions={{headerShown:false, tabBarActiveTintColor:"#14a4bd"}}>
                    <Stack.Screen name="index"  />
                    <Stack.Screen name="perfil" />
                </Stack>
            </Drawer>
            
        </GestureHandlerRootView>
        
    )
}