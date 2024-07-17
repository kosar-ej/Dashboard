import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { Col, Empty, Row, Skeleton } from "antd";
import AssestsHeader from "../components/AssestsHeader";
import AssestsCard from "../components/AssestsCard";
import EarthPlanetImage from "../assets/images/EarthPlanet.svg";
import CloudImage from "../assets/images/Cloud.svg";
import { myRequest } from "../js/Function";

const Home = () => {
  //define states
  const [assets, setAssets] = useState([]);
  const [domain, setDomain] = useState([]);
  const [ip, setIp] = useState([]);
  const [cloud, setCloud] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterType, setFilterType] = useState("");
  const [loadingFilter, setLoadingFilter] = useState(false);

  //after geeting data from api successfully
  const onSuccess = (response) => {
    setAssets(response.data.assets);
    setDomain(response.data.domain);
    setIp(response.data.ip);
    setCloud(response.data.cloud);
    setLoading(false);
  };

  //get data from api
  const getData = () => {
    setLoading(true);
    myRequest(
      {
        url: "https://run.mocky.io/v3/775dbd89-9369-4928-a9c1-71c39bffeefd",
        method: "get",
        timeout: 15000,
        dataType: "application/json",
      },
      (response) => {
        onSuccess(response);
      },
      () => {
        setLoading(false);
      }
    );
  };

  //filter assets with type
  const filterAssets = () => {
    setLoadingFilter(true);
    myRequest(
      {
        url: "https://run.mocky.io/v3/775dbd89-9369-4928-a9c1-71c39bffeefd",
        method: "get",
        timeout: 15000,
        dataType: "application/json",
      },
      (response) => {
        let filterData = [];
        response.data.assets.map((asset) => {
          if (asset.type === filterType) {
            filterData.push(asset);
          }
        });
        setAssets(filterData);
        setLoadingFilter(false);
      },
      () => {
        setLoadingFilter(false);
      }
    );
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (filterType.length > 0) {
      filterAssets();
    }
  }, [filterType]);

  return (
    <Row justify={"center"}>
      <Col span={22}>
        <br />
        <div className="card-container">
          <Card
            title="Domains"
            bkColor="rgba(223, 103, 16, 1)"
            src={EarthPlanetImage}
            loading={loading}
            cardData={domain}
            onClick={() => {
              setFilterType("domain");
            }}
          />
          <Card
            title="IP Addresses"
            bkColor="rgba(86, 83, 146, 1)"
            src={EarthPlanetImage}
            loading={loading}
            cardData={ip}
            onClick={() => {
              setFilterType("ip");
            }}
          />
          <Card
            title="Accounts"
            bkColor="rgba(209, 176, 3, 1)"
            src={CloudImage}
            loading={loading}
            cardData={cloud}
            onClick={() => {
              setFilterType("cloud");
            }}
          />
        </div>
        <br />
        <div className="assest-container">
          <span className="assest-container-title">Assets</span>
          <br />
          <br />
          <br />
          <br />
          <AssestsHeader />
          {loading || loadingFilter ? (
            <Skeleton />
          ) : assets && assets.length > 0 ? (
            assets.map((assest, index) => {
              return <AssestsCard assest={assest} key={index} />;
            })
          ) : (
            <Empty />
          )}
        </div>
        <br />
      </Col>
    </Row>
  );
};

export default Home;
