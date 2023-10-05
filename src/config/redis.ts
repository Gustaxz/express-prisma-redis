import Redis from "ioredis"

// Essa variável será usada para acessar o Redis
export let redis: Redis = null

// Essa função deve ser chamada antes de iniciar o servidor
export async function connectRedis() {
	return new Promise((resolve, reject) => {
		redis = new Redis()
		redis.on("connect", () => {
			console.log("Redis is connected")
			resolve(redis)
		})
		redis.on("error", (error) => {
			console.log("Redis connection error")
			reject(error)
		})
	})
}
