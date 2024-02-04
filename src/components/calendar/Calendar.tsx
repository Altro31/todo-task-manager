'use client'

import React from 'react'
import {CalendarHeader} from "@/components/calendar/CalendarHeader";
import {Day} from "@/components/calendar/Day";
import {DaysOfWeek} from "@/components/calendar/DaysOfWeek";
import {useCalendarBuilder} from "@/utils/hooks/calendar/use_calendar_builder";

interface Props {

}

export function Calendar({}: Props) {

    const {date, list} = useCalendarBuilder()

    return (
        <div className='lg:w-96'>
            <CalendarHeader date={date}/>
            <div className='grid grid-cols-7 mt-3 gap-2'>
                <DaysOfWeek/>
                {list.map((day, i) => (
                    <Day date={date} day={day} key={date.getTime() + i}/>
                ))}
            </div>
        </div>
    )
}