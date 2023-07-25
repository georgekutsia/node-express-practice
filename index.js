const express = require("express")
const dotenv = require("dotenv").config();
const upgraders = require("./src/api/routes/upgraders.routes")

const app = express()

const PORT = process.env.PORT || 4101



app.use(express.json())

app.use("/up", upgraders)

app.listen(PORT,()=> console.log(`Escuchando en el puerto ${PORT}`))