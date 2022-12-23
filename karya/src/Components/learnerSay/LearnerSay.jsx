//* CHILD COMPONENT 
const LearnerSay = ({ learnerPhoto, learnerName, learnerRole, learnerTitle }) => {
    return (
      <li>
        <span
          className="photo"
          style={{ backgroundImage: `url(${learnerPhoto})` }}
        ></span>
        <span className="name">{learnerName}</span>
        <span className="role">{learnerRole}</span>
        <span className="title">{learnerTitle}</span>
      </li>
    );
  };
  
  export default LearnerSay;
  