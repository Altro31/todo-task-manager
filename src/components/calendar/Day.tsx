'use client'

import React, {useCallback} from 'react'
import {useRouter} from "next/navigation";
import {useSelectedDate} from "@/utils/store/use_selected_date";

interface Props {
    date: Date
    day: number
}


export function Day({day}: Props) {

    const router = useRouter()
    const {selectedDate, setSelectedDate} = useSelectedDate()

    const date = selectedDate ?? new Date()

    const new_date = new Date(date)
    new_date.setDate(day)
    const isActive = new Date(new_date).getTime() - new Date(date).getTime() == 0

    const clickHandler = useCallback(() => {
        setSelectedDate(new_date)
        router.replace(`/dashboard/calendar?date=${new_date.getTime()}`)
    }, [])

    return (
        <button disabled={isActive || !day} onClick={clickHandler}
                className={`text-md ${isActive ? 'bg-gray-300' : ''}`}
        >
            {day ? day : null}
        </button>
    )
}