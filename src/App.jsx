import './App.css';
import { GlobalStyle } from './styles/GlobalStyle';
import { useState } from "react";
import { RegisterPage } from './pages/RegisterPage';
import { Routes, Route, useNavigate } from "react-router-dom";
import { LoginPage } from './pages/LoginPage';
import { PageNotFound } from './pages/PageNotFound';
import { HomePage } from './pages/HomePage';
import { ProtectedRoutes } from './components/ProtectedRoutes';
import { ToastContainer } from "react-toastify";

function App() {

  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  function userLogout() {
    setUser(null)
    localStorage.removeItem("@TOKEN")
    localStorage.removeItem("@USERID")
    navigate("/")
  }

  return (
    <div className="App">
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<LoginPage setUser={setUser}/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="*" element={<PageNotFound/>}/>
        <Route path="/home" element={<ProtectedRoutes/>}>
          <Route index element={<HomePage userLogout={userLogout}/>}/>
        </Route>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
