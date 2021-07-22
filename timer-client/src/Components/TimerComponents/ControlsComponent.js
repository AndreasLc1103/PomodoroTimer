import React from "react";
import { ReactDOM } from "react";
import { Container, Row, Col } from "reactstrap";
import TimeSelector from "./ControlComponents/TimeSelector";

class ControlsComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col>
            <TimeSelector typeSelect="workTime" />
          </Col>
          <Col>
            <TimeSelector typeSelect="breakTime" />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default ControlsComponent;
