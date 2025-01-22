import { useState } from "react";

function useAuth() {
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(null)

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

  return {register, login, loading, error}
}

export default useAuth;