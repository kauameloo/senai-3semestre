import styled, { css } from "styled-components";

import { LinearGradient } from 'expo-linear-gradient';

export const Header = styled(LinearGradient).attrs({
    colors: ['#60BFC5', '#496BBA'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
})`
    width: 100%;
    height:15%;
    background-color: #FF99CC;
    border-radius: 0px 0px 22px 22px;
    box-shadow: 0px 1px 5px black ;


    justify-content: center;
    align-items: center; 
`