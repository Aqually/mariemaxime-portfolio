// classe

import React, {Component} from "react";

export default class Contact extends Component{
    render(){
        return (
            <form>
                <div>
                    <input type="text" id="name" name="user_name" placeholder="Votre nom" />
                    <input type="email" id="mail" name="user_mail" placeholder="Votre adresse couriel" />
                </div>
                <textarea id="msg" name="user_message" placeholder="Votre message"></textarea>
                <button type="submit">Envoyer</button>
            </form>
        )
    }
}
