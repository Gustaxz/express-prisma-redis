import { createPatient, getPatientById } from "../services/patient"
import type { Request, Response } from "express"

export async function getPatientByIdController(req: Request, res: Response) {
	const patient = await getPatientById(Number(req.params.id))

	if (!patient) {
		return res.status(404).send({ message: "Patient not found" })
	}

	return res.status(200).send(patient)
}

export async function postPatientController(req: Request, res: Response) {
	const patient = await createPatient(req.body)

	return res.status(201).send(patient)
}
