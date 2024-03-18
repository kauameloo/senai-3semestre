<<<<<<< HEAD
import { useEffect } from "react"
import { SendButton } from "../../components/Button/Button"
import { ButtonSend } from "../../components/Button/StyleButton"
import { BoxAgeEmail, BoxBtn, BoxDescription, BoxViewImageImport, Container, ScrollContainer, ViewImageImport } from "../../components/Container/StyleContainer"
import { CardBackLess, CardCancel, CardCancelLess, DescriptionDoc, DescriptionPassword } from "../../components/Descriptions/Descriptions"
import { ImagePrescription, ImagePrescriptionNull, ViewImage } from "../../components/Images/StyleImages"
import { HighInputBox, HighInputBoxGrey, InputBox, LargeInputTextBox } from "../../components/InputBox/InputBox"
import { Label } from "../../components/Label/Label"
import { TitleProfile } from "../../components/Title/StyleTitle"
import { ImportImages, Line, TitleImage } from "./Style"

import * as MediaLibrary from "expo-media-library"

// import { useRoute } from '@react-navigation/native';

export const ViewPrescription = ({ navigation, route }) => {

    // const { photoUri } = route.params;

    useEffect(() => {
        // console.log(photoUri)
        console.log("sada") 
        console.log(route.params)
    }, [route])

    return (
        <>
            <ScrollContainer>
=======
import { SendButton } from "../../components/Button/Button";
import { ButtonSend } from "../../components/Button/StyleButton";
import {
  BoxAgeEmail,
  BoxBtn,
  BoxDescription,
  BoxViewImageImport,
  Container,
  ScrollContainer,
  ViewImageImport,
} from "../../components/Container/StyleContainer";
import {
  CardBackLess,
  CardCancel,
  CardCancelLess,
  DescriptionDoc,
  DescriptionPassword,
} from "../../components/Descriptions/Descriptions";
import { ViewImage } from "../../components/Images/StyleImages";
import {
  HighInputBox,
  HighInputBoxGrey,
  InputBox,
  LargeInputTextBox,
} from "../../components/InputBox/InputBox";
import { Label } from "../../components/Label/Label";
import { TitleProfile } from "../../components/Title/StyleTitle";
import { Line, TitleImage } from "./Style";

export const ViewPrescription = ({ navigation }) => {
  return (
    <>
      <ScrollContainer>
        <Container>
          <ViewImage source={require("../../assets/ney.webp")} />
>>>>>>> f1a9de4d43f6f1a4e7e50ab579a8ce8b9edcd1c8

          <TitleProfile>Dr. Ney</TitleProfile>

          <BoxDescription>
            <DescriptionDoc description={"Cliníco geral"} />
            <DescriptionDoc description={"CRM-15286"} />
          </BoxDescription>

          <HighInputBoxGrey
            fieldHeight={350}
            placeholderTextColor={"#A1A1A1"}
            textLabel={"Descrição da consulta"}
            placeholder={"Descrição"}
            editable={true}
            fieldWidth={90}
          />

          <InputBox
            placeholderTextColor={"#A1A1A1"}
            textLabel={"Diagnóstico do paciente"}
            placeholder={"Diagnóstico"}
            editable={true}
            fieldWidth={90}
          />

          <HighInputBoxGrey
            // fieldHeight={350}
            placeholderTextColor={"#A1A1A1"}
            textLabel={"Prescrição médica"}
            placeholder={"Prescrição"}
            editable={true}
            fieldWidth={90}
          />

          <BoxViewImageImport>
            <Label textLabel={"Exames médicos"} />

            <ViewImageImport>
              <TitleImage>{"[ ! ] Nenhuma foto informada"}</TitleImage>
            </ViewImageImport>
          </BoxViewImageImport>

<<<<<<< HEAD
                    <BoxViewImageImport>

                        <Label textLabel={"Exames médicos"} />

                        <ImportImages>
                            {route.params ? <ImagePrescription source={{ uri : route.params.photoUri }} /> : <TitleImage>{"[ ! ] Nenhuma foto informada"}</TitleImage>}
                        </ImportImages>
=======
          <BoxBtn>
            <SendButton
              text={"Enviar"}
              onPress={() => {
                navigation.navigate("Cam");
              }}
            />
            <CardCancel text={"Cancelar"} />
          </BoxBtn>

          <Line />
>>>>>>> f1a9de4d43f6f1a4e7e50ab579a8ce8b9edcd1c8

          <HighInputBoxGrey
            // fieldHeight={350}
            placeholderTextColor={"#A1A1A1"}
            placeholder={"Resultado do exame"}
            editable={true}
            fieldWidth={90}
          />

<<<<<<< HEAD
                    <BoxBtn>
                        <SendButton onPress={() => { navigation.navigate("Camera") }} text={"Enviar"} />
                        <CardCancel onPressCancel={() => { navigation.replace("Main") }} text={"Cancelar"} />
                    </BoxBtn>

                    <Line />

                    <HighInputBoxGrey
                        // fieldHeight={350}
                        placeholderTextColor={"#A1A1A1"}
                        placeholder={"Resultado do exame"}
                        editable={true}
                        fieldWidth={90}
                    />

                    <CardBackLess onPressCancel={() => { navigation.navigate("PatientConsultation") }} text={"Voltar"} />

                </Container>

            </ScrollContainer>
        </>
    )
}
=======
          <CardBackLess
            onPressCancel={() => {
              navigation.navigate("PatientConsultation");
            }}
            text={"Voltar"}
          />
        </Container>
      </ScrollContainer>
    </>
  );
};
>>>>>>> f1a9de4d43f6f1a4e7e50ab579a8ce8b9edcd1c8
