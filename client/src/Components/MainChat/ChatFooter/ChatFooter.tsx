import React from "react";
import '../../../Styles/chatFooter.scss';

export function ChatFooter() {

    return      <form className="formMessage" action="#" method="POST">
                    <input className="formMessage__type-input" type="text" placeholder="Введите ваше сообщение"/>
                    <button className="formMessage__submit-button" type="submit" disabled></button>
                </form>
}
