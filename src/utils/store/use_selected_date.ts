import {create} from 'zustand'

interface SelectedDateState {
    selectedDate?: Date
    setSelectedDate: (selectedDate?: Date) => void
}

const selectedDate = create<SelectedDateState>(set => ({
    selectedDate: undefined,
    setSelectedDate: selectedDate => set({selectedDate})
}))

export function useSelectedDate() {
    return {
        selectedDate: selectedDate(state => state.selectedDate),
        setSelectedDate: selectedDate(state => state.setSelectedDate)
    }
}