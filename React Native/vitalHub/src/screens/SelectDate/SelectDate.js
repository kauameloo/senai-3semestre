import { StatusBar } from "react-native"
import { Container } from "../../components/Container/StyleContainer"
import { TitleSelect } from "../../components/Title/StyleTitle"
import CalendarComponent from "../../components/CalendarComponent/CalendarComponent"
import { InputSelect } from "../../components/Input/Input"


export const SelectDate = () => {

    return (

        <Container>

            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

            <TitleSelect>Selecionar Data</TitleSelect>

            <CalendarComponent/>

            <InputSelect/>

        </Container>

    )

}