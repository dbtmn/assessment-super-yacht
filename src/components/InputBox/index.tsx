import React, { useState, useEffect } from "react";

interface InputProps {
    id?: string;
    placeholder?: string;
    labelText: string;
    isClear: boolean;
    onChange: (value: string) => void;
}

const InputBox: React.FunctionComponent<InputProps> = (props) => {
    const { id = "inputbox", placeholder = "", labelText, isClear, onChange } = props;

    const [inputValue, setInput] = useState<string>("");

    useEffect(() => {
        if (isClear) {
            setInput("");
        }
    }, [isClear]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value as string);
        onChange(e.target.value as string);
    }

    return <div className="flex flex-col">
        <label id={id}>{labelText}</label>
        <input id={id} className="border border-black border-1" placeholder={placeholder} value={inputValue} onChange={handleChange} />
    </div>
}

export default InputBox;