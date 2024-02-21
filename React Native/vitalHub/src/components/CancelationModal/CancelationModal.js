import { Modal } from "react-native"
import { ButtonLarge, ButtonLargeModal, ButtonNormal } from "../Button/Button"
import { ButtonText } from "../ButtonText/StyleButtonText"
import { CancelButton } from "../Descriptions/StyledDescriptions"
import { CardCancel } from "../Descriptions/Descriptions"
import { ModalContent, ModalText, PatientModal } from "./style"
import { TitleModal } from "../Title/StyleTitle"
import { LargeButtonSelect } from "../Button/StyleButton"

export const CancelationModal = ({
    visible,
    setShowModalCancel,
    ...rest
}) => {
    return (

        <>
            <Modal {...rest} visible={visible} transparent={true} animationType="fade">
                {/* container */}
                <PatientModal>

                    {/* content */}
                    <ModalContent>
                        <TitleModal>Cancelar consulta</TitleModal>
                        <ModalText>Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</ModalText>

                        <ButtonLargeModal text={'Confirmar'}/>

                        <CardCancel text={'Cancelar'} onPressCancel={() => setShowModalCancel(false)}/>
                    </ModalContent>
                </PatientModal>
            </Modal>
        </>

    )
}