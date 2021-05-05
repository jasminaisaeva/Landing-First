import React from "react";
import css from "./SixBlock.module.css";
import { Button } from "antd";
import pic1 from "../../images/content.png";
import logo from "../../images/logo.png";
import logo1 from "../../images/Group 11.png";
import logo2 from "../../images/Telegram.png";
import logo3 from "../../images/Group 7.png";
import logo4 from "../../images/Group 8.png";
import logo5 from "../../images/get started button.png";

export const SixBlock = () => {
  return (
    //   creating first block
    <div style={styles}>
      <div>
        <div className={css.block}>
          <span className={css.itemOne}>
            <b>PLAN YOUR LIFE</b>
          </span>
          <div className={css.itemTwo}>
            Get <strong>started</strong> now
          </div>
          <div className={css.itemThree}>
            Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu
            atqui laudem an, insolens gubergren similique est cu. Et vel modus
            congue vituperata.
          </div>
        </div>
        <div className={css.buttons}>
          <Button className={css.button1}>View pricing</Button>
          <Button
            className={css.button2}
            type="primary"
            style={{ backgroundColor: "color: #C7D3FF" }}
          >
            Read documentation
          </Button>
        </div>
      </div>
      {/* creating second block */}
      <div className={css.blockTwo}>
        <div className={css.itemFour}>
          <span>
            <b>Sing up for newsletter</b>
          </span>
          <div>
            Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu, homero
            alterum.
          </div>
        </div>
        <div className={css.itemFive}>
          <input placeholder="Email address"></input>
          <button>Save me</button>
        </div>
      </div>
      {/* creating third block */}
      <div>
        <div className={css.header}>
          <div className={css.container}>
            <span>
              {" "}
              <img src={logo} />
            </span>
            <ul>
              <li>
                <b>Home</b>
              </li>
              <li>
                <b>Blog</b>
              </li>
              <li>
                {" "}
                <b>Features</b>
              </li>
              <li>
                <b>Pricing</b>
              </li>
              <li>
                <b>Documentation</b>
              </li>
            </ul>
            <span className={css.socials}>
              <img src={logo1}></img>

              <img src={logo2}></img>

              <img src={logo3}></img>

              <img src={logo4}></img>
            </span>
            <span>
              {" "}
              <img src={logo5}></img>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${pic1})`,
  width: "1440px",
  height: "447px",
};
