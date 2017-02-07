import React, {Component} from "react";

export default class Menu extends Component{
    render(){
        return (
            <div className="container">
                <input id="toggle" type="checkbox" />

                <label className="toggle-container" htmlFor="toggle">
                    <span className="button button-toggle"></span>
                </label>

                <nav className="nav">
                    <a className="nav-item" href="">Profil</a>
                    <a className="nav-item" href="">Portfolio</a>
                    <a className="nav-item" href="">Contact</a>
                </nav>
            </div>
        )
    }
}
