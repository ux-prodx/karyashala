// ! Completely coded by Ali Hsaino with CSS modules
import { useState } from "react";
import List from "./List/List";
import styles from "./internshipListingSection.module.css"
const InternshipListingSection = () => {
    const [lntsList, setIntsList] = useState([
        {
            title: "Product Designer",
            date: "14th Nov - 22, GMT +5:30",
            members: "106",
        },
        {
            title: "Product Designer",
            date: "14th Nov - 22, GMT +5:30",
            members: "106",
        },
        {
            title: "Product Designer",
            date: "14th Nov - 22, GMT +5:30",
            members: "106",
        },
        {
            title: "Product Designer",
            date: "14th Nov - 22, GMT +5:30",
            members: "106",
        },
    ]);
    return (
        <div className={`container ${styles.internshipListingSection}`}>
            <h3>Register for upcoming Internships cohorts</h3>
            <p>Grow your skills and Kick-start your career with training and certifications </p>
            <ul>{lntsList.map((ele, i) => <List key={i} title={ele.title} date={ele.date} members={ele.members} />)}</ul>
        </div>
    )
}

export default InternshipListingSection
