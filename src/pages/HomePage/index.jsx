import { Header } from "../../components/Header";
import { StyledHome } from "./styleHome";

function HomePage ({userLogout}) {

    const localS = JSON.parse(localStorage.getItem("@USER"))

    return (
        <StyledHome>
            <Header userLogout={userLogout}/>
            <div className="profile-info">
                <div className="name-and-module">
                    <p>Olá, {localS.name}</p>
                    <span>{localS.course_module}</span>
                </div>
            </div>
        </StyledHome>
    )
}

export {
    HomePage
}