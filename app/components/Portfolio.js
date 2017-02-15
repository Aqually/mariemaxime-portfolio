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

    fixVH() {
        function calcVH() {
            let vH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            let list = document.getElementsByClassName("projet")
            for (let i = 0; i < list.length; i++){
                list[i].setAttribute(" style ", " height : " + vH + " px;");
            }
        }
        calcVH();
        window.addEventListener('resize', calcVH, true);
        window.addEventListener('onorientationchange', calcVH, true);
    }

    render() {
        return (
            <section id="sectionProjet">
                <h2>{this.props.projets.titre}</h2>
                { this.renderProjets() }
                {this.fixVH()}
            </section>
        )
    }
}
