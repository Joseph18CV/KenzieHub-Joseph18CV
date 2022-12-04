import { StyledButton } from "./styleButton"

function Button ({type, value}) {
    return (
        <StyledButton type={type}>{value}</StyledButton>
    )
}

export {
    Button
}