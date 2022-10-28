import React, { useEffect, useState } from 'react';

const useHook = (user) => {
    const [token, setToken] = useState('')
    useEffect(() => {
        const email = user?.user?.email
        const currentUsers = { email: email }
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUsers)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const accessToken = data.token
                    localStorage.setItem('accessToken', accessToken)
                    setToken(accessToken)
                })
        }

        console.log('users token', user);
    }, [user])
    return [token]
};

export default useHook;