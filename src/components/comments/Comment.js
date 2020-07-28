import React from 'react';
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';



export default ({ comment }) => {
    const dispatch = useDispatch();

    return (
        <div className="card shadow p-3 mb-5 bg-gray rounded" >
            <div className="card-body">
                <h5 className="card-title">{comment.name}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">email: {comment.email}</li>
                <p className='bg-light'>{comment.body}</p>
            </ul>
            <div className="card-body">
                <div className='row'>
                    <div className='col'>
                        <button className='btn btn-info'>Like</button>
                    </div>
                </div>
            </div>
        </div>
    )
}