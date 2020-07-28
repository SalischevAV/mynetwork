import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Comments from '../comments/Comments'
import { filterUsers } from '../../redux/actions/actionsUser';
import { loadComments } from '../../redux/actions/actionsComment';


export default ({ post }) => {
    const dispatch = useDispatch();
    return (
        <React.Fragment>
            <div className="media position-relative shadow p-3 mb-5 bg-white rounded">
                <img src="https://psy-ru.org/download/file.php?avatar=3212_1501255445.jpeg" className="mr-3" alt="белка" />
                <div className="media-body">
                    <h5 className="mt-0">{post.title}</h5>
                    <p className='bg-light'>{post.body}</p>
                    <div className='row'>
                        <div className='col'><Link to={'/users/' + post.userId} className="stretched-link" onClick={() => dispatch(filterUsers(post.userId))}>Author</Link></div>
                        <button className="btn btn-info" onClick={() => dispatch(loadComments(post.id))}>Load Comments</button>
                        <button className="btn btn-warning" onClick={() => ReactDOM.render('qweqwe' , document.getElementById('qwe' + post.id))}>Console</button>
                    </div>
                    <div className='row justify-content-md-center' id={'qwe' + post.id}><Comments /></div>
                </div>

            </div>

        </React.Fragment>

    )
}

/*
<div className='row justify-content-md-center' id={'qwe' + post.id}><Comments /></div>
*/