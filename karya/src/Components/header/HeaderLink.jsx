//* CHILD COMPONENT
const HeaderLink = ({ id, linkTitle, active, changeActiveStatus }) => {
  return (
    <ul
      id={id}
      className={`header-link ${active ? "active" : ""}`}
      onClick={changeActiveStatus}
    >
      {linkTitle}
    </ul>
  );
};

export default HeaderLink;
