import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if (login(user, pass)) {
      navigate("/");
    } else {
      alert("Credenciales inválidas");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Iniciar sesión</h2>
      <input type="text" value={user} onChange={e => setUser(e.target.value)} placeholder="Usuario" className="w-full p-2 border mb-2" />
      <input type="password" value={pass} onChange={e => setPass(e.target.value)} placeholder="Contraseña" className="w-full p-2 border mb-2" />
      <button type="submit" className="bg-indigo-600 text-white w-full p-2">Entrar</button>
    </form>
  );
};

export default Login;
