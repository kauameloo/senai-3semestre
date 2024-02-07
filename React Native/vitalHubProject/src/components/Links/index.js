import { ViewBox } from "../Container/style"
import { TextLink, TextLinkAccount, TextLinkMedium } from "./style"
import { Linking } from "react-native"

export const LinkMedium = ({
    url
}) => {
    return (
        <ViewBox>
            <TextLinkMedium
                onPress={() => { Linking.openURL(`${url}`) }}
            >Esqueceu sua senha!</TextLinkMedium>
        </ViewBox>
    )
}

export const LinkAccount = ({
    url
}) => {
    return (
        <TextLink>Não tem uma conta? <TextLinkAccount onPress={() => { Linking.openURL(`${url}`) }}>Crie uma conta agora!</TextLinkAccount></TextLink>
    )
}