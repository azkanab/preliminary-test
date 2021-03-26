import styled from 'styled-components'
import styles from '../../styles/Navbar/Address.module.css'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { modalLocationState, selectedLocationState } from '../../states/location'
import { useRecoilState } from 'recoil';

const SubText = styled.p`
    font-family: ProximaNova-Regular;
    font-size: 8px;
    color: #6e7679;
    margin-top: 16px;
    margin-bottom: 0px;
`;

const MainText = styled.p`
    font-family: ProximaNova-SemiBold;
    font-size: 16px;
    color: #424749;
    margin-top: 0px;
    margin-bottom: 0px;
`;


export default function Address() {

    const [showModalLocation, setShowModalLocation] = useRecoilState(modalLocationState)
    const [selectedLoc, setSelectedLoc] = useRecoilState(selectedLocationState)

    return (
        <div className={styles.container}>
            <div className={styles.backContainer}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div className={styles.addressContainer} onClick={() => setShowModalLocation(true)}>
                <SubText>ALAMAT PENGANTARAN</SubText>
                <div className={styles.location}>
                    <MainText>{selectedLoc}</MainText>
                    <FontAwesomeIcon icon={faChevronDown} className={styles.arrowDown} />
                </div>
            </div>
        </div>
    )
}