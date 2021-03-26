import styled from 'styled-components'
import styles from '../../styles/Navbar/PickType.module.css'
import { selectedFoodState } from '../../states/foodType'
import { useRecoilState } from 'recoil';

const MainText = styled.p`
    font-family: ProximaNova-SemiBold;
    font-size: 14px;
    margin-top: 0px;
    margin-bottom: 0px;
`;

export default function PickType({ scroll }) {

    const [selectedFood, setSelectedFood] = useRecoilState(selectedFoodState)

    return (
        <div className={scroll === 'up' ? styles.container : styles.container+' '+styles.containerScroll}>
            <div className={selectedFood.type === 'lunch' ? styles.lunchBox+' '+styles.active : styles.lunchBox+' '+styles.notActive}>
                <MainText onClick={() => setSelectedFood({type: 'lunch'})}>Lunch</MainText>
            </div>
            <div className={selectedFood.type === 'dinner' ? styles.dinnerBox+' '+styles.active : styles.dinnerBox+' '+styles.notActive}>
                <MainText onClick={() => setSelectedFood({type: 'dinner'})}>Dinner</MainText>
            </div>
        </div>
    )
}