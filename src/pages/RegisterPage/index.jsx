import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { StyledRegister } from "./styleRegister";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "./RegisterSchema";
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function RegisterPage () {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState:{errors}, reset } = useForm({
        resolver: yupResolver(RegisterSchema)
    })

    async function submitRegister (data) {
        try {
            const response = await api.post("users", data)
            setLoading(true)
            toast.success("Conta criada com sucesso!")
            setTimeout(function() {
                reset()
                (navigate("/"))
            }, 6000)
            return response.data
        } catch (error) {
            toast.error("Ops! Algo deu errado")
            console.error(error)
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }

    return (
        <StyledRegister>
            <div className="container">
                <div className="div-header">
                    <h1>Kenzie Hub</h1>
                    <Link to="/">Voltar</Link>
                </div>
                <form noValidate autoComplete="off" onSubmit={handleSubmit(submitRegister)}>
                    <h3>Crie sua conta</h3>
                    <span>Rápido e grátis, vamos nessa</span>
                    <Input type="text" id="name" label="Nome" placeholder="Digite aqui seu nome" register={register} name={"name"}/>
                    {errors.name?.message && <p>{errors.name.message}</p>}
                    <Input type="email" id="email" label="Email" placeholder="Digite aqui seu email" register={register} name={"email"}/>
                    {errors.email?.message && <p>{errors.email.message}</p>}
                    <Input type="password" id="password" label="Senha" placeholder="Digite aqui sua senha" register={register} name={"password"}/>
                    {errors.password?.message && <p>{errors.password.message}</p>}
                    <Input type="password" id="passwordConfirm" label="Confirmar Senha" placeholder="Digite novamente sua senha" register={register} name={"passwordConfirm"}/>
                    {errors.passwordConfirm?.message && <p>{errors.passwordConfirm.message}</p>}
                    <Input type="text" id="bio" label="Bio" placeholder="Fale sobre você" register={register} name={"bio"}/>
                    {errors.bio?.message && <p>{errors.bio.message}</p>}
                    <Input type="number" id="contact" label="Contato" placeholder="Opção de contato" register={register} name={"contact"}/>
                    {errors.contact?.message && <p>{errors.contact.message}</p>}
                    <label htmlFor="course_module">Selecionar Módulo</label>
                    <select id="course_module" {...register("course_module")}>
                        <option value="">Selecionar Módulo</option>
                        <option value="módulo 1">Módulo 1</option>
                        <option value="módulo 2">Módulo 2</option>
                        <option value="módulo 3">Módulo 3</option>
                        <option value="módulo 4">Módulo 4</option>
                    </select>
                    {errors.course_module?.message && <p>{errors.course_module.message}</p>}
                    <Button type="submit" value="Cadastrar" disabled={loading}/>
                </form>
            </div>
        </StyledRegister>
    )
}

export {
    RegisterPage
}