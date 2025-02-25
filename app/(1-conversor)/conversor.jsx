import styled from "styled-components/native";
import { router } from "expo-router";
import { useState } from "react";
import {Alert} from "react-native";

export default function Conversor(){
    const [centimeters, setCentimeters] = useState("");
    const [result, setResult] = useState(null);

    const convertirdecimaMetros = () =>{
        if(!centimeters){
            Alert.alert("Error", "Ingrese el valor en centimetros");
            return;
        }
        const metros = parseFloat(centimeters)/100;
        setResult(metros)
    }

    return(
        <Container>
            <Texto>Ingrese los centimetros</Texto>
            <Input placeholder="centimetros (cm)" keyBoardType="numeric" onChangeText={setCentimeters} />
            <CalculateButton onPress={convertirdecimaMetros}>
                <CalculateButtonText>CALCULAR</CalculateButtonText>
            </CalculateButton>
            <ResultText>Resultado: {result !== null?`${result} m`:"-"}</ResultText>

            <BackButton onPress={()=>router.back()}>
                <BackButtonText>Regresar</BackButtonText>
            </BackButton>
        </Container>

    );
}

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #f7e7ce;
`

const Texto = styled.Text`
    font-size:40px;
    font-weight:bold;
    color: #614e3e;
    margin-bottom:40px;    
`

const Input = styled.TextInput`
    width: 80%;
    padding:5px;
    margin-buttom:20px;
    background-color: #fff;
    border-radius:8px;
    border:1px solid #ccc;
    text-align:center;
    border:none;
    font-size:20px;

`
const CalculateButton = styled.TouchableOpacity`
    background-color: #decf93;
    padding: 15px 30px;
    border-radius: 8px;  
    margin-bottom: 20px;           
`

const CalculateButtonText = styled.Text`
    font-size:18px;
    font-weight:bold;
    color: #614e3e;
`

const ResultText = styled.Text`
    font-size:30px;
    color: #614e3e;
    font-weight:bold;
`

const BackButton = styled.TouchableOpacity`
background-color: #decf93;
padding: 10px 20px;
border-radius: 8px;             
`

const BackButtonText = styled.Text`
font-size:16px;
font-weight:bold;
color: #614e3e;
`