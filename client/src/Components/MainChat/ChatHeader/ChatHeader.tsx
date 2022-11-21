import React from "react";
import '../../../Styles/chatHeader.scss';

export function Header() {

    return <header className="chatHeader">
            <div>
                <input className="chatHeader__searchChats-input" type="text" name="search"  placeholder="Поиск"/>
            </div>
            <div>
                <p className="chatHeader__userName-text">UserName</p>
            </div>
        </header>

}
