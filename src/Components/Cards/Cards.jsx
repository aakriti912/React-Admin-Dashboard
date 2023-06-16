import React from "react";
import "./Cards.css";
import {Carddata}  from "../../Data/Data"
import Card from "../Card/Card";

const Cards = () => {
  return (
    <div className="Cards">
      {Carddata.map((item, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={item.title}
              color={item.color}
              barValue={item.barValue}
              value={item.value}
              series={item.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
