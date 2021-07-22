import React from "react";
import { ReactDOM } from "react";
import { Container, Row, Col, Button, FormGroup } from "reactstrap";
import TimeSelector from "./ControlComponents/TimeSelector";

class ControlsComponent extends React.Component {
  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col xs={6} sm={6} md={6} lg={6}>
            <FormGroup>
              <TimeSelector typeSelect="workTime" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <TimeSelector typeSelect="breakTime" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button color="primary" size="sm" block>
              Start
            </Button>
          </Col>
          <Col>
            <Button color="danger" size="sm" block>
              reset
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default ControlsComponent;
