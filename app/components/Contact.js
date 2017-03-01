// classe

import React, {Component} from "react";

export default class Contact extends Component {
    constructor() {
        super();
        this.onSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        var self = this;
        console.log(this.refs);
        fetch('./contact', {
            method: 'POST',
            data: {
                nom: self.refs.nom.value,
                email: self.refs.email.value,
                message: self.refs.message.value
            }
        }).then(function(response) {
            console.log(response);
        }).then(function(body) {
            console.log(body);
        });
    }

    render() {
        return (
            <section id="contact">
                <h2>{this.props.contact.titre}</h2>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <input type="text" id="name" ref="nom" name="user_name" placeholder={this.props.contact.nom}/>
                        <input type="email" id="mail" ref="email" name="user_mail" placeholder={this.props.contact.couriel}/>
                    </div>
                    <textarea id="msg" name="user_message" ref="message" placeholder={this.props.contact.message}></textarea>
                    <button type="submit">Envoyer</button>
                </form>
            </section>
        )
    }
}
