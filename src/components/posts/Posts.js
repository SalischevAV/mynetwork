import React, {useContext} from 'react';
import Post from './Post';
import PostCreateForm from './PostCreateForm';
import Paginator from '../common/Paginator';
import {AppUserContext} from '../authComponents/AppUser'


export default (props) => {
    const AppUser = useContext(AppUserContext);
    return (
        <React.Fragment>
            <div className='row'>
                <div className='col'>
                    <PostCreateForm />
                </div>
                {AppUser.isAdmin &&
                    <div className='col'>
                    {!props.posts.length && <button className="btn btn-primary" onClick={props.loadPostsBtnClickHandler}>Load</button>}
                    <button className="btn btn-danger" onClick={props.clearPostsBtnClickHandler}>Clear</button>

                </div>
                }
            </div>
            <div className="row row-cols-1 row-cols-md-1">
                {props.posts.map(post => <Post post={post} key={post._id} />)}
            </div>
            {props.pages &&
                <Paginator pages={props.pages} paginatorDispatch={props.paginatorDispatch} currentPage={props.currentPage} entity={props.entity} />
            }
        </React.Fragment>
    )
}