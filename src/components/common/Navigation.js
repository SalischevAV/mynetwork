import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import app from '../../auth/base';
import {  AppUserContext } from '../authComponents/AppUser';


export default (props) =>{
    const appUser = useContext(AppUserContext);
    return(      
        <nav className="navbar navbar-light bg-light sticky-top">
        <ul className='nav'>
            <li className='nav-item'><NavLink to='/news' className='btn btn-outline-secondary'>News</NavLink></li>
            <li className='nav-item'><NavLink to='/posts' className='btn btn-outline-secondary'>Posts</NavLink></li>
            <li className='nav-item'><NavLink to='/albums' className='btn btn-outline-secondary'>Albums</NavLink></li>
            <li className='nav-item'><NavLink to='/users' className='btn btn-outline-secondary'>Users</NavLink></li>
            
        </ul>
        <div className='navbar-brand'>
            <span className='p-3'>{appUser.name}</span>
            <button className='btn btn-outline-info' onClick={()=>app.auth().signOut()}>Log Out</button>
        </div>
        </nav>
    )
}