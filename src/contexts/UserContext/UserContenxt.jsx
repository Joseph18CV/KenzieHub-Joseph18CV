import { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { useLocation, useNavigate } from "react-router-dom";

const UserContext = createContext({})

function UserProvider ({children}) {

    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const location = useLocation()

    useEffect(() => {
        async function loadUser() {
            const token = localStorage.getItem("@TOKEN")
            api.defaults.headers.common.authorization = `Bearer ${token}` 
            if(!token) {
                setLoading(false)
                return;
            }

            try {
                const { data } = await api.get("profile")

                setUser(data)
            } catch (error) {
                console.error(error)
            }finally{
                setLoading(false)
            }
        }

        loadUser()
    }, [])

    async function login (data) {
        try {
            const response = await api.post("sessions", data)
            toast.success("Logado com sucesso!")
            setUser(response.data.user)
            window.localStorage.clear()
            window.localStorage.setItem("@TOKEN", response.data.token)
            window.localStorage.setItem("@USERID", response.data.user.id)
            api.defaults.headers.common.authorization = `Bearer ${response.data.token}` 
            const toNavigate = location.state?.from?.pathname || "/dashboard"
            setTimeout(function() {
                (navigate(toNavigate, {replace: true}))
            }, 6000)
        } catch (error) {
            toast.error("Ops! Algo deu errado")
            console.error(error)
        }
    }

    function logout () {
        setUser(null)
        localStorage.removeItem("@TOKEN")
        localStorage.removeItem("@USERID")
        navigate("/")
    }

    async function registerSubmit (data) {
        try {
            const response = await api.post("users", data)
            toast.success("Conta criada com sucesso!")
            setTimeout(function() {
                (navigate("/"))
            }, 6000)
            return response.data
        } catch (error) {
            toast.error("Ops! Algo deu errado")
            console.error(error)
        }
    }

    return (
        <UserContext.Provider value={{setUser, user, login, logout, registerSubmit, loading}}>
            {children}
        </UserContext.Provider>
    )
}


const useAuth = () => useContext(UserContext)

export {
    UserContext,
    UserProvider,
    useAuth
}