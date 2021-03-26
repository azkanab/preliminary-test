import { atom, selector } from 'recoil'

export const foodListState = atom({
    key: 'foodListState',
    default: [{
        day: ['Senin', 'Rabu', 'Jumat', 'Minggu'],
        foods: [{
            name: 'Roasted Chicken with Scrambled Egg',
            img: '1.png',
            rating: 4.5,
            kitchen: 'Kulina',
            city: 'Uptown Lunch',
            price: 35000,
        }, {
            name: 'Roasted Chicken with Scrambled Egg',
            img: '2.png',
            rating: 4.5,
            kitchen: 'Kulina',
            city: 'Uptown Lunch',
            price: 35000,
        }, {
            name: 'Roasted Chicken with Scrambled Egg',
            img: '3.png',
            rating: 4.5,
            kitchen: 'Kulina',
            city: 'Uptown Lunch',
            price: 35000,
        }]
    }, {
        day: ['Selasa', 'Kamis', 'Sabtu'],
        foods: [{
            name: 'Roasted Chicken with Scrambled Egg',
            img: '4.png',
            rating: 4.5,
            kitchen: 'Kulina',
            city: 'Uptown Lunch',
            price: 35000,
        }, {
            name: 'Roasted Chicken with Scrambled Egg',
            img: '5.png',
            rating: 4.5,
            kitchen: 'Kulina',
            city: 'Uptown Lunch',
            price: 35000,
        }, {
            name: 'Roasted Chicken with Scrambled Egg',
            img: '6.png',
            rating: 4.5,
            kitchen: 'Kulina',
            city: 'Uptown Lunch',
            price: 35000,
        }]
    }]
})

export const foodSeninRabuJumat = selector({
    key: 'foodSeninRabuJumat',
    get: ({get}) => {
        const foods = get(foodListState)
        return foods.slice(0,1)
    }
})

export const foodSelasaKamis = selector({
    key: 'foodSelasaKamis',
    get: ({get}) => {
        const foods = get(foodListState)
        return foods.slice(1)
    }
})