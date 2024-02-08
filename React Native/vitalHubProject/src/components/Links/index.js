import { ViewBox } from "../Container/style"
import { TextLink, TextLinkAccount, TextLinkMedium } from "./style"
import { Linking } from "react-native"

export const LinkMedium = ({
    onPress
}) => {
    return (
        <ViewBox>
            <TextLinkMedium
                onPress={onPress}
            >Esqueceu sua senha!</TextLinkMedium>
        </ViewBox>
    )
}

export const LinkAccount = ({
    onPress
}) => {
    return (
        <TextLink>Não tem uma conta? <TextLinkAccount onPress={onPress}>Crie uma conta agora!</TextLinkAccount></TextLink>
    )
}