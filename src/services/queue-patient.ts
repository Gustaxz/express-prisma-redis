import { prisma } from "../config/prisma"
import { Patient } from "../entities/Patient"

const queuePatients: Patient[] = []

async function enqueuePatient(id: number) {
	try {
		const patient = await prisma.patient.findFirst({
			where: {
				id,
			},
		})

		queuePatients.push({
			cpf: patient.cpf,
			name: patient.name,
			createdAt: patient.createdAt,
			id: String(patient.id),
			updatedAt: patient.updatedAt,
		})

		return patient
	} catch (error: any) {
		throw new Error(error.message)
	}
}

async function dequeuePatient() {
	try {
		if (queuePatients.length === 0) {
			throw new Error("Queue is empty")
		}

		const patient = queuePatients.shift()

		return patient
	} catch (error: any) {
		throw new Error(error.message)
	}
}

export { enqueuePatient, dequeuePatient }
