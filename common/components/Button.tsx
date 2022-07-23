import { classNames } from "../scripts/tailwind";


interface ButtonProps {
    onClick: () => void;
    text: string;
    className?: string;
}

const Button = ({ onClick, text, className }: ButtonProps) => {
    return (
        <button onClick={onClick} className={classNames("border border-secondary-normal px-6 py-2 rounded-sm button-animation", className)}> <span id="button-text">{text}</span></button >
    );
}

export default Button;