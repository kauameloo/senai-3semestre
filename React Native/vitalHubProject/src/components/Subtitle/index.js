import { Subtitle } from "../Title/style"
import { Cancel, EmailUser } from "./style"

export const UserEmail = ({
    url
}) => {
    return (
        <Subtitle>Digite o código de 4 dígitos enviado para <EmailUser>username@email.com</EmailUser></Subtitle>
    )
}

export const CancelLink = ({
    onPress
}) => {
    return (
        <Cancel onPress={onPress}>Cancelar</Cancel>
    )
}