import React from "react"

export enum ButtonSize {
    sm = "small",
    lg = "large"
}

export enum ButtonVariant {
    primary = "orange",
    secondary = "gray"
}

interface ButtonProps {
    dataTestId?: string;
    className?: string;
    children?: React.ReactNode;
    size?: ButtonSize;
    variant?: ButtonVariant;
    isDisabled?: boolean;
    onClick?: () => void;
}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
    const { dataTestId, children, size = ButtonSize.lg, variant = ButtonVariant.primary, isDisabled = false, onClick = () => {/* do-nothing */ } } = props;

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        onClick();
    };

    return <div className="border border-black rounded-l bg-black text-white">
        <button
            className={`${size} ${variant}`}
            data-testid={dataTestId}
            disabled={isDisabled}
            onClick={handleClick}
        >{children}</button>
    </div>
}

export default Button;