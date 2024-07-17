import React from "react";
import ChartImage from "../assets/images/chart.svg";
import GlobeImage from "../assets/images/Globe.svg";
import ConflictImage from "../assets/images/Conflict.svg";
import BugImage from "../assets/images/Bug.svg";
import DownLeftArrowImage from "../assets/images/DownLeft Arrow.svg";
import CardItem from "./CardItem";
import CardPrimarySquare from "./CardPrimarySquare";
import { Empty, Skeleton } from "antd";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const Card = ({ title, bkColor, src, loading, cardData, onClick }) => {
  // define live chart data
  const liveData = {
    datasets: [
      {
        data: cardData.live,
        backgroundColor: "#3d7eb3",
        borderColor: "#3d7eb3",
        borderWidth: 1,
        borderRadius: 10,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    barThickness: 6,
  };

  return (
    <div className="card" onClick={onClick}>
      {loading ? (
        <Skeleton />
      ) : cardData ? (
        <>
          <div className="flex-top">
            <div className="card-baner" style={{ backgroundColor: bkColor }}>
              <img src={src} alt="EarthPlanetImage" />
              <div className="card-baner-num-container">
                <span>{cardData.total}</span>
              </div>
            </div>
            <img
              src={DownLeftArrowImage}
              alt="DownLeftArrowImage"
              width={20}
              height={20}
            />
          </div>
          <br />
          <span className="card-title">{title}</span>
          <hr />
          <div className="flex-between">
            <CardItem
              text={"Live"}
              number={cardData.live && cardData.live.length}
            />
            <img className="card-chart-img" src={ChartImage} alt="chart" />
            {/* <Bar data={data} options={options} /> */}
            <CardItem
              text={"Monitored"}
              number={cardData.monitored && cardData.monitored.length}
            />
            <img className="card-chart-img" src={ChartImage} alt="chart" />
          </div>
          <hr />
          <div className="flex-between">
            <div className="flex-small">
              <CardPrimarySquare src={GlobeImage} />
              <CardItem text={"IPs"} number={cardData.ips} />
            </div>
            <div className="flex-small">
              <CardPrimarySquare src={ConflictImage} />
              <CardItem text={"Ports"} number={cardData.ports} />
            </div>
            <div className="flex-small">
              <CardPrimarySquare src={BugImage} />
              <CardItem text={"Vulns"} number={cardData.vulns} />
            </div>
          </div>
        </>
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default Card;
