import { StyledInput } from "./Input.style"

interface InputProps {
    type: string;
    id: string;
    name: string;
    onChange: (e: any) => void;
}

export const Input = ({ type, id, name, onChange, ...rest }: InputProps) => {
    return (
        <StyledInput 
            type={type}
            id={id}
            name={name}
            onChange={(e) => onChange(e)}
            {...rest}
        />
    );
};