import React, {Component} from "react";
import Header from "./Header"
import Menu from "./Menu"
require("../style.css");

export default class Main extends Component {
  render() {
    return (
        <div>
            <Menu />
            <Header />
        </div>
    );
  }
}
