import React from "react";
import { data } from "./data";
import { Button } from "antd";
import buttons from "../../images/buttons.png";
import fon from "../../images//features.png";
import  css from  './ThirdBlock.module.css'
export const ThirdBlock = () => {
  return (
    <div style={styles}>
      <div className={css.block}>
        <div>
          <div className={css.itemOne}><b>ABOUT US</b></div>
          <div className={css.itemTwo}><b>Read about our app</b></div>
        </div>
        <div className={css.itemThree}>
          {data.map((el, id) => {
            return (
              <div  className={css.itemFour}
               key={id} id={id}>
                <img src={el.img}></img>
               <div >{el.title}</div>
                <span >{el.description}</span>
              </div>
            );
          })}
        </div>
        <div>
          <img  className={css.img}
          src={buttons}></img>
        </div>
      </div>
    </div>
  );
};

const styles = {
  backgroundImage: `url(${fon})`,
  width: '1440px',
  height: '886px',
  backgroundPosition: "center",
};
