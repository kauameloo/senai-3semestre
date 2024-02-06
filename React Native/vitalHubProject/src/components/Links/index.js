import { TextLink, TextLinkAccount, TextLinkMedium } from "./style"
import { Linking } from "react-native"

export const LinkMedium = ({
    url
}) => {
    return(
        <TextLinkMedium
            onPress={() => {Linking.openURL(`${url}`)}}
        >Esqueceu sua senha!</TextLinkMedium>
    )
}

export const LinkAccount = ({
    url
}) => {
    return(
        <TextLink>Não tem uma conta? <TextLinkAccount onPress={() => {Linking.openURL(`${url}`)}}>Crie uma conta agora!</TextLinkAccount></TextLink>
    )
}