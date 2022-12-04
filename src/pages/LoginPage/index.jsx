import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { LoginSchema } from "./LoginSchema";
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate, Link } from "react-router-dom";
import { StyledLogin } from "./styleLogin";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function LoginPage ({setUser}) {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState:{errors}, reset } = useForm({
        resolver: yupResolver(LoginSchema)
    })

    async function submitLogin (data) {
        try {
            const response = await api.post("sessions", data)
            setLoading(true)
            toast.success("Logado com sucesso!")
            window.localStorage.clear()
            window.localStorage.setItem("@TOKEN", response.data.token)
            window.localStorage.setItem("@USER", JSON.stringify(response.data.user))
            setTimeout(function() {
                reset()
                (navigate("/home"))
            }, 6000)
            setUser(response.data)
        } catch (error) {
            reset()
            toast.error("Ops! Algo deu errado")
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <StyledLogin>
            <div className="container">
                <div className="logo">
                    <h1>Kenzie Hub</h1>
                </div>
                <form noValidate autoComplete="off" onSubmit={handleSubmit(submitLogin)}>
                    <h3>Login</h3>
                    <Input type="email" id="email" label="Email" placeholder="Digite aqui seu email" register={register} name={"email"}/>
                    {errors.email?.message && <p>{errors.email.message}</p>}
                    <Input type="password" id="password" label="Senha" placeholder="Digite aqui sua senha" register={register} name={"password"}/>
                    {errors.password?.message && <p>{errors.password.message}</p>}
                    <Button type="submit" value="Entrar" disabled={loading}/>
                    <span>Ainda não possui uma conta?</span>
                    <Link to="/register">Cadastre-se</Link>
                </form>
            </div>
        </StyledLogin>
    )
}   

export {
    LoginPage
}