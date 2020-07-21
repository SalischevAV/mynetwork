import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../../redux/actions/actionsUser';



export default ({ user }) => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.user.users);

    return (
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">address: here will be component for address</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">username: {user.username}</li>
                <li className="list-group-item">email: {user.email}</li>
                <li className="list-group-item">phone: {user.phone}</li>
                <li className="list-group-item">website: {user.website}</li>
            </ul>
            <div className="card-body">
                <div className='row'>
                    <div className='col'>
                        <Link to='' className="card-link">Posts</Link>
                        <Link to='' className="card-link">Albums</Link>
                    </div>
                    <div className='col'>
                        <button className='btn btn-outline-danger' onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}