import React from "react";

export function Register() {

    const [login, setLogin] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');


    function fetchReg(userName: string, email: string, password: string) {
        fetch('/register', {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify({
                userName: userName,
                email: email,
                password: password
            })
        });
    }

    const handleChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value);
    }

    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent) => {
        fetchReg(login, email, password);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChangeLogin} type="text" placeholder="Login" required/>
            <input onChange={handleChangeEmail} type="email" placeholder="Email" required/>
            <input onChange={handleChangePassword} type="password" placeholder="Password" required/>
            <button type="submit">Зарегистрироваться</button>
        </form>
    );
}
