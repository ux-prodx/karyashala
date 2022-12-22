import React from 'react'
import styles from "./backDrop.module.css"
const BackDrop = ({ confirm }) => {
    return (
        <div className={styles.backDrop} onClick={confirm}>

        </div>
    )
}

export default BackDrop
