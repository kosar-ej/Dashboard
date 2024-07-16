import React from "react";
import ChartImage from "../assets/images/chart.svg";
import GlobeImage from "../assets/images/Globe.svg";
import ConflictImage from "../assets/images/Conflict.svg";
import BugImage from "../assets/images/Bug.svg";
import EarthPlanetImage from "../assets/images/EarthPlanet.svg";
import DownLeftArrowImage from "../assets/images/DownLeft Arrow.svg";

const Card = ({ title, bkColor }) => {
  return (
    <div className="card">
      <div className="flex-top">
        <div className="card-baner" style={{ backgroundColor: bkColor }}>
          <img src={EarthPlanetImage} alt="EarthPlanetImage" />
          <div className="card-baner-num-container">
            <span>300</span>
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
        <div className="flex-coulmn">
          <span className="card-text">Live</span>
          <span className="card-number">60</span>
        </div>
        <img className="card-chart-img" src={ChartImage} alt="chart" />
        <div className="flex-coulmn">
          <span className="card-text">Monitored</span>
          <span className="card-number">920</span>
        </div>
        <img className="card-chart-img" src={ChartImage} alt="chart" />
      </div>
      <hr />
      <div className="flex-between">
        <div className="flex-small">
          <div className="card-primary-square">
            <img src={GlobeImage} alt="GlobeImage" />
          </div>
          <div className="flex-coulmn">
            <span className="card-text">IPs</span>
            <span className="card-number">6</span>
          </div>
        </div>
        <div className="flex-small">
          <div className="card-primary-square">
            <img src={ConflictImage} alt="ConflictImage" />
          </div>
          <div className="flex-coulmn">
            <span className="card-text">Ports</span>
            <span className="card-number">157</span>
          </div>
        </div>
        <div className="flex-small">
          <div className="card-primary-square">
            <img src={BugImage} alt="BugImage" />
          </div>
          <div className="flex-coulmn">
            <span className="card-text">Vulns</span>
            <span className="card-number">8</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
