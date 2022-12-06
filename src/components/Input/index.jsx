import { StyledInput } from "./styleInput";

function Input ({id, label, type, register, placeholder, name}) {
    return (
        <StyledInput>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} placeholder={placeholder} {...register(name)}/>
        </StyledInput>

    )
}

export {
    Input

}