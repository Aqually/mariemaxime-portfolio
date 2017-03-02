// classe

import React, {Component} from "react";
import {connect} from "react-redux";
import {sendEmail} from "../actions";

class Contact extends Component {
    constructor() {
        super();
        this.onSubmit = this.onSubmitMail.bind(this);
    }

    onSubmitMail(e) {
        e.preventDefault();
        const lesDonnees = {
            nom: this.refs.nom.value,
            email: this.refs.email.value,
            message: this.refs.message.value
        }
        var lesDonnees2 = {
            nom: React.findDOMNode(this.refs.nom).value,
            email: React.findDOMNode(this.refs.email).value,
            message: React.findDOMNode(this.refs.message).value
        };
        console.log(lesDonnees, lesDonnees2);

        this.props.sendEmail(lesDonnees)
            .then(function(response) {
                if(response.status === 200){
                    console.log("message envoyé! yay!")
                }else{
                    console.warn("erreur!")
                }
            }
        );
    }

    render() {
        return (
            <section id="contact">
                <h2>{this.props.contact.titre}</h2>
                <form onSubmit={this.onSubmitMail}>
                    <div>
                        <input type="text" id="name" ref="nom" name="user_name" placeholder={this.props.contact.nom} required />
                        <input type="email" id="mail" ref="email" name="user_mail" placeholder={this.props.contact.couriel} required />
                    </div>
                    <textarea id="msg" name="user_message" ref="message" placeholder={this.props.contact.message} required></textarea>
                    <button type="submit">Envoyer</button>
                </form>
            </section>
        )
    }
}

export default connect(null,{sendEmail})(Contact);
