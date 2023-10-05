import { PrismaClient } from "@prisma/client"

// Precisamos usar o Prisma Client para ter acesso ao banco. Ele gera para nós o SQL, além de dar log em algumas operações
export const prisma = new PrismaClient({
	log: ["query", "info", "warn"],
})
