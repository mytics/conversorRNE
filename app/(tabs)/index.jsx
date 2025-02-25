import styled from "styled-components/native";

export default function Inicio(){
    return(
        <Container>
            <Texto>Pantalla de Inicio de Tabs</Texto>
        </Container>

    );
}

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const Texto = styled.Text`
    
`