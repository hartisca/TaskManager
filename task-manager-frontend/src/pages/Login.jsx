import { useState } from "react";
import Card from "../components/Card";
import Button from "../components/ui/Button";
import useAuth from "../hooks/useAuth"

function Login() {
  const [registered, setRegistered] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const { login, register, error } = useAuth();

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
      setRegistered(false); // Volver a la vista de login
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