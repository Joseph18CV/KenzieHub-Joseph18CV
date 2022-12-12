import { useContext, useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { api } from "../../services/api";
import { useAuth } from "../UserContext/UserContenxt";

const TechContext = createContext({})

function TechProvider ({children}) {

    const {user} = useAuth()
    const [modalPostOpening, setModalPostOpening] = useState(false)
    const [modalDeleteOpening, setModalDeleteOpening] = useState(false)
    const [tech, setTech] = useState(user?.techs)

    async function addTech (data) {
        try {
           const response = await api.post("users/techs", data)
            setTech([...tech, response.data])
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        setTech(user?.techs)
    }, [user])
    
    async function removeTech (data) {
        try {
            await api.delete(`users/techs/${data.id}`)
            const newTechList = tech.filter((item) => item.id !== data.id)
            setTech(newTechList)
            setModalDeleteOpening(false)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <TechContext.Provider value={{
        removeTech,
        tech,
        addTech, 
        modalPostOpening, 
        setModalPostOpening, 
        modalDeleteOpening, 
        setModalDeleteOpening}}>
            {children}
        </TechContext.Provider>
    )
}

const useTech = () => useContext(TechContext)

export {
    TechContext,
    TechProvider,
    useTech
}