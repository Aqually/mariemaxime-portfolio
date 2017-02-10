import React, {Component} from "react";


const imgProjet = require('../img/tetrabloc.jpg');
const iconGit = require('../icons/github.png');
const iconLink = require('../icons/link.png');

const style = {
    backgroundImage: "url(" + imgProjet + ")",
}

export default class Projets extends Component{
    render(){
        console.log(this.props)
        return (
            <article className="projet" style={style}>
                <div>
                    <h3>TetraBlock</h3>
                    <p>Jeu de bloc basé sur Tetris</p>
                    <div>
                        <a href="#" alt="lien vers le projet"><img className="icon" src={iconLink} /></a>
                        <a href="#" alt="lien vers le github du projet"><img className="icon" src={iconGit} /></a>
                    </div>
                </div>
            </article>
        )
    }
}
