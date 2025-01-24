import express from 'express'
import supabase from '../config/supabaseConfig.js'

const router = express.Router()

//ruta para registrarse
router.post('/register', async(req, res) => {
  const { email, password } = req.body

  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password
    });

    if (error) {
      return res.status(400).json({message: error.message})
    }

    res.status(201).json({message: 'Usuario registrado existosamente: ', data})
  } catch (err) {
    res.status(500).json({ message: 'Error interno del servidor', error: err.message });
  }
})

//ruta de login

router.post('/login', async(req, res) => {
  const { email, password } = req.body;

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      return res.status(400).json({ message: error.message })
    }

    res.status(200).json({ message: 'Inicio de sesión exitoso ', data})
  } catch (err) {
    res.status(500).json({ message: 'Error interno del servidor', error: err.message})
  }
})

router.post('/logout', async (req, res) => {
  console.log('Petición de logout recibida');
  try {    
    const { error } = await supabase.auth.signOut();

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    res.status(200).json({ message: 'Sesión cerrada exitosamente' });
  } catch (err) {
    res.status(500).json({ message: 'Error interno del servidor', error: err.message });
  }
})

export default router;