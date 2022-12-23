import React from "react";
import styles from "./errorLayer.module.css";
const ErrorLayer = ({ confirm }) => {
    return (
        <div className={styles.overLayer}>
            <h3 className={styles.error}>Error!</h3>
            <p className={styles.message}>Please fill the required input field</p>
            <div className={styles.button}>
                <button onClick={confirm}>Okay</button>
            </div>
        </div>
    );
};

export default ErrorLayer;
