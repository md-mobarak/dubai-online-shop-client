import React, { useEffect, useState } from 'react';
import UserRow from './UserRow';

const AllUser = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://dubai-online-shop.onrender.com/user', {
            method: 'GET',
            headers: {
                authorization: `Berar ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setUsers(data.reverse())
            })
    }, [users])
    return (
        <div className=''>
            <h1 className='text-center font-bold text-2xl mb-5'>All USERS</h1>
            <div className="overflow-x-auto ">
                <table className="table w-full ">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Email</th>
                            <th>Action</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            users?.map((user, index) => <UserRow
                                key={user._id}
                                userTable={user}
                                index={index}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;