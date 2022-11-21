import React from "react";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import '../../../Styles/MainAuth.scss';

export function MainAuth() {

    const [isLogin, setIsLogin] = React.useState(false);
    const [isRegister, setRegister] = React.useState(true);

    const handleClick = (event: any) => {
        console.log(event.target.children)
        setIsLogin(!isLogin);
        setRegister(!isRegister);
    }

        return <div className="authContainer">
                    <div className="authContainer__button-grp">
                        <button onClick={handleClick} className="switch-reg-login-button">Регистрация</button>
                        <button onClick={handleClick} className="switch-reg-login-button">Войти</button>
                    </div>
                    <Register isRegister={isRegister} />
                    <Login isLogin={isLogin}/>
              </div>

}