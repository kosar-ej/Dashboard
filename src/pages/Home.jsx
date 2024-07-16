import React from "react";
import Card from "../components/Card";
import { Col, Row } from "antd";
import AssestsHeader from "../components/AssestsHeader";
import AssestsCard from "../components/AssestsCard";

const Home = () => {
  return (
    <Row justify={'center'}>
      <Col span={22}>
        <br />
        <div className="flex-between">
          <Card title='Domains' bkColor='rgba(223, 103, 16, 1)' />
          <Card title='IP Addresses' bkColor='rgba(86, 83, 146, 1)' />
          <Card title='Accounts' bkColor='rgba(209, 176, 3, 1)' />
        </div>
        <br />
        <div className="assest-container">
            <span className="assest-container-title">
                Assests
            </span>
            <br />
            <br />
            <br />
            <br />
            <AssestsHeader/>
            <AssestsCard/>
            <AssestsCard/>
        </div>
      </Col>
    </Row>
  );
};

export default Home;
