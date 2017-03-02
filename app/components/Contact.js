// classe

import React, {Component} from "react";
import {connect} from "react-redux";
import {sendEmail} from "../actions";

const style = {
    backgroundColor: "green",
    color: "white",
    textAlign: "center",
    width: "50%",
    margin: "1em auto 0",
    height: "5em",
    fontSize: "2em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

class Contact extends Component {
    constructor() {
        super();
        this.onSubmit = this.handleSubmit.bind(this);
        this.state = {
            msgEnvoie: false
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const lesDonnees = {
            nom: this.refs.nom.value,
            email: this.refs.email.value,
            message: this.refs.message.value
        }

        this.props.sendEmail(lesDonnees).then((response) => {
            if (response.status === 200) {
                console.log("message envoyé! yay!")
                this.setState({msgEnvoie: true})
            } else {
                console.warn("erreur!")
            }
        });
    }

    renderForm() {
        return (
            <form onSubmit={this.onSubmit}>
                <div>
                    <input type="text" id="name" ref="nom" name="user_name" placeholder={this.props.contact.nom} required/>
                    <input type="email" id="mail" ref="email" name="user_mail" placeholder={this.props.contact.couriel} required/>
                </div>
                <textarea id="msg" name="user_message" ref="message" placeholder={this.props.contact.message} required/>
                <button type="submit">Envoyer</button>
            </form>
        )
    }

    renderConfirmeEmail() {
        return (
            <div className="msgEnvoie"> Message envoyé avec succès!</div>
        )
    }

    render() {
        return (
            <section id="contact">
                <h2>{this.props.contact.titre}</h2>
                {this.state.msgEnvoie
                    ? this.renderConfirmeEmail()
                    : this.renderForm()}
            </section>
        )
    }
}

export default connect(null, {sendEmail})(Contact);
