import React from "react";
import { ReactDOM } from "react-dom";
import { Col, Container, Row } from "reactstrap";

/**
 * TimeDisplay is a React Component responsible
 * for displaying the timer's current to the webpage
 * @AndreasLc1103
 */
class TimeDisplay extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col></Col>
          <Col className="time">{this.props.current_time}</Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}
export default TimeDisplay;
