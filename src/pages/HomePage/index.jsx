import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { StyledHome } from "./styleHome";
import { api } from "../../services/api";  

function HomePage ({userLogout}) {

    const localS = (localStorage.getItem("@USERID"))

    const [userID, setUserID] = useState("")

    useEffect(() => {
        async function getProducts() {
          try {
            const response = await api.get(`users/${localS}`)
            setUserID(response.data)
          } catch (error) {
            console.error(error)
          }
        }
        getProducts();
      }, [])

    return (
        <StyledHome>
            <Header userLogout={userLogout}/>
            <div className="profile-info">
                <div className="name-and-module">
                    <p>Olá, {userID.name}</p>
                    <span>{userID.course_module}</span>
                </div>
            </div>
        </StyledHome>
    )
}

export {
    HomePage
}