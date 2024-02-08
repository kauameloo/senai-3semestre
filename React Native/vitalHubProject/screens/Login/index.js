import { Botao, BotaoGoogle } from "../../src/components/Button/style";
import { Container, ViewBox } from "../../src/components/Container/style";
import { Input } from "../../src/components/Input";
import { LinkAccount, LinkMedium } from "../../src/components/Links";
import { Logo } from "../../src/components/Logo/style";
import { TitleBtn, TitleBtnGoogle, TitleLarge } from "../../src/components/Title/style";
import { AntDesign } from '@expo/vector-icons';


export function Login({navigation}) {

    return (
        <>
            <Container>
                <Logo source={require('../../assets/VitalHub_Logo1.png')} />
                <TitleLarge>Entrar ou criar conta</TitleLarge>
                <Input placeholder={'Usuário ou E-mail'} placeholderTextColor={"#49B3BA"} />
                <Input placeholder={'Senha'} placeholderTextColor={"#49B3BA"} secureTextEntry={true} />
                <LinkMedium onPress={() => {navigation.navigate("ForgotPassword")}}/>
                <Botao>
                    <TitleBtn>Entrar</TitleBtn>
                </Botao>

                <BotaoGoogle>
                    <AntDesign name="google" size={18} color="#496BBA" />
                    <TitleBtnGoogle>Entrar com google</TitleBtnGoogle>
                </BotaoGoogle>

                <LinkAccount onPress={() => {navigation.navigate("CreateAccount")}} />
            </Container>
        </>
    )
}