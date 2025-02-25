import { useRouter } from "expo-router";
import { View, Text, Button, TextInput, Image, TouchableOpacity, TouchableHighlight} from "react-native";
import  styled from "styled-components/native";

import { useState } from "react";

export default function Screen1(){
 

    const data = {
        nombre: "Juan",
        curso: 'Seminario RNE'
    }

    const [count, setCount] = useState(0);
    const onpress = () => setCount(prev => prev+1);

    return(
            <Container>
                <Image style={{width: 100, height: 100}} source={{ uri: 'https://youthigf.pa/assets/images/youthigfpanama-logo-rgb-icono-rojo-830x588.png' }}></Image>
                <TouchableHighlight onPress={onpress}>
                    <Texto>Contador</Texto>
                </TouchableHighlight>
                

                <TextInput />

             
                <Texto>{count}</Texto>
            </Container>
        
    );

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

