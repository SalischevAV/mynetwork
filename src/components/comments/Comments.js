import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {loadComments} from '../../redux/actions/actionsComment';
import Comment from './Comment';
import CommentCreateForm from './CommentCreateForm'

export default () => {
    const dispatch = useDispatch();
    const comments = useSelector(state => state.comment.comments)

    return (
        <React.Fragment>
            <div className='row'>
                <div className='col'>
                </div>
            </div>
            <div className="col-md-auto">
                {comments.map(comment => <Comment comment={comment} key={comment.id} />)}
            </div>

        </React.Fragment>
    )
}

/*
 <button className="btn btn-primary" onClick={() => dispatch(loadComments())}>Load</button>
*/