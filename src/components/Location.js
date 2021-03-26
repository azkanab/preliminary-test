import styled from 'styled-components'
import styles from '../styles/LocationModal.module.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';

const MainText = styled.p`
    font-family: ProximaNova-SemiBold;
    font-size: 16px;
    margin-top: 0px;
    margin-bottom: 4px;
    color: #424749;
`;

const SubText = styled.p`
    font-family: ProximaNova-Regular;
    font-size: 14px;
    margin-top: 0px;
    margin-bottom: 0px;
    color: #6e7679;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export default function Location({ data, onHandleClick }) {
    return (
        <div className={styles.locationCard} onClick={onHandleClick} >
            <div>
                <LocationOnIcon style={{color: '#637679', backgroundColor: '#e2e4e4', borderRadius: '50%', padding: '4px', marginRight: '16px'}} />
            </div>
            <div className={styles.textColumn}>
                <MainText>{data.name}</MainText>
                <SubText>{data.address}</SubText>
                <hr className={styles.divider} />
            </div>
        </div>
    )
}