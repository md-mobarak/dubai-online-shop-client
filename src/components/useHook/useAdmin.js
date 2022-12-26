import React, { useEffect, useState } from 'react';

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false)

    useEffect(() => {
        const email = user?.email
        // console.log(email)
        if (email) {
            fetch(`https://dubai-online-shop-2.vercel.app/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Berar ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    setAdmin(data)
                })
        }



    }, [user])


    return [admin]
};

export default useAdmin;