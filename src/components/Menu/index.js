import styled from 'styled-components'
import styles from '../../styles/Menu/Menu.module.css'
import Card from './Card'
import { selectedDateState } from '../../states/date'
import { foodSeninRabuJumat, foodSelasaKamis } from '../../states/foodList'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

const MainText = styled.p`
    font-family: ProximaNova-Bold;
    color: #424749;
    font-size: 16px;
    margin-top: 24px;
    margin-bottom: 16px;
`;

export default function Menu({ order, setOrder, total, setTotal }) {

    const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState)
    const [foodsOnSeninRabuJumat] = useRecoilValue(foodSeninRabuJumat)
    const [foodsOnSelasaKamis] = useRecoilValue(foodSelasaKamis)
    const [selectedDay, setSelectedDay] = useState('')
    const [date, setDate] = useState('')

    const renderFoodCard = () => {
        var foods;

        if (selectedDay === 'Senin' || selectedDay === 'Rabu' || selectedDay === 'Jumat') {
            foods = [...foodsOnSeninRabuJumat.foods]
        } else {
            foods = [...foodsOnSelasaKamis.foods]
        }

        return (
            foods.map((food, index) => (
                <div key={index}>
                    <Card food={food} order={order} setOrder={setOrder} date={selectedDate.date} total={total} setTotal={setTotal} />
                </div>
            ))
        )
    }

    useEffect(() => {
        var selected = new Date(selectedDate.date)
        var day;
        switch(selected.getDay()) {
            case (0):
                day = 'Minggu';
                break;
            case (1):
                day = 'Senin';
                break;
            case (2):
                day = 'Selasa';
                break;
            case (3):
                day = 'Rabu';
                break;
            case (4):
                day = 'Kamis';
                break;
            case (5):
                day = 'Jumat';
                break;
            case (6):
                day = "Sabtu";
                break;
        }
        var month;
        switch(selected.getMonth()) {
            case (0):
                month = 'Januari';
                break;
            case (1):
                month = 'Februari';
                break;
            case (2):
                month = 'Maret';
                break;
            case (3):
                month = 'April';
                break;
            case (4):
                month = 'Mei';
                break;
            case (5):
                month = 'Juni';
                break;
            case (6):
                month = 'Juli';
                break;
            case (7):
                month = 'Agustus';
                break;
            case (8):
                month = 'September';
                break;
            case (9):
                month = 'Oktober';
                break;
            case (10):
                month = 'November';
                break;
            case (11):
                month = 'Desember';
                break;
        }

        setSelectedDay(day)
        setDate(selected.getDate()+' '+month+' '+selected.getFullYear())

    }, [selectedDate])

    return (
        <div className={order.length === 0 ? styles.container : styles.container+' '+styles.addedHeight}>
            <MainText>{selectedDay}, {date}</MainText>
            {renderFoodCard()}
        </div>
    )
}