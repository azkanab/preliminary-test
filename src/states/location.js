import { atom } from 'recoil'

export const selectedLocationState = atom({
    key: 'selectedLocationState',
    default: 'Tokopedia Tower'
})

export const modalLocationState = atom({
    key: 'modalLocationState',
    default: false
})

export const locationState = atom({
    key: 'locationState',
    default: [{
        name: 'Kulina',
        address: 'Jl. Tulodong Atas No.28, RT.6/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190'
    }, {
        name: 'Pancoran Riverside Appartment',
        address: 'Jl. Pengadegan Timur I No.30, RT.6/RW.1, Pengadegan, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12770'
    }, {
        name: 'Jalan Tulodong Atas 28',
        address: 'Jalan Tulodong Atas No. 28, Senayan, Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12190, Indonesia'
    }, {
        name: 'Block 71 Jakarta',
        address: 'Ariobimo Sentral, South Jakarta, RT.9/RW.4, East Kuningan, Setiabudi, Jakarta, 12950'  
    }]
})