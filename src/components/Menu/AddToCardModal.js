import styled from 'styled-components'
import styles from '../../styles/Menu/AddToCardModal.module.css'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import convertIntToIdrString from '../../utils/currency'

const MainText = styled.p`
    font-family: ProximaNova-Bold;
    color: #f1f1f2;
    font-size: 16px;
    margin-top: 0px;
    margin-bottom: 0px;
`;

const SubText = styled.p`
    font-family: ProximaNova-Regular;
    color: #f1f1f2;
    font-size: 14px;
    margin-top: 0px;
    margin-bottom: 0px;
`;

export default function AddToCardModal({ order, total }) {
    return (
        <div>
            <div className={styles.container} />
            <div className={styles.box}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div>
                        <MainText>{order.length} {order.length === 1 ? 'Item' : 'Items'} | {convertIntToIdrString(total)}</MainText>
                        <SubText>Termasuk ongkos kirim</SubText>
                    </div>
                    <div style={{flex: 1, textAlign: 'end', justifyContent: 'flex-end', display: 'flex', alignItems: 'center'}}>
                        <ShoppingCartOutlinedIcon style={{color: '#ffffff', fontSize: '24px', marginRight: '8px'}} />
                        <ArrowForwardIosIcon style={{color: '#ffffff', fontSize: '16px'}} />
                    </div>
                </div>
            </div>
        </div> 
    )
}