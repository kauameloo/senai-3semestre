import { Botao } from "../../src/components/Button/style";
import { Container } from "../../src/components/Container/style";
import { Input } from "../../src/components/Input";
import { Logo } from "../../src/components/Logo/style";
import { Subtitle, TitleBtn, TitleLarge } from "../../src/components/Title/style";

export function ForgotPassword() {
    return (
        <>
            <Container>
                <Logo source={require('../../assets/VitalHub_Logo1.png')} />
                <TitleLarge>Recuperar senha</TitleLarge>
                <Subtitle>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</Subtitle>
                <Input placeholder={'Usuário ou E-mail'} placeholderTextColor={"#49B3BA"}  />
                <Botao>
                    <TitleBtn>Continuar</TitleBtn>
                </Botao>
            </Container>
        </>
    )

}