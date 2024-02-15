import { BoxInput } from "../../src/components/BoxInput";
import { Botao, BotaoSair } from "../../src/components/Button/style";
import { CEPCidadeFlex, Container, ContainerView, InputContainer } from "../../src/components/Container/style";
import { Subtitle } from "../../src/components/Subtitle/style";
import { TitleBtn, TitleLarge } from "../../src/components/Title/style";
import { UserImage } from "../../src/components/UserImage/style";

export function PatientProfile() {
    return (
        <>
            <ContainerView>
                <Container>

                    <UserImage source={require('../../assets/Usuario.png')} />
                    <TitleLarge>Richard Kosta</TitleLarge>
                    <Subtitle>richard.kosta@gmail.com</Subtitle>

                    <InputContainer>
                        <BoxInput
                            textLabel={'Data de nascimento'}
                            placeholder={'23/10/2005'}
                            keyType="numeric"
                            maxLength={8}
                            editable={true}
                        />
                        <BoxInput
                            textLabel={'CPF'}
                            placeholder={'000.000.000-00'}
                            keyType="numeric"
                            maxLength={11}
                            editable={true}
                        />
                        <BoxInput
                            textLabel={'Endereço'}
                            placeholder={'Rua Niterói, 81'}
                            maxLength={30}
                            editable={true}
                        />
                        <CEPCidadeFlex>
                            <BoxInput
                                textLabel={'CEP'}
                                placeholder={'09180-070'}
                                keyType="numeric"
                                maxLength={9}
                                editable={true}
                                fieldWidth={40}
                            />
                            <BoxInput
                                textLabel={'Cidade'}
                                placeholder={'SCS-SP'}
                                maxLength={9}
                                editable={true}
                                fieldWidth={40}
                            />
                        </CEPCidadeFlex>
                    </InputContainer>
                    <Botao>
                        <TitleBtn>Salvar</TitleBtn>
                    </Botao>
                    <Botao>
                        <TitleBtn>Editar</TitleBtn>
                    </Botao>
                    <BotaoSair>
                        <TitleBtn>Sair do App</TitleBtn>
                    </BotaoSair>
                </Container>
            </ContainerView>
        </>
    )
}