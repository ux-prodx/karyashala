// ! Completely coded by Ali Hsaino with CSS modules
import SearchForm from "./SearchForm/SearchForm";
import ErrorModal from "../ErrorModal/ErrorModal"
import heros from "../../Assets/Hero.jpg";
import styles from "./heroSection.module.css";
import a from "../../Assets/columbia-university-logo-noback.png"
import b from "../../Assets/Harvard_University_logo.png"
import c from "../../Assets/Indian_Institute_of_Technology_Bombay_Logo.png"
import d from "../../Assets/MIT-Massachusetts-Institute-of-Technology-Logo.png"
import e from "../../Assets/Stanford-University-Logo.png"
import { useState } from "react";
const HeroSection = () => {
    const collages = [a, b, c, d, e]
    const [isError, setIsError] = useState(false)
    const showErrorModal = () => {
        setIsError(true)
    }
    const confirm = () => {
        setIsError(false)
    }
    return (
        <div className={`container ${styles.heroSection}`}>
            {isError && <ErrorModal confirm={confirm} />}
            <div className={styles.landingContainer}>
                <div className={styles.landing}>
                    <h1>Join India’s Smartest Online Internships Cohort.</h1>
                    <p>
                        Connect and Learn with <span>10,279+</span> Like minded Students
                        nationwide along with experienced mentors
                    </p>
                    <SearchForm showErrorModal={showErrorModal} />
                </div>
                <div className={styles.students}>
                    <img src={heros} alt="heros" />
                </div>
            </div>
            <div className={styles.colleges}>
                <p>Over 50+ collages joined us</p>
                <div>
                    {collages.map((ele, i) => <img key={i} src={ele} alt={`collage${i}`} />)}
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
