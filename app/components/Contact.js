// classe

import React, {Component} from "react";
import {connect} from "react-redux";
import {sendEmail} from "../actions";

class Contact extends Component {
    constructor() {
        super();
        this.onSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const lesDonnees = {
            nom: this.refs.nom.value,
            email: this.refs.email.value,
            message: this.refs.message.value
        }

        this.props.sendEmail(lesDonnees)
            .then(function(response) {
                if(response.status === 200){
                    console.log("message envoyé! yay!")
                }else{
                    console.warn("erreur!")
                }
            });
    }

    render() {
        return (
            <section id="contact">
                <h2>{this.props.contact.titre}</h2>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <input type="text" id="name" ref="nom" name="user_name" placeholder={this.props.contact.nom} required />
                        <input type="email" id="mail" ref="email" name="user_mail" placeholder={this.props.contact.couriel} required />
                    </div>
                    <textarea id="msg" name="user_message" ref="message" placeholder={this.props.contact.message} required />
                    <button type="submit">Envoyer</button>
                </form>
            </section>
        )
    }
}

export default connect(null,{sendEmail})(Contact);
