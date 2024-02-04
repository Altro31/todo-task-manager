import {PrismaClient} from "@prisma/client";


class PrismaContainer {
    private static prisma: PrismaClient

    static getInstance() {
        if (!this.prisma) {
            this.prisma = new PrismaClient()
            this.prisma.$connect()
        }

        return this.prisma
    }
}

export const prisma = PrismaContainer.getInstance()