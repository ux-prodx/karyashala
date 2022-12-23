import React from 'react'
import image from "./aaa.png";
import styles from "./test.css"

const Item = ({testParagraph, testIcon, testName, testRole }) => {
  return (
    <li>
      <div>
      <div className={styles.testP}>
       <p> {testParagraph} </p>
       
        </div>
        <div className={styles.testM}>
          <div>
        <span>{testIcon}</span>
         <img src={image} alt={image} />
         </div>
         <div className={styles.tp}>
           <h4>{testName}</h4>
           <p>{testRole}</p>
           </div>
           </div>
     </div>
    </li>
  )
}

export default Item;
