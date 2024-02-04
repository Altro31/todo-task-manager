import React from 'react'
import {ToDoList} from "@/components/home/ToDoList";
import {ToDoServices} from '@/api/services';

interface Props {

}

export async function Aside({}: Props) {

    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)

    const todos = await ToDoServices.todos({user_email: 'albe020531@outlook.com', date: tomorrow})
    return (
        <aside className='hidden lg:block mt-5 ml-5 border px-8 py-3 rounded-xl basis-2/5'>
            <h2 className='text-xl font-medium sticky top-0 bg-white/95'>
                What's on Tomorrow
            </h2>
            <ToDoList showCompleted={'false'} ulClassName='mb-0' filterDate={tomorrow}/>
        </aside>
    )
}