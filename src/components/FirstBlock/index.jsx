import React from "react";
import css from "./FirstBlock.module.css";
import pic from "../../images/hero.png";
import { Header } from "./header";
import play from "../../images/play.png";
export const FirstBlock = () => {
  return (
    <div style={styles.block}>
      <div>
        {" "}
        <Header />
      </div>
      <div className={css.blockOneFirst}>
        <h4 className={css.blockOneTwo}>PLAN YOUR LIVE</h4>
        <div className={css.blockOneThree}>
          Increase your <b>productivity</b>
        </div>
        <div className={css.blockOneFour}>
          Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu
          atqui laudem an, insolens gubergren similique est cu. Et vel modus
          congue vituperata.
        </div>
        <img src={play} className={css.blockOneFive}></img>
      </div>
    </div>
  );
};

const styles = {
  block: {
    backgroundImage: `url(${pic})`,
    // height:'100vh',
    // width: '100vw',
    width: "1441px",
    height: "615px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
};
