interface ButtonProps {
    text: string;
    onClick: () => void;
    [key: string]: unknown;
}

function Button({ text, onClick, ...rest } : ButtonProps) {
    return (
        <button onClick={onClick} {...rest}>
            {text}
        </button>
    );
}

export default Button;
