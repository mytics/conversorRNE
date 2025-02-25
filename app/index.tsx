import {Link} from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { FlatList } from "react-native";

export default function Inicio(){

    const datarutas = [
        {name:"1-conversor", href:"/(1-conversor)"},
        {name:"teoria", href:"/(teoria)"},
        {name:"tabs", href:"/(tabs)"},
        {name:"Drawer", href:"/(drawer)"}
    ]

    const renderItem = ({item})=>{
        return(
            <LinkButton href={item.href}>
                <MaterialIcons name="add-alert" size={25} />
                <Name>{item.name}</Name>
                <Arrow name="arrow-forward" size={20}></Arrow>
            </LinkButton>
        )
    }

    return(
        <Container>
            <Title>MENU</Title>
            <FlatList keyExtractor={(item)=>item.name} data={datarutas} 
                renderItem={renderItem}/>
        </Container>
    )

}
const Container = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
`
const Title = styled.Text`
    color: #ccc;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight:bold;
`
const Name = styled.Text`
    color: #333;
    font-size: 20px;
`

const LinkButton = styled(Link)`
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 20px;
    align-items:center;
    border:2px solid #333; 
    justify-content: space-between;
    width:100%;
`

const Arrow = styled(MaterialIcons)`
    color: #333;
`


