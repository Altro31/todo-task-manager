import { ToDo } from "@prisma/client"

export function getToDoVerbosity(count: number) {

    if (count == 0) return 'nothing'

    if (count == 1) return 'only 1 thing'

    return `${count} things`
}

export function getActivesTodos(todos: ToDo[]){
    return todos.reduce((prev, curr) => {
        return !curr.done ? prev + 1 : prev
    }, 0)
}