import { atom, selector } from 'recoil'

export const selectedFoodState = atom({
    key: 'selectedFoodState',
    default: {
        type: 'lunch',
    }
})

export const foodState = selector({
    key: 'foodState',
    get: ({get}) => {
        const selectedFood = get(selectedFoodState)
        return selectedFood.type
    }
})