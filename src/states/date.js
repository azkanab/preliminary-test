import { atom, selector } from 'recoil'

export const selectedDateState = atom({
    key: 'selectedDateState',
    default: {
        date: new Date(),
    }
})

export const dateState = selector({
    key: 'dateState',
    get: ({get}) => {
        const selectedDate = get(selectedDateState)
        return selectedDate.date
    }
})