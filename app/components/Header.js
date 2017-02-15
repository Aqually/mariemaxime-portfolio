import React, {Component} from "react";

export default class Header extends Component{
    render(){
        return (
            <header>
                <h1>{this.props.titre}</h1>
                <h2>{this.props.sousTitre}</h2>
            </header>
        )
    }
}
