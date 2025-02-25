import styled from "styled-components/native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { TextInput, Button} from "react-native";

export default function Perfil(){
    const router = useRouter();
    const [texto, setTexto] = useState("");

    return(
        <Container>
            <Texto>Pantalla Perfil</Texto>
            <TextInput 
            placeholder="Ingrese su nombre"
            value={texto}
            onChangeText={setTexto}
            style={{borderWidth:1, padding:10, marginBottom:10}}
            />
            <Button title="Enviar Datos"
             onPress={()=>router.push(`/show-perfil?texto=${encodeURIComponent(texto)}`)}></Button>
        </Container>
    )
}
const Texto = styled.Text`
    color:#d8360e;
    fontSize:40;
    fontWeight:bold;
`

const Container = styled.View`
    flex:1;
    alignItems:center;
    alignContent:center;
`