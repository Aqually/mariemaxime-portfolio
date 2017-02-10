import React, {Component} from "react";

const twitter = require("../icons/twitter-logo.png")
const github = require("../icons/github-logo.png")
const linkedin = require("../icons/linkedin-logo.png")

export default class Footer extends Component{
    render(){
        return (
            <footer>
                <ul>
                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                </ul>
            </footer>
        )
    }
}
