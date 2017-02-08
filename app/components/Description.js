import React, {Component} from "react";


const imgMarie = require('../img/marie-maxime-tanguay.png');


export default class Header extends Component{
    render(){
        return (
            <article>
                <img src={imgMarie} alt="Mari-Maxime Tanguay" title="Marie-Maxime Tanguay" />
                <p>JavaScript, CSS, ReactJS, Redux, PHP, WordPress</p>
            </article>
        )
    }
}
