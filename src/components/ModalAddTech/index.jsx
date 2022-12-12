import { useForm } from "react-hook-form"
import { useTech } from "../../contexts/TechContext/TechContext"
import { useAuth } from "../../contexts/UserContext/UserContenxt"
import { StyledModalAddTech, StyledModalBackgroundAddTech } from "./styleModalAddTech"

function ModalAddTech () {

    const {setModalPostOpening, addTech} = useTech()
    const {loading} = useAuth()

    const { register, handleSubmit } = useForm({})

    function handleCloseAndSubmit (data) {
        addTech(data)
        setModalPostOpening(false)
    }

    return (
        <StyledModalBackgroundAddTech>
            <StyledModalAddTech>
                <div className="header-modal">
                    <h2>Cadastrar Tecnologia</h2>
                    <button onClick={() => setModalPostOpening(false)}>X</button>
                </div>
                <form noValidate autoComplete="off" onSubmit={handleSubmit(handleCloseAndSubmit)}>
                <label htmlFor="title">Nome</label>
                <input type="text" id="title" placeholder="Digite a tecnologia" {...register("title")}/>
                <label htmlFor="status">Selecionar Status</label>
                    <select id="status" {...register("status")}>
                        <option value="">Selecionar Status</option>
                        <option value="iniciante">iniciante</option>
                        <option value="intermediario">intermediário</option>
                        <option value="avançado">avançado</option>
                    </select>
                    <button type="submit" disabled={loading}>Cadastrar</button>
                </form>
            </StyledModalAddTech>
        </StyledModalBackgroundAddTech>
    )
}

export {
    ModalAddTech
}