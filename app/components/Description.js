// classe

import React, {Component} from "react";

const imgMarie = require('../img/marie-maxime-tanguay.png');


export default class Description extends Component{
    render(){
        return (
            <article>
                <img src={imgMarie} alt={this.props.image.alt} title={this.props.image.alt} />
                <p>{this.props.description}</p>
            </article>
        )
    }
}
