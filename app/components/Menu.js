import React, {Component} from "react";
import _ from 'lodash';

export default class Menu extends Component{

    renderListeMenu(){
        const liens = _.sortBy(this.props.menu, 'id');
        return _.map(liens, (lien, key) => {
            return (<li key={lien.titre}><a className="nav-item" href={lien.url}>{lien.titre}</a></li>);
        });
    }


    render(){
        return (
            <div className="container">
                <input id="toggle" type="checkbox" />

                <label className="toggle-container" htmlFor="toggle">
                    <span className="button button-toggle"></span>
                </label>

                <nav className="nav">
                    {this.renderListeMenu()}
                </nav>
            </div>
        )
    }
}
