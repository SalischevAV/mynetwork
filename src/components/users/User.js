import React, { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../../redux/actions/actionsUser';
import { filterPosts, filterAlbums } from '../../redux/actions/actionFilter';
import { AppUserContext } from '../authComponents/AppUser';



export default ({ user }) => {
    const AppUser = useContext(AppUserContext);
    const [collapsed, setCollapsed] = useState(true);
    const toggleCollapseHandler = () => {
        setCollapsed(!collapsed)
    };
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
                        <Link to={'/posts/user/' + user._id} className="card-link" onClick={() => dispatch(filterPosts(user._id))}>Posts</Link>
                        <Link to={'/albums/user/' + user._id} className="card-link" onClick={() => dispatch(filterAlbums(user._id))}>Albums</Link>
                    </div>
                    {AppUser.isAdmin &&
                        <div className='col admin'>
                            <div className='row'>
                                <div className='col'>
                                    <button className='btn btn-outline-danger' onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
                                </div>
                                <div className='col'>
                                    <div className="dropdown">
                                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" onClick={toggleCollapseHandler}>
                                            {user.roleId=='5f50e3d0e8a596717fd3e25f'? 'Admin' : 'User'}
                            </button>
                                        <div className={collapsed ? 'collapse dropdown-menu' : null} aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item btn btn-outline-secondary" onClick={toggleCollapseHandler} href="#">Admin</a>
                                            <a className="dropdown-item btn btn-outline-secondary" onClick={toggleCollapseHandler} href="#">User</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}