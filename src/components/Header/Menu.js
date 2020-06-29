import React from 'react';
import styles from "./Header.module.scss";

const Menu = () => {
    return (
        <div>
            <div className={styles.wrapper}>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Works</li>
                    <li>Contact</li>
                    <li>Help</li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;