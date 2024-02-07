import { Botao } from "../../src/components/Button/style";
import { Container } from "../../src/components/Container/style";
import { Input } from "../../src/components/Input";
import { Logo } from "../../src/components/Logo/style";
import { Subtitle, TitleBtn, TitleLarge } from "../../src/components/Title/style";

export function ResetPassword() {
    return(
        <>
        <Container>
        <Logo source={require('../../assets/VitalHub_Logo1.png')} />
        <TitleLarge>Redefinir senha</TitleLarge>
        <Subtitle>Insira e confirme a sua nova senha</Subtitle>
        <Input placeholder={'Nova Senha'} placeholderTextColor={"#49B3BA"} secureTextEntry={true} />
        <Input placeholder={'Confirmar nova Senha'} placeholderTextColor={"#49B3BA"} secureTextEntry={true} />
        <Botao>
            <TitleBtn>Confirmar nova senha</TitleBtn>
        </Botao>
        </Container>
        </>
    )
}