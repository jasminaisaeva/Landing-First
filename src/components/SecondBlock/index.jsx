import React from "react";
import { Header } from "./header";
import fon from "../../images/fon2.png";
import css from "./SecondBlock.module.css";
import asidePhoto from "../../images/illustration.png";
import { Button } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

export const SecondBlock = () => {
  return (
    <div style={styles}>
      <div>
        <Header />
      </div>

      <div style={{ display: "flex", paddingTop: 110 }}>
        <div>
          <h4 className={css.title}>DESKTOP AND MOBILE APP</h4>
          <div className={css.titleOne}>
            <b>Plan</b> and <b>manage</b>
          </div>
          <div className={css.titleTwo}>
            Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu
            atqui laudem an, insolens gubergren similique est cu. Et vel modus
            congue vituperata. Solum patrioque no sea. Mea ex malis mollis
            oporteat. Eum an expetenda consequat.
          </div>
          <span>
            <Button type="primary" className={css.buttonBLue}>
              View video <CaretRightOutlined />
            </Button>
            <Button className={css.buttonWhite}>See features</Button>
          </span>
        </div>

        <img style={{ margingRight: 100 }} src={asidePhoto}></img>
      </div>
    </div>
  );
};
const styles = {
  backgroundImage: `url(${fon})`,
  // height:'100vh',
  // width: '100vw',
  width: "1440px",
  height: "776px",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
