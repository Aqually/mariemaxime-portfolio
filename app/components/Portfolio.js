// classe
import React, {Component} from "react";
import Projets from "./Projets";
import _ from 'lodash';

//fonction pour corrigé le bug de view height sur mobile
function calcVH() {
    let vH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    console.log(vH);
    let list = document.getElementsByClassName("projet")
    for (let i = 0; i < list.length; i++){
        list[i].style.height = vH + "px";
        list[i].style.maxHeight = vH + "px";
        list[i].style.minHeight = vH + "px";
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
