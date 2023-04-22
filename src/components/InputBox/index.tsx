import React, { useState, useEffect } from "react";

interface InputProps {
    id?: string;
    name: string;
    placeholder?: string;
    labelText: string;
    isClear: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBox: React.FunctionComponent<InputProps> = (props) => {
    const { id = "inputbox", name, placeholder = "", labelText, isClear, onChange } = props;

    const [inputValue, setInput] = useState<string>("");

    useEffect(() => {
        if (isClear) {
            setInput("");
        }
    }, [isClear]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value as string);
        onChange(e);
    }

    return <div className="flex flex-col mb-9">
        <label id={id} className="text-xs uppercase font-bold">{labelText}</label>
        <input name={name} id={id} className="px-5 py-2 border border-neutral-300 border-solid border-1 focus:border-black focus-visible:outline-none" placeholder={placeholder} value={inputValue} onChange={handleChange} />
    </div>
}

export default InputBox;