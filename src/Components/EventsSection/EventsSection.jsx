// ! Completely coded by Ali Hsaino with CSS modules
import { useState } from "react";
import List from "./List/List";
import eventOne from "../../Assets/eventOne.png";
import eventTwo from "../../Assets/eventTwo.png";
import eventOnePic from "../../Assets/eventOnePic.png";
import eventTwoPic from "../../Assets/eventTwoPic.png";
import styles from "./eventsSection.module.css"
const EventsSection = () => {
    const [eventList, setEventList] = useState([
        {
            eventImg: eventOne,
            eventDate: "14th Nov - 22, GMT +5:30",
            eventSets: "100",
            eventTitle: "Designing experience for user centric product",
            tags: ["UX Design", "UI Design", "User research"],
            eventInstructor: eventOnePic,
            eventInstructorName: "Saurabh Kumar",
            eventInstructorTitle: "Product Designer at Microsoft",
        },
        {
            eventImg: eventTwo,
            eventDate: "14th Nov - 22, GMT +5:30",
            eventSets: "123",
            eventTitle: "How to conduct user research to build futuristic products?",
            tags: ["Product Management", "Product research"],
            eventInstructor: eventTwoPic,
            eventInstructorName: "Pratyush Choubey",
            eventInstructorTitle: "Product Manager at Google",
        },
    ]);
    return (
        <div className={`container ${styles.eventsSection}`}>
            <h3>Exclusive events for our community members</h3>
            <p>
                Learn with Industry experts, explore career opportunities, network with
                industry professionals
            </p>
            <ul>
                {eventList.map((ele, i) => (
                    <List
                        key={i}
                        eventImg={ele.eventImg}
                        eventDate={ele.eventDate}
                        eventSets={ele.eventSets}
                        eventTitle={ele.eventTitle}
                        tags={ele.tags}
                        eventInstructor={ele.eventInstructor}
                        eventInstructorName={ele.eventInstructorName}
                        eventInstructorTitle={ele.eventInstructorTitle}
                    />
                ))}
            </ul>
        </div>
    );
};

export default EventsSection;
