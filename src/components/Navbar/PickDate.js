import styled from 'styled-components'
import styles from '../../styles/Navbar/PickDate.module.css'
import { selectedDateState } from '../../states/date'
import { useRecoilState } from 'recoil'
import { useEffect, useState } from 'react'

const SubText = styled.p`
    font-family: ProximaNova-Regular;
    font-size: 8px;
    margin-top: 0px;
    margin-bottom: 2px;
`;

const MainText = styled.p`
    font-family: ProximaNova-SemiBold;
    font-size: 14px;
    margin-top: 0px;
    margin-bottom: 0px;
`;

export default function PickDate() {

    const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState)
    const [dateOptions, setDateOptions] = useState([])
    const [dates, setDates] = useState([])
    const [days, setDays] = useState([])

    const changeSelectedDate = (date) => {
        if (date.getDay() !== 0 && date.getDay() !== 6) {
            setSelectedDate({date: date})
        }
    }

    const renderDateOptions = (dateOptions) => {
        return (
            dateOptions.map((date, index) => (
                <div key={index} onClick={() => changeSelectedDate(new Date(date))} className={new Date(selectedDate.date).getDate() === new Date(date).getDate() ? styles.dateItem+' '+styles.active : (new Date(date).getDay() === 0 || new Date(date).getDay() === 6) ? styles.dateItem+' '+styles.disabled : styles.dateItem}>
                    <div className={styles.date}>
                        <div className={styles.test}>
                            <SubText>{days[index]}</SubText>
                            <MainText>{dates[index]}</MainText>
                        </div>
                    </div>
                </div>
            ))
        )
    }

    useEffect(() => {
        var today = new Date()
        var newDateOptions = []
        var newDays = []
        var newDates = []
        for (var i = 0; i < 14; i++) {
            var nextDate = new Date(today)
            nextDate.setDate(nextDate.getDate() + i)
            newDateOptions.push(nextDate)
            var day;
            switch(nextDate.getDay()) {
                case (0):
                    day = 'MIN';
                    break;
                case (1):
                    day = 'SEN';
                    break;
                case (2):
                    day = 'SEL';
                    break;
                case (3):
                    day = 'RAB';
                    break;
                case (4):
                    day = 'KAM';
                    break;
                case (5):
                    day = 'JUM';
                    break;
                case (6):
                    day = 'SAB';
                    break;
            }
            newDays.push(day)
            newDates.push(nextDate.getDate())
        }
        setDateOptions(newDateOptions)
        setDays(newDays)
        setDates(newDates)
    }, [])

    return (
        <div className={styles.container}>
            {renderDateOptions(dateOptions)}
        </div>
    )
}