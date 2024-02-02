import { View } from "react-native";
import { BoxInput } from "../../src/components/BoxInput";
import { ContainerForm, EstadoUFFlex, ScrollForm } from "./style";
import { Axios } from "axios";

async function buscaCep() {
    // const userCEP = ;
    const url = `https://viacep.com.br/ws/${userCEP}/json/` ;

    try {
        const promise = await fetch(url);
    } catch (error) {
        console.warn('Erro na API')
    }
}

export function Home() {
    return (
        <>
            <ScrollForm>
                <ContainerForm>
                    <BoxInput
                        textLabel={'Informar CEP'}
                        placeholder={'CEP...'}
                        keyType="numeric"
                        maxLength={9}
                        editable={true}
                    />
                    <BoxInput
                        textLabel={'Logradouro'}
                        placeholder={'Logradouro...'}
                        keyType="text"
                        maxLength={40}
                        editable={true}
                    />
                    <BoxInput
                        textLabel={'Bairro'}
                        placeholder={'Bairro...'}
                        keyType="text"
                        maxLength={30}
                        editable={true}
                    />
                    <BoxInput
                        textLabel={'Cidade'}
                        placeholder={'Cidade...'}
                        keyType="text"
                        maxLength={20}
                        editable={true}
                    />
                    <EstadoUFFlex>
                        <BoxInput
                            textLabel={'Estado'}
                            placeholder={'Estado...'}
                            keyType="text"
                            maxLength={15}
                            editable={true}
                            fieldWidth={70}
                        />
                        <BoxInput
                            textLabel={'UF'}
                            placeholder={'UF...'}
                            keyType="text"
                            maxLength={2}
                            editable={true}
                            fieldWidth={24}
                        />
                    </EstadoUFFlex>
                </ContainerForm>
            </ScrollForm>
        </>
    )
}