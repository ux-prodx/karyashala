//! IMPORT USE STATE 
import { useState } from "react";
//! IMPORT CHILD COMPONENT
import HeaderLink from "./HeaderLink";
//* CHILD COMPONENT
const HeaderLinks = ({ hide }) => {
  const [headerLink, setHeaderLink] = useState([
    {
      id: 1,
      title: "Learn",
      active: false,
    },
    {
      id: 2,
      title: "Internship",
      active: false,
    },
    {
      id: 3,
      title: "Events",
      active: false,
    },
    {
      id: 4,
      title: "Become a mentor",
      active: false,
    },
    {
      id: 5,
      title: "Login",
      active: false,
    },
    {
        id: 6,
        title:"Sign up",
        active: true,
    } 
  ]);
  const changeActiveStatus = (e) => {
    setHeaderLink(
      headerLink.forEach((ele) => {
        ele.active = false;
      })
    );
    setHeaderLink(
      headerLink.map((ele) =>
        ele.id === +e.target.id ? { ...ele, active: true } : ele
      )
    );
  };
  return (
    <ul className={`header-links ${hide ? "hide" : ""}`}>
      {headerLink.map((ele, i) => (
        <HeaderLink
          id={ele.id}
          key={i}
          linkTitle={ele.title}
          active={ele.active}
          changeActiveStatus={changeActiveStatus}
        />
      ))}
    </ul>
  );
};

export default HeaderLinks;

