import React, { Component } from "react";

export default class Lifecycles extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  componentDidMount() {
    console.log("CDM");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("CDU");
  }

  componentWillUnmount() {
    console.log("CWU");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("should it update", nextProps);
    return nextProps.text !== this.props.text;
  }

  render() {
    console.log("render");
    return (
      <div>
        <h3>Lifecycle component</h3>
        {this.props.text}
      </div>
    );
  }
}
