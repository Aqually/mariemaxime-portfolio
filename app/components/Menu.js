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
                    <a className="nav-item" href="">{this.props.menu.profil.titre}</a>
                    <a className="nav-item" href="">{this.props.menu.portfolio.titre}</a>
                    <a className="nav-item" href="">{this.props.menu.contact.titre}</a>
                </nav>
            </div>
        )
    }
}
