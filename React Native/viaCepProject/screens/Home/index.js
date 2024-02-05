import { View } from "react-native";
import { BoxInput } from "../../src/components/BoxInput";
import { ContainerForm, EstadoUFFlex, ScrollForm } from "./style";
import { useEffect, useState } from "react";
import axios from "axios";
import api from "../../services/Services";

export function Home() {

    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [uf, setUF] = useState('')



    // useEffect(() => {

    //     const buscaCep = async () => {
    //         try {
    //             const promise = await api.get(`${cep}/json/`);

    //             setLogradouro(promise.data.logradouro);
    //             setBairro(promise.data.bairro);
    //             setCidade(promise.data.localidade);
    //             setUF(promise.data.uf);


    //             //const estado = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${promise.data.uf}`)

    //             console.log(promise.data);
    //             setEstado(estado.data.nome)
    //         } catch (error) {
    //             console.log('Erro na API', error);
    //         }

    //         buscaCep();
    //     }
    // }, [cep])

    useEffect(() => {

        const getCep = async () => {
            if (cep !== "" && cep.length === 8) {
                try {
                    const response = await api.get(`${cep}/json/`);
                    if (response.data) {

                        setLogradouro(response.data.logradouro);
                        setBairro(response.data.bairro);
                        setCidade(response.data.localidade);
                        setUF(response.data.uf);

                        const estado = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${response.data.uf}

                        `)

                        setEstado(estado.data.nome);

                    } else {

                        alert("Verifique o CEP digitado !!!");

                    }
                    console.log(response.data)
                } catch (error) {

                    console.log("Ocorreu um erro ao buscar o CEP", error);

                }
            }
        };
        if (cep.length < 8) {
            setLogradouro('');
            setBairro('');
            setCidade('');
            setUF('');
            setEstado('');
        }
        getCep();

    }, [cep]);


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
                        onChangeText={(e) => setCep(e)}
                        fieldValue={cep}
                    />
                    <BoxInput
                        textLabel={'Logradouro'}
                        placeholder={'Logradouro...'}
                        maxLength={40}

                        fieldValue={logradouro}
                    />
                    <BoxInput
                        textLabel={'Bairro'}
                        placeholder={'Bairro...'}
                        maxLength={30}

                        fieldValue={bairro}
                    />
                    <BoxInput
                        textLabel={'Cidade'}
                        placeholder={'Cidade...'}
                        maxLength={20}

                        fieldValue={cidade}
                    />
                    <EstadoUFFlex>
                        <BoxInput
                            textLabel={'Estado'}
                            placeholder={'Estado...'}
                            maxLength={15}

                            fieldWidth={70}
                            fieldValue={estado}
                        />
                        <BoxInput
                            textLabel={'UF'}
                            placeholder={'UF...'}
                            maxLength={2}

                            fieldWidth={24}
                            fieldValue={uf}
                        />
                    </EstadoUFFlex>
                </ContainerForm>
            </ScrollForm>
        </>
    )
}