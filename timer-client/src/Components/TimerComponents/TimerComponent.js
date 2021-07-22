import { auto } from "@popperjs/core";
import React from "react";
import { ReactDOM } from "react-dom";
import { Container, Row, Col } from "reactstrap";
import ControlsComponent from "./ControlsComponent";

class TimerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workTimerActive: false,
      breakTimerActive: false,
      current_timer: ["00", ":", "00"],
    };
  }

  render() {
    return (
      <Container className="themed-container" fluid={true}>
        <Row>
          <Col></Col>

          <Col xs={6} sm={6} md={8} lg={8} xl={8}>
            {/*This is to store the heading */}
            <Container>
              <Row>
                <h1 className="title_info">PomodoroTimer</h1>
              </Row>
            </Container>
          </Col>
          <Col></Col>
        </Row>
        <Row className="TimeDisplay">
          <Col></Col>
          <Col>{this.state.current_timer}</Col>
          <Col></Col>
        </Row>
        <Row className="controls">
          <Col></Col>
          <Col xs={auto} sm={auto} md={8} lg={8} xl={8}>
            <ControlsComponent />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

export default TimerComponent;
