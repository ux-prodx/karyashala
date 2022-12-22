//! IMPORT CSS
import "./header.css";
//! IMPORT USE STATE
import { useState } from "react";
//! IMPORT REACT ICON
import { GiHamburgerMenu } from "react-icons/gi";
//! IMPORT CHILD COMPONENT
import HeaderLinks from "./HeaderLinks";
//* PARENT COMPONENT
const Header = () => {
  const [headerDisplay, setHeaderDisplay] = useState(true);
  return (
    <div className="center">
      <div>
        <img src="./images/Vector.jpg" alt="" class="alignleft"/>
        <img src="./images/log.jpg" alt="" />
      </div>
      <HeaderLinks hide={headerDisplay} />
      <GiHamburgerMenu
        className="burger-icon"
        onClick={() => setHeaderDisplay(!headerDisplay)}
      />
    </div>
  );
};

export default Header;
