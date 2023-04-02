import React from "react";
import styles from "./About.module.css"
// import {Link} from "react-router-dom";

export default function About () {
    return(
    <>
        <div className={styles.page}>
            <h1>About Page</h1>
            <img src="" alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, iure saepe velit a sed nostrum repellendus est, veritatis voluptatum sit, eius atque quos consectetur nam assumenda architecto? Quidem, omnis earum.</p>
        </div>


        <div className={styles.page}>
            <h1>About Creator</h1>
            <img src="" alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis id dicta totam animi, labore cumque aut, nobis et veniam voluptas blanditiis unde soluta maiores iusto distinctio fugiat voluptatibus. Fugit, expedita!</p>
        </div>
    </>
    );
}