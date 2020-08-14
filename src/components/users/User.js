import React from 'react';
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../../redux/actions/actionsUser';
import {filterPosts, filterAlbums} from '../../redux/actions/actionFilter';



export default ({ user }) => {
    const dispatch = useDispatch();

    return (
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
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
                        <Link to={'/posts/user/'+ user.id} className="card-link" onClick={() => dispatch(filterPosts(user.id))}>Posts</Link>
                        <Link to={'/albums/user/'+ user.id} className="card-link" onClick={() => dispatch(filterAlbums(user.id))}>Albums</Link>
                    </div>
                    <div className='col'>
                        <button className='btn btn-outline-danger' onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}