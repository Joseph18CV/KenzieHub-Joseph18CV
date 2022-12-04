import { StyledHeader } from "./styleHeader";

function Header ({userLogout}) {
    return (
        <StyledHeader>
            <div className="header-container">
                <h1>Kenzie Hub</h1>
                <button onClick={() => userLogout()}>Sair</button>
            </div>
        </StyledHeader>
    )
}

export {
    Header
}