import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { useState, useContext } from "react";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);

  const { user, setUser } = useContext(UserContext);
  const isLoggedUser = user ? true : false;

  const handleOpenMenu = () => {
    setMenuOpened(!menuOpened);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <header>
      <div className="container flex justify-space-between align-center">
        <Link to="/" className="logo">
        <img src="https://www.solex.biz/wp-content/uploads/2019/02/clinicaalemana-300x143.png" alt="logo_clinica" class="responsiveLogo"></img>
        </Link>
        <div className="flex flex.align-cente">
          <Navigation></Navigation>

          {!isLoggedUser ? (
            <Link to="/login" className="btn btn-login">
              <i className="fa-solid fa-user"></i>
            </Link>
          ) : (
            <button className="btn btn-login" onClick={logout}>
              <i className="fa-solid fa-right-from-bracket"></i>
            </button>
          )}

          <button className="btn btn-menu-responsive" onClick={handleOpenMenu}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
      <div className={menuOpened ? "menu-responsive open" : "menu-responsive"}>
        <Menu></Menu>
      </div>
    </header>
  );
}

export default Header;
