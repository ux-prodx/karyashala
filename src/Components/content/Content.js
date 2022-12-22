import React from "react";
import a from "./a.png";

import "./Content.css";
const Content = () => {
  return (
    <div className="container content">
      <div>
        <img src={a} alt="a" />
        <div>
          <h3>10X Learn curve, working on <br/> real time problem</h3>
          <p>
          Learn with Industry experts, explore career opportunities, network with industry professionals
          </p>
          <button>Apply for internships</button>
        </div>
      </div>
      </div>
      );
};

export default Content;
