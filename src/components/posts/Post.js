import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Comments from '../comments/Comments';
import { filterUsers } from '../../redux/actions/actionsUser';


export default ({ post }) => {
    const dispatch = useDispatch();
    return (
        <React.Fragment>
            <div className="media position-relative  p-3 mb-5 bg-white rounded">
                <img src="https://psy-ru.org/download/file.php?avatar=3212_1501255445.jpeg" className="mr-3" alt="белка" />
                <div className="media-body">
                    <h5 className="mt-0">{post.title}</h5>
                    <p className='bg-light'>{post.body}</p>
                    <div className='row'>
                        <div className='col'><Link to={'/users/' + post.userId} className="stretched-link">Author</Link></div>
                    </div>
                </div>

            </div>

        </React.Fragment>

    )
}

/*
Link to={'/users/' + post.userId}

 <div className='row justify-content-md-center' id={'qwe' + post.id}><Comments /></div>
*/