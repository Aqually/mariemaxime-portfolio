import React, {Component} from "react";
const iconGit = require('../icons/github.png');
const iconLink = require('../icons/link.png');

const url = "portfolio/tetrabloc.jpg";

export default class Projets extends Component {

    render() {
        const style = {
            backgroundImage: 'url(' + this.props.projet.url + ')',
        }

        return (
            <article style={style} className={"projet "}>
                <div>
                    <h3>{this.props.projet.titre}</h3>
                    <p>{this.props.projet.description}</p>
                    <div>
                        <a href={this.props.projet.lien} alt="lien vers le projet"><img className="icon" src={iconLink}/></a>
                        <a href={this.props.projet.github} alt="lien vers le github du projet"><img className="icon" src={iconGit}/></a>
                    </div>
                </div>
            </article>
        )
    }
}
