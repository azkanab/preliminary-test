import styles from '../../styles/Navbar/Navbar.module.css'
import Address from './Address'
import PickDate from './PickDate'
import PickType from './PickType'

export default function Navbar({scroll}) {
    return (
        <div className={scroll === 'down' ? styles.container : styles.container+' '+styles.containerScroll}>
            <div className={styles.menu}>
                <Address />
                <PickDate />
                <PickType scroll={scroll} />
            </div>
        </div>
    )
}