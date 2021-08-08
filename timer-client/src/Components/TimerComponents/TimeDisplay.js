import React from "react";
import { ReactDOM } from "react-dom";
import { Col, Container, Row } from "reactstrap";

/**
 * TimeDisplay is a React Component responsible
 * for displaying the timer's current to the webpage
 * @AndreasLc1103
 */
class TimeDisplay extends React.Component {
  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col></Col>
          <Col className="time">
            {this.props.minutes + ":" + this.props.seconds}
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}
export default TimeDisplay;
