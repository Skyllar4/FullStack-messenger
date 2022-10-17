import React from "react";

interface usersInterface {
    _id: string,
    userName: string,
    email: string,
    passwordHash: string,
    updatedAt: string,
    createdAt: string
}  // фикс? Распарсить

interface dataInterface {
    res?: Array<usersInterface>
}

export function Profile() {

    const [users, setUsers] = React.useState<dataInterface>({});

    React.useEffect(() => {
        fetch('/users').then((res) => res.json()).then(res => setUsers({
            res
        })
    )}, []);

    if (users.res === undefined) {
        return <div>Loading...</div>
    } else {
        return <div>{users.res[0].email}</div>
    }
}