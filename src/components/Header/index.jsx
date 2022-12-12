import { useAuth } from "../../contexts/UserContext/UserContenxt";
import { StyledHeader } from "./styleHeader";

function Header () {

    const {logout} = useAuth()

    return (
        <StyledHeader>
            <div className="header-container">
                <h1>Kenzie Hub</h1>
                <button onClick={() => logout()}>Sair</button>
            </div>
        </StyledHeader>
    )
}

export {
    Header
}