import styled from "styled-components";

export const InputText = styled.TextInput`
    border: 2px solid #49B3BA ;
    text-align: left;
    padding: 16px;
    border-radius: 5px;
    margin-bottom: 15px;
    width: 90%;
    height: 53px;
    font-size: 14px;
    color: #49B3BA;
    font-family: 'MontserratAlternates_600SemiBold';
`

export const InputTextProfile = styled(InputText)`
    border: none;
    background-color: #F5F3F3;
`

export const InputNumberText = styled(InputText)`
    font-family: 'Quicksand_600SemiBold';
    color: #34898F;
    width: 15%;
    text-align: center;
`