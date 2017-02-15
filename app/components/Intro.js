import React, {Component} from "react";
import Header from "./Header";
import Description from "./Description";

export default class Intro extends Component{

    renderIntro(){
        return(
            <section id="intro">
                <Header titre={this.props.intro.titre} sousTitre={this.props.intro.sousTitre} />
                <Description image={this.props.intro.image} description={this.props.intro.texte} />
            </section>
        )
    }

    render(){
        return this.renderIntro();
    }
}
