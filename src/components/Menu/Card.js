import styled from 'styled-components'
import styles from '../../styles/Menu/Card.module.css'
import { withStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import AddIcon from '@material-ui/icons/Add';
import Rating from '@material-ui/lab/Rating'
import convertIntToIdrString from '../../utils/currency';

const Image = styled.img`
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

const MainText = styled.p`
    font-family: ProximaNova-SemiBold;
    color: #424749;
    font-size: 16px;
    margin-top: 0px;
    margin-bottom: 0px;
`;

const Title = styled(MainText)`
    margin-bottom: 8px;
`;

const RatingText = styled.span`
    font-family: ProximaNova-SemiBold;
    color: #6e7679;
    font-size: 16px;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-right: 4px;
`;

const SubText = styled.p`
    font-family: ProximaNova-SemiBold;
    color: #6e7679;
    font-size: 14px;
    margin-top: 0px;
    margin-bottom: 8px;
`;

const AddText = styled.p`
    font-family: ProximaNova-SemiBold;
    color: #f1f1f2;
    font-size: 14px;
    margin-top: 0px;
    margin-bottom: 0px;
`;

const StyledRating = withStyles({
    iconFilled: {
      color: '#f9423a',
    },
    iconHover: {
      color: '#f9423a',
    },
  })(Rating);

export default function Card({ food, order, setOrder, date, total, setTotal }) {

    const setTotalPrice = () => {
        var totalPrice = total
        setTotal(totalPrice + food.price)
    }

    const setFoodOrder = () => {
        var newOrder = [...order]
        newOrder.push({
            orderDate: new Date(date),
            food: food
        })
        setOrder(newOrder)
        setTotalPrice()
    }

    return (
        <div className={styles.container}>
            <Image src={food.img} />
            <div className={styles.detail}>
                <div className={styles.rating}>
                    <RatingText>{food.rating}</RatingText>
                    <StyledRating value={food.rating} precision={0.5} icon={<StarIcon style={{fontSize: '16px'}} />} emptyIcon={<StarBorderIcon style={{color: '#f9423a', fontSize: '16px'}} />} readOnly />
                </div>
                <Title>{food.name}</Title>
                <SubText>{food.kitchen} • {food.city}</SubText>
                <div className={styles.priceContainer}>
                    <div className={styles.price}>
                        <MainText>{convertIntToIdrString(food.price)}</MainText>
                    </div>
                    <div className={styles.button}>
                        <button className={styles.addButton} type='button' onClick={setFoodOrder}>
                            <div style={{display: 'flex'}}>
                                <AddText>ADD</AddText>
                                <AddIcon style={{fontSize: '16px', color: '#f1f1f2'}} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )  
}