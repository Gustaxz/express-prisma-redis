import { prisma } from "../config/prisma"
import { Patient } from "../entities/Patient"

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

export { createPatient, getPatientById }
