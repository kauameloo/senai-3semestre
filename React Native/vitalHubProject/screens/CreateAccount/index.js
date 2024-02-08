import { Botao } from "../../src/components/Button/style";
import { Container } from "../../src/components/Container/style";
import { Input } from "../../src/components/Input";
import { Logo } from "../../src/components/Logo/style";
import { CancelLink } from "../../src/components/Subtitle";
import { Cancel, Code } from "../../src/components/Subtitle/style";
import { Subtitle, TitleBtn, TitleLarge } from "../../src/components/Title/style";

export function CreateAccount({navigation}) {
    return (
        <>
            <Container>
                <Logo source={require('../../assets/VitalHub_Logo1.png')} />
                <TitleLarge>Criar conta</TitleLarge>
                <Subtitle>Insira seu endereço de e-mail e senha para realizar seu cadastro.</Subtitle>
                <Input placeholder={'Usuário ou E-mail'} placeholderTextColor={"#49B3BA"} />
                <Input placeholder={'Senha'} placeholderTextColor={"#49B3BA"} secureTextEntry={true} />
                <Input placeholder={'Confirmar Senha'} placeholderTextColor={"#49B3BA"} secureTextEntry={true} />
                <Botao>
                    <TitleBtn>Cadastrar</TitleBtn>
                </Botao>
                <CancelLink onPress={() => {navigation.navigate("Login")}}/>
            </Container>
        </>
    )
}