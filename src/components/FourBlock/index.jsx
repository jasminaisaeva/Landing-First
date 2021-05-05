import React from "react";
import css from "./FourBlock.module.css";
import pic1 from "../../images/illustrations.png";
import pic2 from "../../images/stats.png";
import pic3 from "../../images/read now button.png";
import pic4 from "../../images/blog.png";

export const FourBlock = () => {
  return (
    <div>
      {/*  creating first block */}
      <div style={styles.first}>
        <span>
          <div className={css.procent}> 89%</div>
          <div className={css.paragraf}>
            Customers who have increased their productivity
          </div>
        </span>

        <span>
          <div className={css.procent1}>
            <b>3123</b>
          </div>
          <div className={css.paragraf1}>
            <b>Users who have used our applicatioon</b>
          </div>
        </span>
      </div>

      {/* creating second block */}
      <div style={styles.second}>
        <div className={css.ItemTwo}>
          <div className={css.One}>
            <b>OUR RESOURCES</b>
          </div>
          <div className={css.Two}>
            <b>Start reading our blog</b>{" "}
          </div>
        </div>

        <div className={css.ItemThree}>
          <div>
            <img src={pic1}></img>
          </div>

          <div className={css.Items}>
            <div className={css.Three}>
              <b>How to start panning</b>
            </div>

            <span className={css.Four}>
              Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu
              usu vidit tractatos, vero tractatos ius an, in mel diceret
              persecuti. Natum petentium principes mei ea. Tota everti periculis
              vis ei, quas tibique pro at, eos ut decore ...
            </span>
            <div className={css.Five}>
              <img src={pic3}></img>
              <button>Add to your bookmarks</button>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

const styles = {
  first: {
    backgroundImage: `url(${pic2})`,
    width: 1440,
    height: 342,
    display: "flex",
    justifyContent: "space-between",
  },
  second: {
    backgroundImage: `url(${pic4})`,
    backgroundPosition: "center",
    width: "1440px",
    height: "865px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display:'flex',
    flexDirection:'column',
  },
};
