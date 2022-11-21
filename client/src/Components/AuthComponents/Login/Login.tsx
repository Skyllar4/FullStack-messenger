import React from "react";
import '../../../Styles/login.scss';

interface loginFormProps {
    isLogin: boolean
}

export function Login({isLogin}: loginFormProps) {

    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');


    function fetchLogin(login: string, password: string) {
        fetch('/login', {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify({
                userName: login,
                password: password
            })
        });
    }

    const handleChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value);
    }

    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent) => {
        fetchLogin(login, password);
        event.preventDefault();
    }

    if (isLogin) {
        return (
            <form className="login-form" onSubmit={handleSubmit}>
                <input className="login-form-element" onChange={handleChangeLogin} type="text" name="Login" placeholder="Login" required autoFocus/>
                <input className="login-form-element" onChange={handleChangePassword} type="password" name="password" placeholder="Password" required/>
                <button className="login-btn" type="submit">Вход</button>
            </form>
        );
    } else {
        return <span></span>
    } // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}
