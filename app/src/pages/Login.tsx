import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/Auth";
import { LoginInputs } from "../types/types";

export default function Login() {
  const [inputs, setInputs] = useState<LoginInputs>({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const {login, currentUser} = useContext(AuthContext);
  console.log(currentUser);


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login(inputs)
      await axios.post("http://localhost:8800/api/auth/login", inputs); 
      navigate("/");
      console.log("created user");
    } catch (err) {
      console.log(err)
    }
  };
  return (
    <div className="auth">
      <h1>Login</h1>
      <form  onSubmit={handleSubmit}>
        <input type="text" placeholder="username" name="username"  onChange={handleChange}/>
        <input type="password" placeholder="password" name="password" onChange={handleChange}/>
        <button>Login</button>
        <span>Or <Link to="/register">Create an account</Link></span>
      </form>
    </div>
  )
}