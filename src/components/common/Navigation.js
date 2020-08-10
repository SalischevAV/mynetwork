import React from 'react';
import {NavLink} from 'react-router-dom';
import app from '../../auth/base';



export default (props) =>{
    return(      
        <nav className="navbar navbar-light bg-light sticky-top">
        <ul className='nav'>
            <li className='nav-item'><NavLink to={props.match.url +'posts'} className='btn btn-outline-secondary'>Posts</NavLink></li>
            <li className='nav-item'><NavLink to={props.match.url +'albums'} className='btn btn-outline-secondary'>Albums</NavLink></li>
            <li className='nav-item'><NavLink to={props.match.url +'users'} className='btn btn-outline-secondary'>Users</NavLink></li>
            <li className='nav-item'><NavLink to={props.match.url +'news'} className='btn btn-outline-secondary'>News feed</NavLink></li>
        </ul>
        <div className='navbar-brand'>
            <button className='btn btn-outline-info' onClick={()=>app.auth().signOut()}>Log Out</button>
        </div>
        </nav>
    )
}