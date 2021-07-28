import { auto } from "@popperjs/core";
import React from "react";
import { ReactDOM } from "react-dom";
import { Container, Row, Col } from "reactstrap";
import ControlsComponent from "./ControlsComponent";
import TimeDisplay from "../TimerComponents/TimeDisplay";

class TimerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workTimerActive: false,
      breakTimerActive: false,
      current_timer: {
        mintutes: "00",
        seconds: "00",
      },
    };
  }
  /**
   * Tick is a function that manages the timer state and decrements the count used to keep track of time
   */
  Tick() {
    const current_time = { ...this.current_timer };
    this.current_time.mintutes = Number(this.current_time.mintutes);
    this.current_time.seconds = Number(this.current_time.seconds);
    if (current_time.seconds === 0 && current_time.seconds !== 0) {
      this.current_time.mintutes = String(this.current_time.seconds - 1);
      this.current_time.seconds = "59";
    } else if (current_time.seconds === 0 && current_time.mintutes === 0) {
      // Thinking on what to do
    } else {
      this.current_time.seconds = String(this.current_time.seconds - 1);
    }

    this.setState({ current_time: { ...current_time } });
  }

  render() {
    return (
      <Container className="themed-container" fluid={true}>
        <Row>
          <Col></Col>
          <Col>
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
          <Col>{<TimeDisplay current_time={this.state.current_timer} />}</Col>
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
