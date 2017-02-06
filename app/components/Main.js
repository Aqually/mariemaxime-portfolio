import React, {Component} from "react";
import Header from "./Header"
import Menu from "./Menu"
import Description from "./Description";
require("../style.css");

export default class Main extends Component {
  render() {
    return (
        <main>
            <div id="intro">

                <Header />
                <Description />
                                <Menu />
            </div>
        </main>
    );
  }
}
