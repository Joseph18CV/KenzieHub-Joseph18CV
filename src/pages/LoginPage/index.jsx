import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { LoginSchema } from "./LoginSchema";
import { Link, useNavigate } from "react-router-dom";
import { StyledLogin } from "./styleLogin";
import { useAuth } from "../../contexts/UserContext/UserContenxt";
import { useEffect, useState } from "react";

function LoginPage () {

    const {login, loading} = useAuth()
    const navigate = useNavigate()
    const [loadingNavigate, setLoadingNavigate] = useState(true)

    const { register, handleSubmit, formState:{errors} } = useForm({
        resolver: yupResolver(LoginSchema)
    })

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN")

        if(token) {
            navigate("/dashboard", {replace: true})
        }
        setLoadingNavigate(false)
    }, [navigate])

    if(loadingNavigate) {
        return null
    }

    return (
        <StyledLogin>
            <div className="container">
                <div className="logo">
                    <h1>Kenzie Hub</h1>
                </div>
                <form noValidate autoComplete="off" onSubmit={handleSubmit(login)}>
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