import { useTech } from "../../contexts/TechContext/TechContext"
import { StyledModalDeleteTech, StyledModalBackgroundDeleteTech } from "./styleModalDeleteTech"

function ModalDeleteTech ({techData}) {

    const {setModalDeleteOpening, removeTech} = useTech()
   
    return (
        <StyledModalBackgroundDeleteTech>
            <StyledModalDeleteTech>
                <div className="modal-header">
                    <button onClick={() => setModalDeleteOpening(false)}>X</button>
                </div>
                <div className="content-modal-delete">
                    <p>Deseja mesmo excluir essa tecnologia?</p>
                    <button onClick={() => removeTech(techData)}>Confirmar</button>
                </div>
            </StyledModalDeleteTech>
        </StyledModalBackgroundDeleteTech>
    )
}

export {
    ModalDeleteTech
}