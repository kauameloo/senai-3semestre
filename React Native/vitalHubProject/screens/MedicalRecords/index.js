import { BoxInputBig, BoxInputBlue } from "../../src/components/BoxInput";
import { Botao } from "../../src/components/Button/style";
import { Container, ContainerView } from "../../src/components/Container/style";
import { CancelLink } from "../../src/components/Subtitle";
import { Subtitle } from "../../src/components/Subtitle/style";
import { TitleBtn, TitleLarge } from "../../src/components/Title/style";
import { UserImage } from "../../src/components/UserImage/style";

export function MedicalRecords({ navigation }) {
    return (
        <>
            <ContainerView>
                <Container>
                    <UserImage source={require('../../assets/Usuario.png')} />
                    <TitleLarge>Richard Kosta</TitleLarge>
                    <Subtitle>richard.kosta@gmail.com</Subtitle>

                    <BoxInputBig
                        textLabel={'Descrição da consulta'}
                        placeholder={'Descrição'}
                        maxLength={150}
                        editable={true}
                    />
                    <BoxInputBlue
                        textLabel={'Diagnóstico do paciente'}
                        placeholder={'Diagnóstico'}
                        maxLength={120}
                        editable={true}
                    />
                    <BoxInputBig
                        textLabel={'Prescrição médica'}
                        placeholder={'Prescrição médica'}
                        maxLength={100}
                        editable={true}
                    />

                    <Botao>
                        <TitleBtn>Salvar</TitleBtn>
                    </Botao>
                    <Botao>
                        <TitleBtn>Editar</TitleBtn>
                    </Botao>
                    <CancelLink onPress={() => { navigation.navigate("Login") }} />

                </Container>
            </ContainerView>
        </>
    )
}