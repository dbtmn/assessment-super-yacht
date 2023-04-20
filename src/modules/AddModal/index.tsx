import React, { ReactNode, useState } from "react";
import Modal from "@/components/Modal";
import Stepper from "@/components/Stepper";

import ThirdStep, { ThirdStepData } from "./ThirdStep";

interface AddModalProps {
    title: string;
    isModalOpen: boolean;
    onCloseModal: (isOpen: boolean) => void;
}

const AddModal: React.FunctionComponent<AddModalProps> = (props) => {
    const { title, isModalOpen, onCloseModal } = props;
    const [ thirdStepData, setThirdStepData ] = useState<ThirdStepData>();
    const [activeStep, setActiveStep] = useState(1);

    const handeSaveModal = () => {
        fetch("https://api0.superyachtapi.com/api/echo", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...thirdStepData }),
        }).then(() => {
            console.log("This is success!")
        })
    }


    const getContent = () => {
        switch (activeStep) {
            case 3:
                return <ThirdStep onInputChange={(data) => setThirdStepData(data)} />;
            default:
                return <div>This is placeholder for step {activeStep}</div>;
        }
    };

    return <Modal modalTitle={title} isOpen={isModalOpen} handleClose={() => onCloseModal(false)} handleSave={() => handeSaveModal()}>
        <Stepper onStepClick={(step) => setActiveStep(step)} />
        {getContent()}
    </Modal>;
};

export default AddModal;