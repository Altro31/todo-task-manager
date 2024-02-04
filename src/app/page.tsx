import { Avatar } from "components/custom/nextui/Avatar";
import { DeciderButtonGroup } from "components/home/DeciderButtonGroup";
import { ToDoList } from "components/home/ToDoList";
import { UserServices, ToDoServices } from "@/api/services"
import { getDayTimeGreeting } from "@/utils/standalones/date";
import Image from 'next/image'
import { ToDosCount } from "components/home/ToDosCount";
import { getActivesTodos, getToDoVerbosity } from "@/utils/standalones/todo";

interface Props {
    searchParams: {
        completed: string
    }
}


export default async function HomePage({ searchParams }: Props) {

    const user = await UserServices.getCurrentUser()

    let todos
    let actives
    let todo_count_str
    const greeting = getDayTimeGreeting()
    const showCompleted = searchParams.completed ?? 'false'

    if (user) {
        todos = await ToDoServices.todos({ user_email: user.email, date: new Date() })
        
        actives = getActivesTodos(todos)
        
        todo_count_str = getToDoVerbosity(actives)
    }

    return (
        <div className='w-[85%] mx-auto mt-2 lg:mt-5 lg:flex lg:flex-col lg:gap-3'>
            <section className='lg:flex lg:border lg:rounded-xl lg:p-3 lg:px-10 w-full justify-between'>
                <div>
                    <h1 className='text-2xl font-semibold my-1'>
                        {greeting}, {user?.name}
                    </h1>
                    <h2 className='text-medium font-semibold text-gray-700 my-1'>
                        {`We have ${<ToDosCount count={todo_count_str} />} on the list today`}
                    </h2>
                </div>
                <Avatar src={user?.photo ?? undefined} alt={user?.name} size={"lg"}
                    className='hidden lg:block self-center'
                />
            </section>
            <section className='h-full lg:rounded-xl lg:border lg:p-3 lg:px-10 lg:max-h-full'>
                <div className='flex flex-col h-full lg:w-4/6 lg:mx-auto'>
                    <DeciderButtonGroup />
                    <ToDoList showCompleted={showCompleted} filterDate={new Date()} />
                </div>
            </section>
        </div>
    )
}