import express from "express"
import { getPatientByIdController, postPatientController } from "./controllers/patient"
import { dequeuePatientController, enqueuePatientController } from "./controllers/queue-patient"

// Deixei um arquivo separado apenas para gerenciar as rotas
export const router = express.Router()

router.get("/patients/:id", getPatientByIdController)
router.post("/patients", postPatientController)

router.post("/patients/queue/:id", enqueuePatientController)
router.post("/patients/dequeue", dequeuePatientController)
