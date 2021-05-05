import React from "react";
import { FirstBlock } from "../FirstBlock/index";
import { SecondBlock } from "../SecondBlock/index";
import { ThirdBlock } from "../ThirdBlock";
import { FourBlock } from "../FourBlock";
import { FiveBlock } from "../FiveBlock";
import { SixBlock } from "../SixBlock";

export const Home = () => {
  return (
    <div>
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
      <FourBlock />
      <FiveBlock />
      <SixBlock />
    </div>
  );
};
