import React, { useState } from "react";
import { layoutId } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Card.css";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";

function Card(props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="Card">
      <layoutId>
        {expanded ? (
          <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
        ) : (
          <CompactCard param={props} setExpanded={() => setExpanded(true)} />
        )}
      </layoutId>
    </div>
  );
}

const CompactCard = ({ param, setExpanded }) => {
  return (
    <div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      onClick={setExpanded}
    >
      <div className="radialBar">
        <CircularProgressbar
          styles={{ color: "White" }}
          value={param.barValue}
          text={`${param.barValue}%`}
        />
      </div>

      <div className="detail">
        <span>${param.value}</span>
        <span
          style={{
            position: "relative",
            right: "178px",
            paddingTop: "45px",
            fontWeight: "bold",
          }}
        >
          {param.title}
        </span>
        <p>Last 24 hours</p>
      </div>
    </div>
  );
};

function ExpandedCard({ param, setExpanded }) {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      dropShadow: {
        enabled: false,
        enabledOnseries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },
      fill: {
        color: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
        grid: {
          show: true,
        },
        xaxis: {
          type: "datetime",
        },
      },
    },
  };

  return (
    <div
      className="c"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
    >
      <div style={{ alignSelf: "flex-end", color: "white", curser: "pointer" }}>
        <UilTimes onClick={setExpanded} />
      </div>
      <span >{param.title}</span>
      <div className="chartContainer">
        <Chart series={param.series} type="area" options={data.options} />
      </div>
      <span>Last 24 hr</span>
    </div>
  );
}

export default Card;
