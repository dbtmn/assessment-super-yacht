import React, { useState } from "react";

interface ToggleProps {
    id: string;
    onChange: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, v: boolean) => void;
}

const Toggle: React.FunctionComponent<ToggleProps> = (props) => {
    const { id, onChange } = props;
    const [toggle, setToggle] = useState<boolean>(true);
    const toggleOffContainerClass = " bg-gray-100";
    const toggleOnContainerClass = " bg-sky-500";
    const toggleClass = " transform translate-x-5";

    return <div
        className={
            "md:w-14 md:h-7 w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-all duration-500" + 
            (toggle ? toggleOnContainerClass : toggleOffContainerClass)
        }
        id={id}

        onClick={(e) => {
            onChange(e, !toggle);
            setToggle(!toggle);
        }}
    >
        <div
            className={
                "bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                (toggle ? toggleClass : null)
            }
        ></div>
    </div>
};

export default Toggle;