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

    changerHeightDesProjets(){
        let hauteurEcran = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        console.log(hauteurEcran);
        let lesProjets = document.getElementsByClassName("projet")
        for (let i = 0; i < lesProjets.length; i++){
            lesProjets[i].style.height = hauteurEcran + "px";
            lesProjets[i].style.maxHeight = hauteurEcran + "px";
            lesProjets[i].style.minHeight = hauteurEcran + "px";
        }
    }

    componentDidMount(){
        console.log("test");
        this.changerHeightDesProjets();
        window.addEventListener('resize', this.changerHeightDesProjets.bind(this), true);
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.changerHeightDesProjets.bind(this), true);
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
