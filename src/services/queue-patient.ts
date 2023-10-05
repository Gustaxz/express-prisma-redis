import { redis } from "../config/redis"
import { prisma } from "../config/prisma"

async function enqueuePatient(id: number) {
	try {
		const patient = await prisma.patient.findFirst({
			where: {
				id,
			},
		})

		await redis.lpush("queue-patients", JSON.stringify(patient))

		return patient
	} catch (error: any) {
		throw new Error(error.message)
	}
}

async function dequeuePatient() {
	try {
		const listSize = await redis.llen("queue-patients")
		if (listSize === 0) {
			throw new Error("Queue is empty")
		}

		const patient = await redis.lpop("queue-patients")

		return patient
	} catch (error: any) {
		throw new Error(error.message)
	}
}

export { enqueuePatient, dequeuePatient }
