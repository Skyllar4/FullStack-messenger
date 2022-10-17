import React from "react";

export function Login() {

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

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChangeLogin} type="text" name="Login" placeholder="Login" required/>
            <input onChange={handleChangePassword} type="password" name="password" placeholder="Password" required/>
            <button type="submit">Войти</button>
        </form>
    );
}
