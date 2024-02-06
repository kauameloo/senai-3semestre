import { InputText } from "./style"

export const Input = ({
    editable, 
    placeholder, 
    fieldValue, 
    onChangeText, 
    keyType,
    maxLength,
    placeholderTextColor,
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
        />
    )
}