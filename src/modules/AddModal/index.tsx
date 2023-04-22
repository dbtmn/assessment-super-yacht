import React, { useEffect, useState } from "react";
import Modal from "@/components/Modal";
import Stepper from "@/components/Stepper";
import { ApiStatus, FormData, Frequency, NoticationChannels, YachtStates } from "@/types/FormData";

import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";

const steps = [
    { value: 1, label: "first", isVisited: true },
    { value: 2, label: "second", isVisited: false },
    { value: 3, label: "third", isVisited: false },
    { value: 4, label: "fourth", isVisited: false }];

interface AddModalProps {
    title: string;
    isModalOpen: boolean;
    onCloseModal: (isOpen: boolean) => void;
    onResponseAdd: (status: ApiStatus) => void;
}

const AddModal: React.FunctionComponent<AddModalProps> = (props) => {
    const initialForm = {
        title: "",
        notes: "",
        notificationChannels: [NoticationChannels.iq, NoticationChannels.email, NoticationChannels.push, NoticationChannels.slack, NoticationChannels.sms],
        notificationFrequency: Frequency.instant,
        eventTypes: [YachtStates.enter, YachtStates.left, YachtStates.cross, YachtStates.stay]
    };

    const { title, isModalOpen, onCloseModal, onResponseAdd } = props;

    const [isFormClear, setFormClear] = useState<boolean>(false);
    const [formState, setFormState] = useState<FormData>(initialForm);
    const [activeStep, setActiveStep] = useState(1);
    const [apiStatus, setApiStatus] = useState<ApiStatus>();

    const resetModal = () => {
        setActiveStep(1);
        setFormClear(true);
    };

    const handleNextModal = () => {
        if (activeStep !== steps.length) {
            setActiveStep(activeStep + 1);
        } else {
            setApiStatus(ApiStatus.PENDING);
            fetch("https://api0.superyachtapi.com/api/echo", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formState }),
            }).then(() => {
                setApiStatus(ApiStatus.SUCCESS);
                onResponseAdd(ApiStatus.SUCCESS);
            }).catch(() => {
                setApiStatus(ApiStatus.ERROR);
                onResponseAdd(ApiStatus.ERROR);
            }).finally(() => {
                resetModal();
                onCloseModal(false);
            });
        }
    }

    const handlePreviousModal = () => {
        if (activeStep !== 1) {
            setActiveStep(activeStep - 1);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const handleMouseChange = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, v?: boolean) => {
        const idArr = e.currentTarget.id.split("-");
        const dataType: string = idArr[0];
        const dataName: string = idArr[1];

        if (dataType === "notificationChannels" || dataType === "eventTypes") {
            const newState: string[] = formState[dataType];

            if (v) {
                newState.push(dataName);

                setFormState({
                    ...formState,
                    [dataType]: newState
                })
            } else {
                const indexItem = newState.indexOf(dataName);
                newState.splice(indexItem, 1);
            }
        }
        if (dataType === "notificationFrequency") {
            setFormState({
                ...formState,
                [dataType]: dataName
            });
        }
    };

    const getContent = () => {
        switch (activeStep) {
            case 3:
                return <ThirdStep isFormClear={isFormClear} onInputChange={(data) => handleChange(data)} />;
            case 4:
                return <FourthStep onInputChange={(e, v) => handleMouseChange(e, v)} />
            default:
                return <div>This is placeholder for step {activeStep}</div>;
        }
    };

    useEffect(() => {
        resetModal();
    }, [onCloseModal]);

    return <Modal
        modalTitle={title}
        isOpen={isModalOpen}
        handleClose={() => onCloseModal(false)}
        handleNext={() => handleNextModal()}
        handlePrevious={() => handlePreviousModal()}
        isSave={activeStep === (steps.length)}
        isSingularButton={false}>
        <Stepper steps={steps} activeStep={activeStep} />
        {getContent()}
    </Modal>;
};

export default AddModal;