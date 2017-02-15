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
        console.log("???");
        function calcVH() {
            let vH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            let list = document.getElementsByClassName("projet")
            console.log(list);
            for (let i = 0; i < list.length; i++){
                list[i].style.height = vH + "px";
                list[i].style.maxHeight = vH + "px";
                list[i].style.minHeight = vH + "px";
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
