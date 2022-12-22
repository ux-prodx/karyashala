// ! Completely coded by Ali Hsaino with CSS modules
import { useEffect, useState } from "react";
import { BsVectorPen } from "react-icons/bs";
import { GiPowerLightning } from "react-icons/gi";
import styles from "./list.module.css";
const List = ({ title, date, members }) => {
    const [isMobile, setIsMobile] = useState();
    const handleResize = () => {
        if (window.innerWidth < 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };
    useEffect(() => {
        window.addEventListener("resize", handleResize);
    });
    return (
        <li className={styles.list}>
            <div className={styles.leftPart}>
                <span className={styles.penIconStyles}>
                    <BsVectorPen />
                </span>
                <div className={styles.titleAndDate}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.date}>{date}</p>
                </div>
            </div>
            {isMobile ? (
                <p className={`${styles.memberNumber} `}>
                    <GiPowerLightning /> {members}
                </p>
            ) : (
                <p className={`${styles.members} `}>
                    <GiPowerLightning /> {members} Members
                </p>
            )}
            <button className={styles.button} type="button">
                Apply for internships
            </button>
        </li>
    );
};

export default List;
