import { auto } from "@popperjs/core";
import React from "react";
import { ReactDOM } from "react-dom";
import { Container, Row, Col } from "reactstrap";
import ControlsComponent from "./ControlsComponent";
import TimeDisplay from "../TimerComponents/TimeDisplay";

class TimerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.activeTimer = null;
    this.state = {
      isStarted: false,
      workTimerActive: true,
      breakTimerActive: false,
      workTime: null,
      breakTime: null,
      timer: {
        minutes: "00",
        seconds: "00",
      },
    };
  }

  /**
   * updateTimer handles the state of the timer and updates the time.
   */
  updateTimer() {
    const currentTime = { ...this.state.timer };
    currentTime.minutes = Number(currentTime.minutes);
    currentTime.seconds = Number(currentTime.seconds);
    if (currentTime.minutes !== 0 && currentTime.seconds === 0) {
      currentTime.minutes = String(currentTime.minutes - 1);
      currentTime.seconds = "59";
    } else if (currentTime.seconds === 0 && currentTime.minutes === 0) {
      // Thinking on what to do
      this.handleStop();
    } else {
      currentTime.seconds = String(currentTime.seconds - 1);
    }
    console.log("I am making it here\n " + JSON.stringify(currentTime));
    this.setState({ timer: { ...currentTime } });
  }
  /**
   * Tick is a function that manages the timer state and decrements the count used to keep track of time
   */
  tick() {
    this.activeTimer = setInterval(() => this.updateTimer(), 1000);
  }
  /**
   * Reset() is used to reinitalize the timer to the intial state.
   */
  reset() {
    clearInterval(this.activeTimer);
    return {
      isStarted: false,
      workTimerActive: this.state.workTimerActive,
      breakTimerActive: this.state.breakTimerActive,
      workTime: this.state.workTime,
      breakTime: this.state.workTime,
      timer: { minutes: this.state.workTime, seconds: "00" },
    };
  }
  /**
   * handleStop cancels the interval function that is called.
   */
  handleStop() {
    clearInterval(this.activeTimer);
    this.setState({ isStarted: false });
  }
  /**
   * initiates the timer clock to start decrementing
   */
  handleStartClicked() {
    this.setActiveTimer();
    this.tick();
  }

  setActiveTimer() {
    if (this.state.breakTimerActive) {
      this.setState({
        isStarted: true,
        breakTimerActive: true,
        workTimerActive: false,
        timer: {
          minutes: String(this.state.breakTime),
          seconds: "00",
        },
      });
    } else if (this.state.workTimerActive) {
      this.setState({
        isStarted: true,
        breakTimerActive: false,
        workTimerActive: true,
        timer: {
          minutes: String(this.state.workTime),
          seconds: "00",
        },
      });
    }
  }
  handleResetOnclick() {
    this.setState(this.reset());
  }

  handleSelectedWorkTime(e) {
    this.setState({ workTime: e.target.value });
  }
  handleSelectedBreakTime(e) {
    this.setState({ breakTime: e.target.value });
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
          <Col>
            {
              <TimeDisplay
                minutes={this.state.timer.minutes}
                seconds={this.state.timer.seconds}
              />
            }
          </Col>
          <Col></Col>
        </Row>
        <Row className="controls">
          <Col></Col>
          <Col xs={auto} sm={auto} md={8} lg={8} xl={8}>
            <ControlsComponent
              active={this.state.isStarted}
              onStartClick={() => this.handleStartClicked()}
              onPauseClick={() => this.handleStop()}
              handleBreakTimeChoice={(e) => this.handleSelectedBreakTime(e)}
              handleWorkTimeChoice={(e) => this.handleSelectedWorkTime(e)}
              handleResetClick={() => this.handleResetOnclick()}
            />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

export default TimerComponent;
