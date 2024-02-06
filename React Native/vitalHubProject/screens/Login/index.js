import { Botao, BotaoGoogle } from "../../src/components/Button/style";
import { Container } from "../../src/components/Container/style";
import { Input } from "../../src/components/Input";
import { LinkAccount, LinkMedium } from "../../src/components/Links";
import { Logo } from "../../src/components/Logo/style";
import { TitleBtn, TitleBtnGoogle, TitleLarge } from "../../src/components/Title/style";



export function Login() {




    return (
        <>
            <Container>
                <Logo source={require('../../assets/VitalHub_Logo1.png')} />
                <TitleLarge>Entrar ou criar conta</TitleLarge>
                <Input placeholder={'Usuário ou E-mail'} placeholderTextColor={"#49B3BA"} />
                <Input placeholder={'Senha'} placeholderTextColor={"#49B3BA"}/>
                <LinkMedium url={'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/09/GettyImages-1668971338-e1694439970587.jpg?w=1220&h=674&crop=1'}/>

                <Botao>
                    <TitleBtn>Entrar</TitleBtn>
                </Botao>

                <BotaoGoogle>
                    <TitleBtnGoogle>Entrar com google</TitleBtnGoogle>
                </BotaoGoogle>

                <LinkAccount/>
            </Container>
        </>
    )
}