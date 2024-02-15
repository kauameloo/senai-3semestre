import { Button, View } from "react-native"

export const Navegacao = ({ navigation }) => {
    return (
        <View>
            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />
            <Button
                title="ForgotPassword"
                onPress={() => navigation.navigate("ForgotPassword")}
            />
            <Button
                title="VerifyEmail"
                onPress={() => navigation.navigate("VerifyEmail")}
            />
            <Button
                title="ResetPassword"
                onPress={() => navigation.navigate("ResetPassword")}
            />
            <Button
                title="CreateAccount"
                onPress={() => navigation.navigate("CreateAccount")}
            />
            <Button
                title="PatientProfile"
                onPress={() => navigation.navigate("PatientProfile")}
            />
            <Button
                title="DoctorConsultation"
                onPress={() => navigation.navigate("DoctorConsultation")}
            />
        </View>
    )
}