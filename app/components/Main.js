import React, {Component} from "react";
import Header from "./Header"
import Menu from "./Menu"
import Description from "./Description";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

export default class Main extends Component {

    render() {
        return (
            <main>
                <Menu/>
                <section id="intro">
                    <Header/>
                    <Description/>
                </section>
                <section id="sectionProjet">
                    <h2>Mes Projets</h2>
                    <Portfolio projets={this.props.portfolio}/>
                </section>
                <section id="contact">
                    <h2>Contacte-moi</h2>
                    <Contact/>
                </section>
            </main>
        );
    }
}
