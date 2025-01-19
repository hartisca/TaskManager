import express from "express"
import taskRoutes from "./routes/taskRoutes.js"

const app = express()
const PORT = 3000

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Bienvenido al gestor de tareas!")
})

app.use("/api/tasks", taskRoutes)

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})