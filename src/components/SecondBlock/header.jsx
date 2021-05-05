import React from "react";
import pic1 from "../../images/bitbucket.png";
import pic2 from "../../images/apple-watch.png";
import pic3 from "../../images/facebook.png";
import pic4 from "../../images/atlassian.png";
import pic5 from "../../images/audi.png";
import css from "./SecondBlock.module.css";

export const Header = () => {
  return (
    <div className={css.header}>
      <div className={css.container}>
        <ul className={css.ul}>
          <li>
            <img src={pic1}></img>
          </li>
          <li>
            <img src={pic2}></img>
          </li>
          <li>
            <img src={pic3}></img>
          </li>
          <li>
            <img src={pic4}></img>
          </li>
          <li>
            <img src={pic5}></img>
          </li>
        </ul>
      </div>
    </div>
  );
};
