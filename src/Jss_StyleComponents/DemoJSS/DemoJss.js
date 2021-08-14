import React, { Component } from "react";
import { Button, SmallButton } from "../_components/Button";
import { StyleLink } from "../_components/Link";
import { TextField } from "../_components/TextField";

export default class DemoJss extends Component {
  render() {
    return (
      <div>
        <Button className="button_style" bgPrimary fontSize2x>Hello</Button>
        <SmallButton>hello Dung</SmallButton>
        <StyleLink>hello Nguyen</StyleLink>
        <TextField inputColor=""/>
      </div>
    );
  }
}
