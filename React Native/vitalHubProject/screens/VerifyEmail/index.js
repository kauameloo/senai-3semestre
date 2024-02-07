import { Botao } from '../../src/components/Button/style';
import { Container, InputBox } from '../../src/components/Container/style';
import { InputNumber } from '../../src/components/Input';

import { Logo } from '../../src/components/Logo/style';
import { UserEmail } from '../../src/components/Subtitle';
import { Code } from '../../src/components/Subtitle/style';
import { Subtitle, TitleBtn, TitleLarge } from '../../src/components/Title/style';

export function VerifyEmail() {

    return (
        <>
            <Container>
                <Logo source={require('../../assets/VitalHub_Logo1.png')} />
                <TitleLarge>Verifique seu e-mail</TitleLarge>
                <UserEmail />
                <InputBox>
                    <InputNumber />
                    <InputNumber />
                    <InputNumber />
                    <InputNumber />
                </InputBox>
                <Botao>
                    <TitleBtn>Entrar</TitleBtn>
                </Botao>
                <Code>Reenviar Código</Code>
            </Container>
        </>
    )

}