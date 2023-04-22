import React from "react";
import InputBox from "@/components/InputBox";
import TextArea from "@/components/TextArea";

interface ThirdStepProps {
    isFormClear: boolean;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

const ThirdStep: React.FunctionComponent<ThirdStepProps> = (props) => {
    const { isFormClear, onInputChange } = props;

    return <>
        <InputBox name="title" placeholder="Write your title here..." labelText="TITLE" isClear={isFormClear}
            onChange={(e) => {
                onInputChange(e);
            }} />
        <TextArea name="notes" placeholder="Write your notes here..." labelText="NOTES (OPTIONAL)" isClear={isFormClear}
            onChange={(e) => {
                onInputChange(e);
            }} />
    </>;
}

export default ThirdStep;