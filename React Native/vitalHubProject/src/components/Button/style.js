import styled from "styled-components";

export const Botao = styled.TouchableOpacity`
    width: 90%;
    height: 44px;
    border-radius: 5px;
    background-color: #496BBA;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`

export const BotaoGoogle = styled(Botao)`
    border: 1px solid #496BBA;
    background-color: white;
    margin-top: 15px;
    margin-bottom: 30px;
    flex-direction: row;
    gap: 27px;
`