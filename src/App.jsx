import './App.css';
import { GlobalStyle } from './styles/GlobalStyle'; 
import { RegisterPage } from './pages/RegisterPage';
import { Routes, Route } from "react-router-dom";
import { LoginPage } from './pages/LoginPage';
import { PageNotFound } from './pages/PageNotFound';
import { DashboardPage } from './pages/DashboardPage';
import { ProtectedRoutes } from './components/ProtectedRoutes';
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <div className="App">
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="*" element={<PageNotFound/>}/>
        <Route path="/dashboard" element={<ProtectedRoutes/>}>
          <Route index element={<DashboardPage/>}/>
        </Route>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
