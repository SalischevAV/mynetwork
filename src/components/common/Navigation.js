import React from 'react';
import {Link} from 'react-router-dom';
import app from '../../auth/base';



export default () =>{
    return(      
        <nav className="navbar navbar-light bg-light">
        <ul className='nav'>
            <li className='nav-item'><Link to='/posts' className='btn btn-outline-secondary'>Posts</Link></li>
            <li className='nav-item'><Link to='/albums' className='btn btn-outline-secondary'>Albums</Link></li>
            <li className='nav-item'><Link to='/users' className='btn btn-outline-secondary'>Users</Link></li>
        </ul>
        <div className='navbar-brand'>
            <button className='btn btn-outline-info' onClick={()=>app.auth().signOut()}>Log Out</button>
        </div>
        </nav>
    )
}