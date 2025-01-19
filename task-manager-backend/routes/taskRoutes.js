import express from "express"
const router = express.Router()

// List de tareas
router.get("/", (req, res) => {
    res.send("Lista de tareas")
})

// Post de tareas
router.post("/", (req, res) => {
    const task = req.body
    res.send(`Nueva tarea creada: ${JSON.stringify(task)}`)
})

// Update tarea
router.put("/:id", (req, res) => {
    const { id } = req.params
    const task = req.body
    res.send(`Tarea actualizada con ID ${id}: ${JSON.stringify(task)}`)
})

// Eliminar una tarea
router.delete("/:id", (req, res) => {
    const { id } = req.params
    res.send(`Tarea eliminada con ID ${id}`)
})

export default router