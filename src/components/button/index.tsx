import './style.css';

interface ButtonProps {
    text: string;
    onClick: () => void;
    [key: string]: unknown;
}

function Button({ text, onClick, ...rest } : ButtonProps) {
    return (
        <button className="btn" onClick={onClick}  {...rest}>
            {text}
        </button>
    );
}

export default Button;
