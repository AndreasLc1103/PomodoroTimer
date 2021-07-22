import { auto } from "@popperjs/core";
import React from "react";
import { ReactDOM } from "react";
import { Container, Row, Col, Button, FormGroup } from "reactstrap";
import TimeSelector from "./ControlComponents/TimeSelector";

/**
 * ControlsComponent is a React Class Component.
 * This class is intended to create and render a view of all
 * user controls.
 * @AndreasLc1103
 */
class ControlsComponent extends React.Component {
  /**
   *render() renders jsx to display to the user the control
   elements of this component.
   * @returns A genertated view 
   */
  render() {
    return (
      <Container fluid={true}>
        {/* Stores all the components in a single row. */}
        <Row>
          {/* Creates the left most column*/}
          <Col xs={auto} sm={6} md={6} lg={6}>
            <FormGroup>
              <TimeSelector typeSelect="workTime" />
            </FormGroup>
            <Button color="primary" size="sm" block>
              Start
            </Button>
          </Col>
          {/* Creates the right most column*/}
          <Col xs={auto} sm={6} md={6} lg={6}>
            <FormGroup>
              <TimeSelector typeSelect="breakTime" />
            </FormGroup>
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
