// ! Completely coded by Ali Hsaino with CSS modules
import styles from "./list.module.css";
import { BiShareAlt } from "react-icons/bi";
const List = ({
    eventImg,
    eventDate,
    eventSets,
    eventTitle,
    tags,
    eventInstructor,
    eventInstructorName,
    eventInstructorTitle,
}) => {
    return (
        <li className={styles.list}>
            <div className={styles.eventImg}>
                <img src={eventImg} alt={eventImg.toString().slice(0, 3)} />
            </div>
            <div className={styles.eventInfo}>
                <div className={styles.after}>
                    <div className={styles.dateSets}>
                        <span className={styles.eventDate}>{eventDate}</span>
                        <span className={styles.eventSets}>{eventSets} Seats left</span>
                    </div>
                    <h4 className={styles.eventTitle}>{eventTitle}</h4>
                    <div className={styles.tags}>
                        {tags.map((ele, i) => (
                            <span className={styles.tag} key={i}>{ele}</span>
                        ))}
                    </div>
                </div>
                <div >
                    <div className={styles.eventInst}>
                        <img
                            src={eventInstructor}
                            alt={eventInstructor.toString().slice(0, 3)}
                        />
                        <div>
                            <h4>{eventInstructorName}</h4>
                            <p>{eventInstructorTitle}</p>
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.join} type="button">Join the event</button>
                        <button className={styles.share} type="button">
                            Share <BiShareAlt />
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default List;
