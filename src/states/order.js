import { atom } from 'recoil'

export const orderState = atom({
    key: 'orderState',
    default: []
})

export const totalPrice = atom({
    key: 'totalPrice',
    default: 0
})