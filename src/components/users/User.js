import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';



export default ({user}) => {
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
                    <Link to='' className="card-link">Posts</Link>
                    <Link to='' className="card-link">Albums</Link>
                </div>
        </div>
    )
}