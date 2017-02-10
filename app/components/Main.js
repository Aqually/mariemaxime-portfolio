import React, {Component, PropTypes} from "react";
import Header from "./Header"
import Menu from "./Menu"
import Description from "./Description";
import Projets from "./Projets";
import Contact from "./Contact";
import Footer from "./Footer";
import {connect} from "react-redux";
import {fetchData} from "../actions/index";

class Main extends Component {

    state = { portfolio: '' };

    componentWillMount() {
        this.props.fetchData();
    }

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
                    <Projets/>
                </section>
                <section id="contact">
                    <h2>Contacte-moi</h2>
                    <Contact/>
                </section>
                <Footer/>
            </main>
        );
    }
}

function mapStateToProps(state){
    return {portfolio: state.portfolio};
}

export default connect(mapStateToProps,fetchData)(Main);
