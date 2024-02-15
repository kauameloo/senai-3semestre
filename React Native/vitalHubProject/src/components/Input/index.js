import { InputBigText, InputNumberText, InputText, InputTextProfile } from "./style"

export const Input = ({
    editable, 
    placeholder, 
    fieldValue, 
    onChangeText, 
    keyType,
    maxLength,
    placeholderTextColor,
    secureTextEntry = false,
}) => {
    return (
        <InputText
            placeholder={placeholder}
            editable={editable}
            keyboardType={keyType}
            value={fieldValue}
            maxLength={maxLength}
            onChangeText={onChangeText}
            placeholderTextColor={placeholderTextColor}
            secureTextEntry={secureTextEntry}
        />
    )
}


export const InputProfile = ({
    editable, 
    placeholder, 
    fieldValue, 
    onChangeText, 
    keyType,
    maxLength,
    placeholderTextColor,
    secureTextEntry = false,
}) => {
    return (
        <InputTextProfile
            placeholder={placeholder}
            editable={editable}
            keyboardType={keyType}
            value={fieldValue}
            maxLength={maxLength}
            onChangeText={onChangeText}
            placeholderTextColor={placeholderTextColor}
            secureTextEntry={secureTextEntry}
        />
    )
}


export const InputNumber = ({
    editable, 
    placeholder = '0', 
    fieldValue, 
    onChangeText, 
    keyType = 'numeric',
    maxLength = 1,
    placeholderTextColor = '#34898F',
}) => {
    return (
        <InputNumberText
            placeholder={placeholder}
            editable={editable}
            keyboardType={keyType}
            value={fieldValue}
            maxLength={maxLength}
            onChangeText={onChangeText}
            placeholderTextColor={placeholderTextColor}
        />
    )
}

export const InputBig = ({
    editable, 
    placeholder, 
    fieldValue, 
    onChangeText, 
    keyType,
    maxLength,
    placeholderTextColor,
    secureTextEntry = false,
}) => {
    return (
        <InputBigText
            placeholder={placeholder}
            editable={editable}
            keyboardType={keyType}
            value={fieldValue}
            maxLength={maxLength}
            onChangeText={onChangeText}
            placeholderTextColor={placeholderTextColor}
            secureTextEntry={secureTextEntry}
        />
    )
}