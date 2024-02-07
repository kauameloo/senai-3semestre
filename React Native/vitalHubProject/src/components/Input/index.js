import { InputNumberText, InputText } from "./style"

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