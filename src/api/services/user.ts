'use server'

import { cookies } from "next/headers";
import { prisma } from "../prisma_client/PrismaClient"
import { ToDo } from "@prisma/client";
import { todos } from "./todo";

interface getCurrentUserArgs {
    countAllToDos?: boolean
}
export async function getCurrentUser(args?: getCurrentUserArgs) {

    let user = null
    try {
        user = await getCurrentUserFromPrisma(args)
    } catch (e) {
    }

    if (user) {
        // @ts-ignore
        if (!user._count) user._count = { todos: 0 }
    }

    return user
}

async function getCurrentUserFromPrisma(args?: getCurrentUserArgs) {
    return prisma.user.findUnique({
        where: { email: 'albe020531@outlook.com' },
        include: {
            ...(args?.countAllToDos ? {
                _count: {
                    select: {
                        todos: true
                    }
                }
            } : {})
        }
    })
}
