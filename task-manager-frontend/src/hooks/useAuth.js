import { useState } from "react";
import { clearSession } from "../state/userSlice";
import { useDispatch } from "react-redux";

function useAuth() {
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(null)
  const dispatch = useDispatch()  

  const register = async (email, password) =>{
    setLoading(true)    

    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email, password})
      })

      if (!response.ok) {
        const {error} = await response.json()
        throw new Error(error)
      }

      const data = await response.json()
      return data
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false)
    }
  }

  const login = async (email, password) => {
    setLoading(true)
    
    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      })

      if (!response.ok) {
        const { error } = await response.json()
        throw new Error(error)
      }

      const data = await response.json()
      return data
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    setLoading(true);
    setError(null);
  
    try {
      const response = await fetch('http://localhost:3000/api/auth/logout', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
  
      if (!response.ok) {
        const { message } = await response.json();
        throw new Error(message);
      }
  
      dispatch(clearSession())
      localStorage.removeItem('supabaseSession');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {register, login, logout, loading, error}
}

export default useAuth;