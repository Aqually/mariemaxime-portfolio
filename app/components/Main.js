import React, {Component} from "react";
import Menu from "./Menu";
import Intro from "./Intro";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";
import {connect} from "react-redux";
import {fetchPortFolio} from "../actions";

class Main extends Component {

    componentWillMount() {
        console.log(this.props);
        this.props.fetchPortFolio();
    }

    render() {
        if(this.props.portfolio.menu === undefined){
            return (<div></div>);
        }
        return (
            <main>
                <Menu menu={this.props.portfolio.menu} />
                <Intro intro={this.props.portfolio.intro} />
                <Portfolio projets={this.props.portfolio.projets} />
                <Contact contact={this.props.portfolio.contact} />
                <Footer footer={this.props.portfolio.footer}/>
            </main>
        );
    }
}

function mapStateToProps(state){
    return {portfolio: state.portfolio}
}

export default connect(mapStateToProps,{fetchPortFolio})(Main);
