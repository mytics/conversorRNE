import styled from "styled-components/native";

export default function Perfil(){
    return(
        <Container>
            <Texto>Componente Perfil de Drawer</Texto>
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