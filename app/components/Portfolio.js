// classe
import React, {Component} from "react";
import Projets from "./Projets";
import _ from 'lodash';

export default class Portfolio extends Component {

    renderProjets() {
        const projets = _.sortBy(this.props.projets.listeProjets, 'id');
        return _.map(projets, (projet, key) => {
            return <Projets key={projet.id} projet={projet}/>
        });
    }

    changerHeightDesProjets() {
        const hauteurEcran = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        const largeurEcran = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        const lesProjets = document.getElementsByClassName("projet")
        for (let i = 0; i < lesProjets.length; i++) {
            if(hauteurEcran > largeurEcran){
                lesProjets[i].style.maxHeight = hauteurEcran + "px";
                lesProjets[i].style.minHeight = largeurEcran + "px";
            }else{
                lesProjets[i].style.maxHeight = largeurEcran + "px";
                lesProjets[i].style.minHeight = hauteurEcran + "px";
            }
        }
    }

    componentDidMount() {
        this.changerHeightDesProjets();
    }

    render() {
        return (
            <section id="sectionProjet">
                <h2>{this.props.projets.titre}</h2>
                {this.renderProjets()}
            </section>
        )
    }
}
