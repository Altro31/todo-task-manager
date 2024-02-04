import {useSearchParams} from "next/navigation";

export function useCalendarBuilder(){

    //Extract search params
    const searchParams = useSearchParams()

    //Extract date params from search params
    const dateTime = parseInt(searchParams.get('date') as string)

    // If dateTime is NaN then date is today, otherwise is the date in dateTime
    const date = !Number.isNaN(dateTime) ? new Date(dateTime) : new Date()

    // Create a copy of date to manipulate it without change the original date
    const new_date = new Date(date)

    //1st day of this month
    new_date.setDate(0)

    //Day of week of the 1st date of this month
    let day_of_week = new_date.getDay()

    //Las day of this month
    new_date.setMonth(new_date.getMonth() + 2, -1)
    const last_day = new_date.getDate() + 1

    //List of 0s of length equals to day_of_week
    let list: number[] = []
    for (let i = 0; i < day_of_week; i++) {
        list[i] = 0
    }

    //Fill the list with numbers from 1 to the last day of the actual month
    for (let i = 1; i <= last_day; i++) {
        list[i + day_of_week - 1] = i
    }

    return {
        date,
        list
    }

}