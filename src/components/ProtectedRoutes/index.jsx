import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function ProtectedRoutes () {
    const navigate = useNavigate()

    useEffect(() => {
        if(!localStorage.getItem("@TOKEN")){
            navigate("/")
        }else {
            
        }
    }, [])
    return (
        <>
            <Outlet/>
        </>
    )
}

export {
    ProtectedRoutes
}