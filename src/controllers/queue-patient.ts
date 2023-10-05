import { dequeuePatient, enqueuePatient } from "../services/queue-patient"
import type { Request, Response } from "express"

export async function enqueuePatientController(req: Request, res: Response) {
	const patient = await enqueuePatient(Number(req.params.id))

	return res.status(201).send(patient)
}

export async function dequeuePatientController(_req: Request, res: Response) {
	try {
		const patient = await dequeuePatient()

		return res.status(200).send(patient)
	} catch (err: any) {
		return res.status(400).send({ message: err.message })
	}
}
