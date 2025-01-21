import Card from "../components/Card";

function Login() {
  return ( 
    <Card title={"Login"}>
      <form>
        <label>
          Email:
          <input type="email" placeholder="Enter your email" />
        </label>
        <label>
          Password:
          <input type="password" placeholder="Enter your password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </ Card>
  );
}

export default Login;