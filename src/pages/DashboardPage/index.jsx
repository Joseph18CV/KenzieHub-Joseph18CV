import { Header } from "../../components/Header";
import { StyledDashboard } from "./styleDashboard";
import { useAuth } from "../../contexts/UserContext/UserContenxt";
import { useTech } from "../../contexts/TechContext/TechContext";
import { ModalAddTech } from "../../components/ModalAddTech";
import { ModalDeleteTech } from "../../components/ModalDeleteTech";
import { useState } from "react";
import Trash from "../../assets/trash.svg"

function DashboardPage () {

    const [techData, setTechData] = useState({})

    const {user} = useAuth()
    const {modalPostOpening, setModalPostOpening, tech, setModalDeleteOpening, modalDeleteOpening} = useTech()

    return (
        <StyledDashboard>
            <Header/>
            {modalPostOpening === true ? <ModalAddTech/> : ""}
            {modalDeleteOpening && <ModalDeleteTech techData={techData}/>}
            <div className="profile-info">
                <div className="name-and-module">
                    <p>Olá, {user.name}</p>
                    <span>{user.course_module}</span>
                </div>
            </div>
            <div className="div-techs">
              <div className="title-and-button">
                <h3>Tecnologias</h3>
                <button onClick={() => setModalPostOpening(true)} type="button">+</button>
              </div>
            </div>
            <div className="ul-techs">
              <ul>
                {tech?.map((tech, index) => (
                  <li key={index}>
                      <p>{tech.title}</p>
                      <div className="span-and-button">
                        <span>{tech.status}</span>
                        <img src={Trash} onClick={() => {setModalDeleteOpening(true); setTechData(tech)}}/>
                      </div>
                  </li>
                ))}
              </ul>
            </div>
        </StyledDashboard> 
    )
}

export {
    DashboardPage
}