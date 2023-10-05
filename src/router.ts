import express from "express"
import { getPatientByIdController, postPatientController } from "./controllers/patient"
import { dequeuePatientController, enqueuePatientController } from "./controllers/queue-patient"

export const router = express.Router()

router.get("/patients/:id", getPatientByIdController)
router.post("/patients", postPatientController)

router.post("/patients/queue/:id", enqueuePatientController)
router.post("/patients/dequeue", dequeuePatientController)
