
import "./community.css";
import { RiPenNibLine } from "react-icons/ri";
import CommunityList from "./CommunityList";
import { useState } from "react";

const Community = () => {
  const [communityList, setCommunityList] = useState([
    {
      id: 1,
      icon: < RiPenNibLine />,
      title: "Product Design",
      paragraph: "All design digital product disciplines",
      button: "Join the community",
    },
    {
      id: 2,
      icon: <RiPenNibLine />,
      title: "Web Development",
      paragraph: "Community for passionate web devs ",
      button: "Join the community",
    },
    {
      id: 3,
      icon: <RiPenNibLine />,
      title: "Product Management",
      paragraph: "Build, communicate, and execute",
      button: "Join the community",
    },
    {
      id: 4,
      icon: <RiPenNibLine />,
      title: "Software Development",
      paragraph: "Learn to code with your peers",
      button: "Join the community",
    }

  ]);
  return (
    <div className="work-process">
      <div className="container">
      <h3>Join a community of ambitious learners</h3>
      <p>Find the best suitable community for your interest nationwide</p>
      <ul>
        {communityList.map((ele, i) => (
          <CommunityList
            key={i}
            communityIcon={ele.icon}
            communityTitle={ele.title}
            communityParagraph={ele.paragraph}
            communityButton={ele.button}
            
          />
          
        ))}
      </ul>
      <div class="center">
      <button>Explore all communities</button>
      </div>
      </div>
    </div>
  );
};

export default Community;