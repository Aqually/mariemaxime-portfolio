// classe

import React, {Component} from "react";

export default class Description extends Component{
    render(){
        return (
            <article>
                <img src={this.props.image.url} alt={this.props.image.alt} title={this.props.image.alt} />
                <p>{this.props.description}</p>
            </article>
        )
    }
}
