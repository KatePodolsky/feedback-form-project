import React from 'react';
import styles from  './BG.module.scss'


const BG = ({ children }) =>
    <div className={styles.BG}>
            { children }
    </div>;

export default BG