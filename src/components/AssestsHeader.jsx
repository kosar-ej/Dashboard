import React from "react";
import { Col, Row } from "antd";

const AssestsHeader = () => {
  return (
    <div className="assest-header">
      <Row>
        <Col span={2}>
          <span>Grade</span>
        </Col>
        <Col span={12}>
          <span>Name</span>
        </Col>
        <Col span={6}>
          <span>Total Vulnerabilities</span>
        </Col>
        <Col span={4}>
          <span>Last Seen</span>
        </Col>
      </Row>
    </div>
  );
};

export default AssestsHeader;
