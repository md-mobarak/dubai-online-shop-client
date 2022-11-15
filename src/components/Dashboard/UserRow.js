import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
const UserRow = ({ index, userTable }) => {
    const { email, role, _id } = userTable;
    const [user, loading] = useAuthState(auth)

    const presentEmail = user?.email
    // console.log(user);
    // console.log(email);
    const makeAdmin = () => {
        fetch(`https://dubai-online-shop-2-production.up.railway.app/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Berar ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            if (res.status === 403) {
                toast.error('Filed to make an Admin')
            }
            return res.json()
        })
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data);
                    toast.success(`successfully make an admin ${email}`)
                }
            })
    }
    const handleDelete = () => {
        const proceed = window.confirm("Are You Sure?")
        if (proceed) {
            fetch(`https://dubai-online-shop-2-production.up.railway.app/delete/${_id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                },

            }).then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }
    }

    return (
        < tr className="hover ">
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' ? <button onClick={makeAdmin} className='btn btn-xs'> make Admin</button> : <h1>Already Admin</h1>}</td>
            <td>{presentEmail === email ? '' : <button onClick={handleDelete} className='btn btn-xs bg-red-700 border-0 text-white'>Delete</button>}</td>
        </tr>
    );
};

export default UserRow;