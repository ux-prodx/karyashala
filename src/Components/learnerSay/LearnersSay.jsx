//! IMPORT CSS
import "./learnersSay.css";
//! IMPORT CHILD COMPONENT
import LearnerSay from "./LearnerSay";
//* PARENT COMPONENT
const LearnersSay = ({ learnersSay }) => {
  return (
    <div className="container learners-say">
      <h3>What learners say about us?</h3>
      <p>
      Finding your community is more important than ever as classes and social activities take place virtually.
      </p>
      <ul>
        {learnersSay.map((ele, i) => (
          <LearnerSay
            key={i}
            learnerPhoto={ele.photo}
            learnerName={ele.name}
            learnerRole={ele.role}
            learnerTitle={ele.title}
          />
        ))}
      </ul>
    </div>
  );
};

export default LearnersSay;
