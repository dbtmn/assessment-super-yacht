import React, { useState } from "react";
import InputBox from "@/components/InputBox";
import TextArea from "@/components/TextArea";

interface ThirdStepProps {
    onInputChange: (data: ThirdStepData) => void;
}

export interface ThirdStepData {
    title: string;
    notes?: string;
}

const ThirdStep: React.FunctionComponent<ThirdStepProps> = (props) => {
    const { onInputChange } = props;
    const data: ThirdStepData = {
        title: "",
        notes: ""
    };

    const handleInputChange = () => {
        onInputChange(data);
    }

    return <>
        <InputBox labelText="TITLE" isClear={false}
            onChange={(value) => {
                data.title = value;
                handleInputChange();
            }} />
        <TextArea labelText="NOTES (OPTIONAL)" isClear={false}
            onChange={(value) => {
                data.notes = value;
                handleInputChange();
            }} />
    </>;
}

export default ThirdStep;