import React, {Component} from "react";
import _ from 'lodash';
import Menu from "./Menu";
import Intro from "./Intro";
import Portfolio from "./Portfolio";
import Propos from "./Propos";
import Contact from "./Contact";
import Footer from "./Footer";
import {connect} from "react-redux";
import {fetchPortFolio} from "../actions";

class Main extends Component {

    componentWillMount() {
        this.props.fetchPortFolio();
    }

    render() {
        if( this.props.portfolio === undefined){
            return (<div></div>);
        }
        return (
            <main>
                <Menu menu={this.props.portfolio.menu} />
                <Intro intro={this.props.portfolio.intro} />
                <Portfolio projets={this.props.portfolio.projets} />
                <Propos />
                <Contact contact={this.props.portfolio.contact} />
                <Footer footer={this.props.portfolio.footer}/>
            </main>
        );
    }
}

function mapStateToProps(state){
    return {portfolio: state.portfolio.portfolio}
}

export default connect(mapStateToProps,{fetchPortFolio})(Main);
