// classe
import React, {Component} from "react";
import Projets from "./Projets";
import {connect} from "react-redux";
import {fetchPortFolio} from "../actions";
import _ from 'lodash';

class Portfolio extends Component{

    componentWillMount() {
        this.props.fetchPortFolio();
    }

    renderProjets(){
        return _.map(this.props.portfolio.projets, (projet, key) => {
          return <Projets key={key} projet={projet}/>
        });
    }

    render(){
        if(this.props.portfolio.projets === undefined){

            return (<div>Loading</div>)
        }
        return (
            <div>
                {this.renderProjets()}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {portfolio: state.portfolio}
}

export default connect(mapStateToProps,{fetchPortFolio})(Portfolio);
