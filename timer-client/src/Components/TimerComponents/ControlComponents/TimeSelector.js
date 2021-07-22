import { auto } from "@popperjs/core";
import React from "react";
import { ReactDOM } from "react-dom";
import { Container, Row, Col, CustomInput } from "reactstrap";

/**
 * TimeSelector is a react Component intended to provide control
 * for the user to select a specific time interval
 */
class TimeSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { target: "" };
  }
  /**
   * handles change to the select and sets state
   * to the component.
   * @param {*} event
   */
  handleChange(event) {
    this.setState({ target: event.target.value });
  }
  /**
   * render() displays a view to the webpage.
   * @returns jsx to render to the webpage
   */
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
          <Container>
            <Row className="select_text">
              <Col className="control_Selector">
                <label className="select_text" for="break_selector">
                  Work Times
                </label>
              </Col>
            </Row>
            <Row xs={1} className="select_text">
              <Col className="control_Selector" sm={3}>
                <CustomInput
                  className
                  type="select"
                  id="work_selector"
                  value={this.state.target}
                  onChange={(e) => this.handleChange(e)}
                >
                  <option value=""></option>
                  <option value={25}>25 Minutes</option>
                  <option value={50}>50 Minutes</option>
                </CustomInput>
              </Col>
            </Row>
          </Container>
        );
      default:
        return null;
    }
  }
}
export default TimeSelector;
