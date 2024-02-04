import React, {Suspense} from 'react'
import {ToDoList} from "components/home/ToDoList";
import {Calendar} from "components/calendar/Calendar";

interface Props {
    searchParams: {
        date: string
    }
}

export default async function CalendarPage({searchParams}: Props) {

    const date = searchParams.date ? new Date(parseInt(searchParams.date)) : new Date()


    return (
        <div
            className='h-full w-[85%] mx-auto mt-2 overflow-auto scrollbar-hide lg:border lg:rounded-xl lg:py-3 lg:mt-5 lg:px-8'>
            <h1 className='text-2xl font-semibold my-1'>Calendar</h1>
            <Calendar />
            <Suspense fallback={null}>
                <div className='mt-5 mb-28'>
                    <h2 className='text-xl font-medium sticky top-0 z-10 bg-white/95'>
                        What's on {date.toLocaleDateString()}
                    </h2>
                    <ToDoList filterDate={date}/>
                </div>
            </Suspense>
        </div>
    )
}