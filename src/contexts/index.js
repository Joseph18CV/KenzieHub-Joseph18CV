import { TechProvider } from "./TechContext/TechContext";
import { UserProvider } from "./UserContext/UserContenxt";

function Contexts ({children}) {
    return (
        <UserProvider>
            <TechProvider>
                {children}
            </TechProvider>
        </UserProvider>
    )
}

export {
    Contexts
}