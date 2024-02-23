import { ButtonText, ButtonTextGoogle, ButtonTextHome, WhiteButtonText, WhiteButtonTextStet } from "../ButtonText/StyleButtonText";
import { Label } from "../Label/Label";
import { ButtonBlocked, ButtonHome, ButtonHomeStet, GoogleButton, LargeButton, LargeButtonSelect, NormalButton, SmallButtonBlocked, WhiteButtonHome, WhiteButtonHomeStet } from "./StyleButton";
import { AntDesign } from '@expo/vector-icons';

export const ButtonNormal = ({
    onPress,
    text
}) => {
    return (
        <NormalButton
            onPress={onPress}>
            <ButtonText>{text}</ButtonText>
        </NormalButton>
    );
}

export const ButtonGoogle = ({
    onPress,
    text
}) => {
    return (
        <GoogleButton
            onPress={onPress}>
            <AntDesign name="google" size={18} color="#496BBA" />
            <ButtonTextGoogle>{text}</ButtonTextGoogle>
        </GoogleButton>
    );
}

export const ButtonLarge = ({
    onPress,
    text
}) => {
    return (
        <LargeButton
            onPress={onPress}>
            <ButtonText>{text}</ButtonText>
        </LargeButton>
    );
}

export const ButtonLargeSelect = ({
    onPress,
    text
}) => {
    return (
        <LargeButtonSelect
            onPress={onPress}>
            <ButtonText>{text}</ButtonText>
        </LargeButtonSelect>
    );
}

export const BlockedButton = ({
    onPress,
    text
}) => {
    return (
        <ButtonBlocked
            onPress={onPress}>
            <ButtonText>{text}</ButtonText>
        </ButtonBlocked>
    );
}

export const BlockedSmallButton = ({
    onPress,
    text
}) => {
    return (
        <SmallButtonBlocked
            onPress={onPress}>
            <ButtonText>{text}</ButtonText>
        </SmallButtonBlocked>
    );
}

export const FilterButton = ({ selected = false, text, onPress = null }) => {
    return (
        <>
            {selected ?
                <ButtonHome selected={selected} onPress={onPress}><ButtonTextHome>{text}</ButtonTextHome></ButtonHome>
                :
                <WhiteButtonHome selected={selected} onPress={onPress}><WhiteButtonText>{text}</WhiteButtonText></WhiteButtonHome>
            }
        </>
    )
}

export const FilterButtonStet = ({ selected = false, text, onPress = null }) => {
    return (
        <>
            {selected ?
                <ButtonHomeStet selected={selected} onPress={onPress}><ButtonTextHome>{text}</ButtonTextHome></ButtonHomeStet>
                :
                <WhiteButtonHomeStet selected={selected} onPress={onPress}><WhiteButtonTextStet>{text}</WhiteButtonTextStet></WhiteButtonHomeStet>
            }
        </>
    )
}