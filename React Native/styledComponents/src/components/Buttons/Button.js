import styled from "styled-components";

export const BtnIncrement = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 90;
    height: 35;
    background-color: #66ff66;
    border-radius: 5px;
    margin-top: 20;
`

export const BtnDecrement = styled(BtnIncrement)`
    background-color: #ff6666;
`