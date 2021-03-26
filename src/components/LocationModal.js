import styles from '../styles/LocationModal.module.css'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { locationState, modalLocationState, selectedLocationState } from '../states/location'
import { useRecoilState } from 'recoil'
import Location from './Location'
import { useEffect, useState } from 'react'
import ErrorIcon from '@material-ui/icons/Error';

const MainText = styled.p`
    font-family: ProximaNova-SemiBold;
    font-size: 20px;
    margin-top: 0px;
    margin-bottom: 0px;
    color: #424749;
`;

const SubText = styled.p`
    font-family: ProximaNova-Regular;
    font-size: 16px;
    margin-top: 0px;
    margin-bottom: 0px;
    color: #6e7679;
    text-align: center;
`;

const PoweredByText = styled.p`
    font-family: ProximaNova-Bold;
    font-size: 14px;
    margin-top: 0px;
    margin-bottom: 0px;
    color: #6e7679;
`;

export default function LocationModal() {

    const [locations, setLocations] = useRecoilState(locationState)
    const [showModalLocation, setShowModalLocation] = useRecoilState(modalLocationState)
    const [selectedLoc, setSelectedLoc] = useRecoilState(selectedLocationState)
    const [displayedLocation, setDisplayedLocation] = useState([])
    const [searchKeyword, setSearchKeyword] = useState('')

    const handleClickLocation = (location) => {
        setSelectedLoc(location.name)
        setShowModalLocation(false)
    }

    const renderLocations = () => {
        return (
            displayedLocation.length > 0 ?
                displayedLocation.map((location,index) => (
                    <Location key={index} data={location} onHandleClick={() => handleClickLocation(location)} />
                )) :
                <div style={{textAlign: 'center', marginTop: '64px', marginBottom: '64px'}}>
                    <ErrorIcon style={{color: '#6e7679', fontSize: '32px', marginBottom: '8px'}} />
                    <SubText>Tidak ditemukan. Coba masukkan kata lainnya</SubText>
                </div>
        )
    }

    useEffect(() => {
        var newLocations = [...locations]
        setDisplayedLocation(newLocations.filter((newLoc) => newLoc.name.toLowerCase().includes(searchKeyword.toLowerCase()) || newLoc.address.toLowerCase().includes(searchKeyword.toLowerCase()) ))
    }, [locations, searchKeyword])

    return (
        <div style={{cursor: 'pointer'}}>
            <div className={showModalLocation === false ? styles.backdrop+' '+styles.notShowModal : styles.backdrop} />
            <div className={showModalLocation === false ? styles.container+' '+styles.notShowModal : styles.container}>
                <div style={{margin: '16px'}}>
                    <div style={{textAlign: 'end'}}>
                        <CloseIcon onClick={() => setShowModalLocation(false)} style={{color: '#424749', fontSize: '24px', marginBottom: '16px'}}></CloseIcon>
                    </div>
                    <MainText>Cek makanan yang tersedia di lokasi kamu!</MainText>
                    <div className={styles.inputIcons}>
                        <FontAwesomeIcon icon={faMapMarkerAlt} style={{position: 'absolute', padding: '8px 4px 8px 16px', color: '#f9423a'}}></FontAwesomeIcon>
                        <input placeholder='Pencarian lokasi' value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} className={styles.searchInput} type="text" />
                    </div>
                    {renderLocations()}
                    <div className={styles.poweredBy}>
                        <PoweredByText>powered by&nbsp;</PoweredByText>
                        <img src='google.png' className={styles.google} />
                    </div>
                </div>
            </div>
        </div>
    )
}