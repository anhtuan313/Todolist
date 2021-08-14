import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";

const configDarkTheme = {
  background: "#000",
  color: "#3333cc",
  fontWeight: "italic",
  fontSize: "40px",
};

const configLightTheme = {
  background: "orange",
  color: "#fff",

  fontWeight: 300,
  fontSize: "10px",
};

export default class DemoThemes extends Component {
  state = { currentTheme: configDarkTheme };
  handleChangeTheme = (event) => {
    this.setState({
      currentTheme:
        event.target.value === "1" ? configDarkTheme : configLightTheme,
    });
  };
  render() {
    const DivStyle = styled.div`
      color: ${(props) => props.theme.background};
      padding: 5%;
      background-color: ${(props) => props.theme.color};
      font-size: ${(props) => props.theme.fontSize};
      font-weight: ${(props) => props.theme.fontWeight};
    `;

    return (
      <ThemeProvider theme={this.state.currentTheme}>
        <DivStyle>Hello</DivStyle>
        <select onChange={this.handleChangeTheme}>
          <option value="1">Dark</option>
          <option value="2">Light</option>
        </select>
      </ThemeProvider>
    );
  }
}
