// import React from 'react';
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React, { useState } from "react";
import image from "./aaa.png";
import "./test.css";
import Item from "./Item";

const Test = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit, nam auctor tortor ut vitae, morbi vitae, enim velit. Elementum eu cras est, diam condimentum mollis. Vitae lorem sapien consectetur ut. Ipsum amet, purus odio turpis mauris commodo odio.",
      img: image,
      namelearner: "Saurbh Kumar",
      title: "Product Designer at Microsoft",
    },
    {
      id: 2,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit, nam auctor tortor ut vitae, morbi vitae, enim velit. Elementum eu cras est, diam condimentum mollis. Vitae lorem sapien consectetur ut. Ipsum amet, purus odio turpis mauris commodo odio.",
      img: image,
      namelearner: "Saurbh Kumar",
      title: "Product Designer at Microsoft",
    },
  ]);

  return (
    <div className="testimonial">
      <h3>What learners say about us?</h3>
      <p>
        Finding your community is more important than ever as classes <br /> and
        social activities take place virtually.
      </p>
      
        <ul>
          {reviews.map((ele, i) => (
            <Item key={i}
            testParagraph={ele.review}

            testName={ele.namelearner}
            testRole={ele.title} />
          ))}
        </ul>
      
      <div className="heading">
        <h3>Join a community of ambitious learners and best mentorship</h3>
        <button>Regiester with us</button>
      </div>
    </div>
  );
};
export default Test;
