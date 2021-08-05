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
   * Calls the parent components stop function.
   */
  handleStartClick() {
    this.props.onStartClick();
  }
  /**
   * handlePauseClick() lifts
   * state to the lowest common parent to pause
   * the timer.
   */
  handlePauseClick() {
    this.props.onPauseClick();
  }
  /**
   *handleReset() is a
   */
  handleReset() {
    this.props.handleResetClick();
  }

  handleWorkTimeSelect(e) {
    this.props.handleWorkTimeChoice(e);
  }
  handleBreakTimeSelect(e) {
    this.props.handleBreakTimeChoice(e);
  }
  /**
   *render() renders jsx to display to the user the control
   elements of this component.
   * @returns A genertated view 
   */
  render() {
    let activeButton = null;

    const startButton = (
      <Button
        color="primary"
        size="sm"
        block
        onClick={() => this.handleStartClick()}
      >
        Start
      </Button>
    );
    const pauseButton = (
      <Button
        color="secondary"
        size="sm"
        block
        onClick={() => this.handlePauseClick()}
      >
        Pause
      </Button>
    );
    if (!this.props.active) {
      activeButton = startButton;
    } else {
      activeButton = pauseButton;
    }

    return (
      <Container fluid={true}>
        {/* Stores all the components in a single row. */}
        <Row>
          {/* Creates the left most column*/}
          <Col xs={auto} sm={6} md={6} lg={6}>
            <FormGroup>
              <TimeSelector
                typeSelect="workTime"
                handleChange={(e) => this.handleWorkTimeSelect(e)}
              />
            </FormGroup>
            {activeButton}
          </Col>
          {/* Creates the right most column*/}
          <Col xs={auto} sm={6} md={6} lg={6}>
            <FormGroup>
              <TimeSelector
                typeSelect="breakTime"
                handleChange={(e) => this.handleBreakTimeSelect(e)}
              />
            </FormGroup>
            <Button
              color="danger"
              size="sm"
              block
              onClick={() => this.handleReset()}
            >
              reset
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default ControlsComponent;
