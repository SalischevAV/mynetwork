import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from './Post';
import { loadPosts } from '../../redux/actions/actionPost';

import { loadNews } from '../../redux/actions/actionNews';

import PostCreateForm from './PostCreateForm';
import { clearPosts } from './../../redux/actions/actionPost';

export default () => {

    const dispatch = useDispatch();
    const posts = useSelector(state => state.post.posts);
    const news = useSelector(state => state.news.news);
    return (
        <React.Fragment>
            <div className='row'>
                <div className='col'>
                    <PostCreateForm />
                </div>
                <div className='col'>
                    <button className="btn btn-primary" onClick={() => dispatch(loadPosts())}>Load</button>
                    <button className="btn btn-danger" onClick={()=>dispatch(clearPosts())}>Clear</button>
                    <button className="btn btn-warning" onClick={() => dispatch(loadNews())}>Load News</button>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-1">
                {posts.map(post => <Post post={post} key={post.id} />)}
            </div>
        </React.Fragment>
    )
}