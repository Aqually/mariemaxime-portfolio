import React, {Component} from "react";
import Header from "./Header"
import Menu from "./Menu"
import Description from "./Description";
import Projets from "./Projets";
require("../style.css");

export default class Main extends Component {
  render() {
    return (
        <main>
            <Menu />
            <div id="intro">
                <Header />
                <Description />
            </div>
            <Projets />
        </main>
    );
  }
}
