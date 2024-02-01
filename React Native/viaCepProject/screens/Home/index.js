import { BoxInput } from "../../src/components/BoxInput";
import { ContainerForm, ScrollForm } from "./style";

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
                </ContainerForm>
            </ScrollForm>
        </>
    )
}