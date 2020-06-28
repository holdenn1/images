import React, {useState} from 'react';

import styles from './Header.module.scss'
import Menu from "./Menu";

const Header = () => {

    const [visible, setVisible] = useState(false)

    return (
        <div className={styles.header}>
            <h1>Logo</h1>
            <ul className={styles.navDesk}>
                <li className={styles.navMob}>Home</li>
                <li className={styles.navMob}>About Us</li>
                <li className={styles.navMob}>Works</li>
                <li className={styles.navMob}>Contact</li>
                <li className={styles.navMob}>Help</li>
            </ul>
            <span className={styles.menu} onClick={() => setVisible(!visible)}>Menu</span>
            {visible &&
            <Menu/>


            }
        </div>
    );
};

export default Header;