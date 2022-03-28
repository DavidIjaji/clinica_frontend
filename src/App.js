import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Template from "./components/template/Template";
import Login from "./components/Login/Login";
import { UserContext } from "./contexts/UserContext";
import { useState } from "react";
import Inicio from "./components/Inicio/Inicio";
import _Sign from "./components/Sing/Sing";
import PideCita from "./components/PideCita/PideCita";
function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route element={<Template />}>
            <Route path="/" element={<Navigate to="/inicio" replace />} />
            <Route path="inicio" element={<Inicio></Inicio>} />
            <Route path="login" element={<Login></Login>} />       
            <Route path="registro" element={<Login></Login>} />
            <Route path="inicio_sesion" element={<_Sign></_Sign>} />
            <Route path="pide_cita" element={<PideCita></PideCita>} />
          </Route>
          <Route path="*" element={<Navigate to="/error" replace />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
export default App;
