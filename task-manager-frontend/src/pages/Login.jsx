import { useState } from "react";
import Card from "../components/Card";
import Button from "../components/ui/Button";

function Login() {
  const [ registered, setRegistered ] = useState(false)
  
  return (
    <>
     { !registered ? (<Card title={"Login"}>
        <form>               
          <input type="email" placeholder="Email" />                  
          <input type="password" placeholder="Password" />
          <a onClick={() => setRegistered(true)}>Create an account</a>    
          <Button type="submit" text={"Submit"} onClick={""}>Login</Button>
        </form>
      </ Card>) : (
        <Card title={"Register"}>
        <form>               
          <input type="email" placeholder="Email" />                  
          <input type="password" placeholder="Password" />
          <a onClick={() => setRegistered(!registered)}>Log in</a>    
          <Button type="submit" text={"Submit"} onClick={""}>Login</Button>
        </form>
      </ Card>)
      }
    </>
    
  );
}

export default Login;