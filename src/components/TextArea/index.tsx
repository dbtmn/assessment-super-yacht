import React, { useState, useEffect } from "react";

interface TextAreaProps {
    id?: string;
    labelText: string;
    isClear: boolean;
    onChange: (value: string) => void;
}

const TextArea: React.FunctionComponent<TextAreaProps> = (props) => {
    const { id = "texratea", labelText, isClear, onChange } = props;

    const [inputValue, setInput] = useState<string>("");

    useEffect(() => {
        if (isClear) {
            setInput("");
        }
    }, [isClear]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInput(e.target.value as string);
        onChange(e.target.value as string);
    }

    return <div className="flex flex-col">
        <label id={id}>{labelText}</label>
        <textarea id={id} className="border border-black border-1" value={inputValue} onChange={handleChange} />
    </div>
}

export default TextArea;