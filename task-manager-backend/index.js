import express from "express"
import taskRoutes from "./routes/taskRoutes.js"
import loginRegisterRoutes from "./routes/loginRegisterRoutes.js"
import cors from 'cors'

const app = express()
const PORT = process.env.PORT

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));

//middleware para parsear JSON
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Bienvenido al gestor de tareas!")    
})

//rutas de CRUD tasks
app.use("/api/tasks", taskRoutes)

//Rutas de autenticación
app.use("/api/auth", loginRegisterRoutes)

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)    
})