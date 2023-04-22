import React, { ReactNode } from "react";

import styles from "./Modal.module.css";

interface ModalProps {
    modalTitle?: string;
    children: ReactNode;
    isOpen: boolean;
    isSave?: boolean;
    isSingularButton?: boolean;
    handleClose: () => void;
    handleNext?: () => void;
    handlePrevious?: () => void;
}

const Modal: React.FunctionComponent<ModalProps> = (props) => {
    const { modalTitle = "", children, isOpen, isSave = false, isSingularButton = true, handleClose, handleNext = () => { }, handlePrevious = () => { } } = props;

    return (
        <>
            {isOpen ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                {modalTitle && <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        {modalTitle}
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => handleClose()}
                                    >
                                        <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            X
                                        </span>
                                    </button>
                                </div>}
                                {/*body*/}
                                <div className={`${styles.modal__content} relative p-6 flex-auto`}>
                                    {children}
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b">
                                    {isSingularButton ?
                                        <button
                                            className="bg-sky-500 text-white active:bg-sky-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => handleClose()}
                                        >
                                            View Dashboard
                                        </button>
                                        : <>
                                            <button
                                                className="text-black border border-neutral-300 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => handlePrevious()}
                                            >
                                                Back
                                            </button>
                                            <button
                                                className="bg-sky-500 text-white active:bg-sky-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => handleNext()}
                                            >
                                                {isSave ? "Save Changes" : "Next"}
                                            </button>
                                        </>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}

export default Modal;