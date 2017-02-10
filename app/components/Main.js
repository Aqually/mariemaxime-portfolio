import React, {Component} from "react";
import Header from "./Header"
import Menu from "./Menu"
import Description from "./Description";
import Projets from "./Projets";
import Contact from "./Contact";
import Footer from "./Footer";


export default class Main extends Component {
  render() {
    return (
        <main>
            <Menu />
            <section id="intro">
                <Header />
                <Description />
            </section>
            <section id="sectionProjet">
                <h2>Mes Projets</h2>
                <Projets />
            </section>
            <section id="contact">
                <h2>Contacte-moi</h2>
                <Contact />
            </section>
            <Footer />
        </main>
    );
  }
}
