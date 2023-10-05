import express from "express"
import cors from "cors"
import { router } from "./router"

require("dotenv").config()

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(router)
app.use(cors())

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
