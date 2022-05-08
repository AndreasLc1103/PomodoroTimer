import { auto } from "@popperjs/core";
import React from "react";
import { Container, Row, Col } from "reactstrap";
import ControlsComponent from "./ControlsComponent";
import TimeDisplay from "../TimerComponents/TimeDisplay";

class TimerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.activeTimer = null;
    this.state = {
      isStarted: false,
      isComplete: false,
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
      if (currentTime.seconds < 10) {
        currentTime.seconds = "0" + String(currentTime.seconds - 1);
      } else {
        currentTime.seconds = String(currentTime.seconds - 1);
      }
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
    // ends the interval and sets the state
    clearInterval(this.activeTimer);
    const state = {
      isStarted: false,
      workTimerActive: this.state.workTimerActive,
      breakTimerActive: this.state.breakTimerActive,
      workTime: this.state.workTime,
      breakTime: this.state.workTime,
      timer: { minutes: null, seconds: "00" },
    };
    switch (this.handleActiveTimer()) {
      case "BreakTime":
        state.timer.minutes = this.state.breakTime;
        break;
      case "WorkTime":
        state.timer.minutes = this.state.workTime;
        break;
      default:
        state.timer.minutes = "00";
        break;
    }
    return state;
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
    if (this.checkSelectedTimes()) {
      this.setActiveTimer();
      this.tick();
    }
  }
  /**
   * checkSelectedTimes() ensures the user enters
   * both the work and break times for the timer
   */
  checkSelectedTimes() {
    if (this.state.breakTime === null && this.state.workTime === null) {
      alert("you will need to select both a break and work time interval.");
      return false;
    } else if (this.state.breakTime === null) {
      alert("you will need to select a break time interval.");

      return false;
    } else if (this.state.workTime === null) {
      alert("You will need to select a work time interval.");
      return false;
    } else return true;
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
  /**
    handleResetOnclick is a handler function that 
    is used to call set state on the component after
    clicking the reset button
   */
  handleResetOnclick() {
    this.setState(this.reset());
  }
  /**
   * handleSelectedWorkTime() is a handler function used to
   * call a setState on the componenent after it is called.
   * @param {Event} e given event to get value.
   */
  handleSelectedWorkTime(e) {
    this.setState({ workTime: e.target.value });
  }
  handleSelectedBreakTime(e) {
    this.setState({ breakTime: e.target.value });
  }
  /**
   * handleActiveTimer() is responsible for
   * returing which timer is active to allow for easier
   * manipulation and management of state.
   */
  handleActiveTimer() {
    if (this.state.breakTimerActive && this.state.breakTime !== null) {
      return "BreakTime";
    }
    if (this.state.workTimerActive && this.state.workTime !== null) {
      return "WorkTime";
    }

    return null;
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
