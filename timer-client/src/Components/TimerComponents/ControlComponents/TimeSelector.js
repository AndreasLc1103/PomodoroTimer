import { auto } from "@popperjs/core";
import React from "react";
import { ReactDOM } from "react-dom";
import { Container, Row, Col, CustomInput } from "reactstrap";

/**
 * TimeSelector is a React component
 * that displays and lables time increments with a label and a
 */
class TimeSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { target: "" };
  }

  handleChange(event) {
    this.setState({ target: event.target.value });
  }

  render() {
    const typeSelect = this.props.typeSelect;
    switch (typeSelect) {
      case "breakTime":
        return (
          <Container>
            <Row className="select_text">
              <Col className="control_Selector">
                <label className="select_text" for="break_selector">
                  Break Times
                </label>
              </Col>
            </Row>
            <Row xs={1} className="select_text">
              <Col className="control_Selector" sm={3}>
                <CustomInput
                  className
                  type="select"
                  id="break_selector"
                  value={this.state.target}
                  onChange={(e) => this.handleChange(e)}
                >
                  <option value=""></option>
                  <option value={5}>5 Minutes</option>
                  <option value={10}>10 Minutes</option>
                </CustomInput>
              </Col>
            </Row>
          </Container>
        );
      case "workTime":
        return (
          <div>
            <label>
              Work Times
              <select
                id="work_selector"
                value={this.state.target}
                onChange={(e) => this.handleChange(e)}
              >
                <option value=""></option>
                <option value={25}>25 Minutes</option>
                <option value={50}>50 Minutes</option>
              </select>
            </label>
          </div>
        );
      default:
        return null;
    }
  }
}
export default TimeSelector;
