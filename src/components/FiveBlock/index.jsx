import React from "react";
import css from "./FiveBlock.module.css";
import pic1 from "../../images/quotes.png";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
export const FiveBlock = () => {
  return (
    <div>
      {/* creating first block */}
      <div style={styles.first}>
        <div>
          <div className={css.itemOne}>
            <strong>TESTIMONIALS</strong>
          </div>
          <div className={css.itemTwo}>
            <b>Customers's quotes</b>
          </div>
          <div className={css.itemThree}>
            Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu
            atqui laudem an.
          </div>
        </div>
      </div>
      {/* creating second block */}
      <div style={{ backgroundColor: "white", width: 1440, height: 964 }}>
        <div className={css.itemFive}>CUSTOMER HELP</div>
        <div className={css.itemSix}>
          <b>Frequently asked questions</b>
        </div>
        <div style={{ width: "743px", height: "614px", margin: "0 auto" }}>
          <div className={css.itemFour}>
            {" "}
            <DownOutlined />
            <span style={{ paddingLeft: 20 }}>Reque insolens in vel?</span>
          </div>
          <div className={css.itemFour}>
            <DownOutlined />
            <span style={{ paddingLeft: 20 }}>
              {" "}
              Vis rebum error graecis ea, id sit postea accusamus?
            </span>
          </div>
          <div className={css.itemFourrr}>
            <UpOutlined />
            <span style={{ paddingLeft: 20 }}> Lorem repudiandae ne nec?</span>

            <div style={{ display: "flex," }}>
              <div className={css.itemForrrOne}>
                Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu
                usu vidit tractatos, vero tractatos ius an, in mel diceret
                persecuti.
              </div>
              <div>
                <button>Go to socumentation</button>
              </div>{" "}
            </div>
          </div>
          <div className={css.itemFour}>
            <DownOutlined />
            <span style={{ paddingLeft: 20 }}>
              Ad dicit numquam vel. Et eos iudico feugait
            </span>
            percipitur?
          </div>
          <div className={css.itemFour}>
            <DownOutlined />
            <span style={{ paddingLeft: 20 }}>
              Sea no dico percipitur. Fierent constituam definitiones id eum?
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
const styles = {
  first: {
    backgroundImage: `url(${pic1})`,
    width: "1440px",
    height: "479px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
};
