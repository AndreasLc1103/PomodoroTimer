import { auto } from "@popperjs/core";
import React from "react";
import { ReactDOM } from "react-dom";
import { Container, Row, Col, CustomInput } from "reactstrap";

/**
 * TimeSelector is a react Component intended to provide control
 * for the user to select a specific time interval
 */
class TimeSelector extends React.Component {
  /**
   * handles change to the select and sets state
   * to the component.
   * @param {*} event
   */
  handleChange(event) {
    this.props.handleChange(event);
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
          <Container fluid={true}>
            <Row className="select_text">
              <Col className="control_Selector">
                <label className="select_text" for="break_selector">
                  Break Times
                </label>
              </Col>
            </Row>
            <Row className="select_text">
              <Col xs={12} sm={12} md={12} lg={12} className="control_Selector">
                <CustomInput
                  type="select"
                  id="break_selector"
                  value={this.props.breakTime}
                  onChange={(e) => this.handleChange(e)}
                >
                  <option value="00"></option>
                  <option value={5}>5 Minutes</option>
                  <option value={10}>10 Minutes</option>
                </CustomInput>
              </Col>
            </Row>
          </Container>
        );
      case "workTime":
        return (
          <Container fluid={true}>
            <Row className="select_text">
              <Col className="control_Selector">
                <label className="select_text" for="break_selector">
                  Work Times
                </label>
              </Col>
            </Row>
            <Row className="select_text">
              <Col xs={12} sm={12} md={12} lg={12} className="control_Selector">
                <CustomInput
                  type="select"
                  id="work_selector"
                  value={this.props.workTime}
                  onChange={(e) => this.handleChange(e)}
                >
                  <option value="null"></option>
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
