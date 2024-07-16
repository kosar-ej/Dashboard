import React from "react";
import { Col, Row } from "antd";

const AssestsCard = () => {
  return (
    <div className="assest-card">
      <Row>
        <Col span={2}>
          <div class="hexagon">
            <div class="hexagon-inner">
              <div class="hexagon-letter">D</div>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <span>Cloud A</span>
        </Col>
        <Col span={6}>
          <span>54</span>
        </Col>
        <Col span={4}>
          <span>2023</span>
        </Col>
      </Row>
    </div>
  );
};

export default AssestsCard;
