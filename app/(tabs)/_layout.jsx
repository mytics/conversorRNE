import { Tabs } from 'expo-router';
import { MaterialIcons } from "@expo/vector-icons";

export default function Layout(){
    return(
        <Tabs screenOptions={{headerShown:false, tabBarActiveTintColor:"#14a4bd"}}>
            {<Tabs.Screen name="index" options={{title:"Inicio", tabBarIcon:()=>(<MaterialIcons size={20} color={"#202ae5"} name='add-home-work'></MaterialIcons>)}} />}
            <Tabs.Screen name="perfil" />
        </Tabs>
    )
}