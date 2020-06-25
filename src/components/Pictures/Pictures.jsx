import React from 'react';
import styles from './Pictures.module.scss'

const Pictures = ({items}) => {
    console.log(items)
    return (
        <div className={styles.container}>
            {
                items.map(item => (
                    <img
                        className={styles.picture}
                        key={item.id}
                        src={item.img} alt=""/>
                ))
            }
        </div>
    );
};

export default Pictures;