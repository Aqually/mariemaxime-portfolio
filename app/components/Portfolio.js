// classe
import React, {Component} from "react";
import Projets from "./Projets";
import _ from 'lodash';

function calcVH() {
    let vH = screen.height;
    let list = document.getElementsByClassName("projet")
    for (let i = 0; i < list.length; i++){
        list[i].style.top = 'auto';
        list[i].style.bottom = 0;
        list[i].style.height = vH;
        list[i].style.maxHeight = vH;
        list[i].style.minHeight = vH;
    }
}

export default class Portfolio extends Component {

    renderProjets() {
        const projets = _.sortBy(this.props.projets.listeProjets, 'id');
        return _.map(projets, (projet, key) => {
            return <Projets key={projet.id} projet={projet}/>
        });
    }

    componentDidMount(){
        calcVH();
        window.addEventListener('resize', calcVH, true);
        window.addEventListener('onorientationchange', calcVH, true);
    }

    render() {
        return (
            <section id="sectionProjet">
                <h2>{this.props.projets.titre}</h2>
                { this.renderProjets() }
            </section>
        )
    }
}
