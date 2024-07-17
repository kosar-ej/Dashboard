import React from "react";
import { Col, Row } from "antd";

const AssestsHeader = () => {
  return (
    <div className="assest-header">
      <Row>
        <Col md={2} xs={4} >
          <span>Grade</span>
        </Col>
        <Col md={12} xs={4}>
          <span>Name</span>
        </Col>
        <Col md={6} xs={10}>
          <span>Total Vulnerabilities</span>
        </Col>
        <Col md={4} xs={6}>
          <span>Last Seen</span>
        </Col>
      </Row>
    </div>
  );
};

export default AssestsHeader;
