import express from "express"
import {
	dequeuePatientController,
	enqueuePatientController,
	getPatientByIdController,
	postPatientController,
} from "./controllers/patient"

export const router = express.Router()

router.get("/patients/:id", getPatientByIdController)
router.post("/patients", postPatientController)

router.post("/patients/queue/:id", enqueuePatientController)
router.post("/patients/dequeue", dequeuePatientController)
