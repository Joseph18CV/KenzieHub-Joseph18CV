import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/UserContext/UserContenxt";

function ProtectedRoutes () {

    const {user, loading} = useAuth()
    const location = useLocation()

    if(loading) {
        return null;
    }

    return user ? <Outlet/> : <Navigate to="/" state={{from: location}}/>
}

export {
    ProtectedRoutes
}