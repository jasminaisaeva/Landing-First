import React from "react";
import logo from "../../images/logo.png";
import logo1 from "../../images/Group 11.png";
import logo2 from "../../images/Telegram.png";
import logo3 from "../../images/Group 7.png";
import logo4 from "../../images/Group 8.png";
import css from "./FirstBlock.module.css";
import logo5 from "../../images/get started button.png";

export const Header = () => {
  return (
    <div className={css.header}>
      <div className={css.block}>
        <img src={logo} style={{ paddingTop: 5 }} />
        <ul>
          <a href="#" style={{ textDecoration: "none" }}>
            <li>Home</li>
          </a>
          <li>Blog</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Documentation</li>
        </ul>
        <div className={css.socials}>
          <a>
            <img src={logo1}></img>
          </a>
          <a>
            <img src={logo2}></img>
          </a>
          <a>
            <img src={logo3}></img>
          </a>
          <a>
            <img src={logo4}></img>
          </a>
        </div>
        <img src={logo5}></img>
      </div>
    </div>
  );
};
