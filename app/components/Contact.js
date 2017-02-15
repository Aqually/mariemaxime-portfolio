// classe

import React, {Component} from "react";

export default class Contact extends Component{
    render(){
        return (
            <section id="contact">
                <h2>{this.props.contact.titre}</h2>
                <form>
                    <div>
                        <input type="text" id="name" name="user_name" placeholder={this.props.contact.nom} />
                        <input type="email" id="mail" name="user_mail" placeholder={this.props.contact.couriel} />
                    </div>
                    <textarea id="msg" name="user_message" placeholder={this.props.contact.message}></textarea>
                    <button type="submit">Envoyer</button>
                </form>
            </section>
        )
    }
}
