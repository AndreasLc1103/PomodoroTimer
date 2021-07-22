import React from "react";
import { ReactDOM } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import TimeSelector from "./ControlComponents/TimeSelector";

class ControlsComponent extends React.Component {
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
        <Row>
          <Col>
            <Button color="primary" size="sm" block={true}>
              Start
            </Button>
          </Col>
          <Col>
            <Button color="danger" size="lg" block>
              reset
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default ControlsComponent;
