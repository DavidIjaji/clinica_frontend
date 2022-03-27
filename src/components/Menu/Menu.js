import "./Menu.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <ul className="menu flex">
      <li>
        <Link to="inicio">Inicio</Link>
      </li>
      <li>
        <Link to="cita">Pide tu cita</Link>
      </li>
      <li>
        <Link to="inicio">Iniciar sesion</Link>
      </li>
      <li>
        <Link to="registro">Registrate</Link>
      </li>
    </ul>
  );
}

export default Menu;
