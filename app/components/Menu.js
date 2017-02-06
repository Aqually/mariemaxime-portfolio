import React, {Component} from "react";

export default class Menu extends Component{
    render(){
        return (
            <nav>
                <ul>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Compétences</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        )
    }
}
