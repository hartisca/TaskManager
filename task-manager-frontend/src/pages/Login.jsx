import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { setSession } from '../features/userSlice'
import Card from "../components/Card";
import Button from "../components/ui/Button";
import useAuth from "../hooks/useAuth"
import { useDispatch } from 'react-redux'

function Login() {
  const [registered, setRegistered] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const { login, register, error } = useAuth();  

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(loginEmail)) {
      alert("Please enter a valid email address.");
      return;
    }

    const data = await login(loginEmail, loginPassword);
    if (data) {
      console.log("Login is correct", data);
      const { session, user } = data.data;
      if (session && user) {
        localStorage.setItem('supabaseSession', JSON.stringify({ session, user }));

        dispatch(setSession({ session, user }));
        navigate("/");
      } else {
        console.error("Session or user data missing:", data);
      }
    } else {
      console.error("Login failed:", error);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validateEmail(registerEmail)) {
      alert("Please enter a valid email address.");
      return;
    }

    const data = await register(registerEmail, registerPassword);
    if (data) {
      console.log("Registration successful:", data);
      setRegistered(false);
    } else {
      console.error("Registration failed:", error);
    }
  };

  return (
    <>
    {!registered ? 
      (<Card title={"Login"}>
        <form onSubmit={handleLogin}>               
          <input
            type="email"
            placeholder="Email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            required
          />               
          <input
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            required
          />
          <a onClick={() => setRegistered(true)}>Create an account</a>
          <Button type="submit" text={"Submit"}>Login</Button>
        </form>
      </ Card>) : (
      <Card title={"Register"}>
        <form onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="Email"
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
            required
          />
          <a onClick={() => setRegistered(!registered)}>Log in</a>
          <Button type="submit" text={"Submit"}>Register</Button>
        </form>
      </ Card>)}
    </>    
  );
}

export default Login;