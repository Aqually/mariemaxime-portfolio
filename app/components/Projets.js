import React, {Component} from "react";


const imgProjet = require('../img/tetrabloc.jpg');

const style = {
    backgroundImage: "url(" + imgProjet + ")",
    width: "100%",
    height: "300px"
}

export default class Projets extends Component{
    render(){
        return (
            <div id="projets">
                <h2>MES PROJETS</h2>
                <article className="projet" style={style}>

                </article>
            </div>
        )
    }
}
