import { prisma } from "../config/prisma"
import { Patient } from "../entities/Patient"

const queuePatients: Patient[] = []

async function createPatient(patient: Patient) {
	try {
		const newPatient = await prisma.patient.create({
			data: {
				cpf: patient.cpf,
				name: patient.name,
			},
		})

		return newPatient
	} catch (error: any) {
		throw new Error(error.message)
	}
}

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

async function getPatientById(id: number) {
	try {
		const patient = await prisma.patient.findFirst({
			where: {
				id,
			},
		})

		return patient
	} catch (error: any) {
		throw new Error(error.message)
	}
}

export { createPatient, getPatientById, enqueuePatient, dequeuePatient }
