import React, { useState } from "react";
import Modal from "@/components/Modal";

interface SuccessModalProps {
    isModalOpen: boolean;
    onCloseModal: (isOpen: boolean) => void;
}

const SuccessModal: React.FunctionComponent<SuccessModalProps> = (props) => {
    const { isModalOpen, onCloseModal } = props;

    return <Modal
        isOpen={isModalOpen}
        handleClose={() => onCloseModal(false)}>
        SUCCESS MODAL
    </Modal>;
};

export default SuccessModal;