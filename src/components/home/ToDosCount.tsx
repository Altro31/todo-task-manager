'use client'

import { getActivesTodos, getToDoVerbosity } from "@/utils/standalones/todo"
import { ToDo } from "@prisma/client"

interface Props {
    count?: string
}

export function ToDosCount({ count }: Props) {

    if (!count) {
        const str = localStorage.getItem('todos')
        const todos: ToDo[] = str? JSON.parse(str) : []
        count = getToDoVerbosity(getActivesTodos(todos))
    }


    return count
}