import "./Login.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [password1, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const login = async (email, password) => {
    return Promise.resolve({
      name: "Andrés",
      token: "abc123",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    // Validar los campos, que no sean nulos o vacios y que sea un email válido, etc...

    console.log("email", email);
    console.log("password", password);
    //console.log("password1", password1);
    login(email, password)
      .then((user) => {
        // login del usuario en local
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        navigate("/");
      })
      .catch((err) => {
        // mostraria al usuario que el login falló
      });
      
  };

  return (
    <div className="form-login">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="error">{}</span>
        </div>
        <div className="form-control">
          <label htmlFor="password1">Confirmar Contraseña</label>
          <input
            type="password"
            id="password1"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="error">{}</span>
        </div>
        
        <button type="submit" className="btn btn-dark">
          Registarse
        </button>
      </form>
    </div>
  );
}

export default Login;
