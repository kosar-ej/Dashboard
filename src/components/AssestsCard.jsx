import React from "react";
import { Col, Row } from "antd";

const AssestsCard = ({assest}) => {
  return (
    <div className="assest-card">
      <Row>
        <Col span={2}>
          <div class="hexagon">
            <div class="hexagon-inner">
              <div class="hexagon-letter">
                {assest.grade}
              </div>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <span>
            {assest.name}
          </span>
        </Col>
        <Col span={6}>
          <span>
            {assest.total_vuls}
          </span>
        </Col>
        <Col span={4}>
          <span>
            {assest.lastSeen}
          </span>
        </Col>
      </Row>
    </div>
  );
};

export default AssestsCard;
