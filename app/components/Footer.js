import React, {Component} from "react";
import _ from 'lodash';

export default class Footer extends Component{

    renderMediaSociaux(){
        const medias = this.props.footer;
        return _.map(medias, (media, key) => {
            return (<li key={media.class}><a href={media.url}><i className={"fa fa-" + media.class} aria-hidden="true"></i></a></li>);
        });
    }

    render(){
        return (
            <footer>
                <ul>
                    {this.renderMediaSociaux()}
                </ul>
            </footer>
        )
    }
}
