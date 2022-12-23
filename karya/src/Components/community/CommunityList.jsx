//* CHILD COMPONENT
const CommunityList = ({
  communityIcon,
  communityTitle,
  communityParagraph,
  communityButton,
}) => {
  return (
    <li>
      <span> {communityIcon}</span>
      <hr
        style={{
          background: '#858585A6',
          color: '#858585A6',
          borderColor: '#858585A6',
          width: '350px',
        }} />
      <p>{communityTitle}</p>
      <li><p>{communityParagraph}</p></li>
      <button>{communityButton}</button>
    </li>
  );
};

export default CommunityList;
