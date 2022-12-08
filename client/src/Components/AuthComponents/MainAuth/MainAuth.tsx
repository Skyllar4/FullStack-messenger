import React from "react";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import '../../../Styles/MainAuth.scss';

export function MainAuth() {

    const [isLogin, setIsLogin] = React.useState(false);
    const [isRegister, setRegister] = React.useState(true);

    const handleClick = () => {
        setIsLogin(!isLogin);
        setRegister(!isRegister);
    }

        return <div className="authContainer">
                    <div className="authContainer__button-grp">
                        <button onClick={handleClick} className="switch-reg-login-button" disabled={isRegister ? true : false}>Регистрация</button>
                        <button onClick={handleClick} className="switch-reg-login-button" disabled={isLogin ? true : false}>Войти</button>
                    </div>{/*  На кнопках не сохраняется эффект фокуса, из-за того что переисовыввается компонент? */}
                    <Register isRegister={isRegister} />
                    <Login isLogin={isLogin}/>
              </div>

}