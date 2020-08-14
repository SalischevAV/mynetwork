import React from 'react';
import Comment from './Comment';
import CommentCreateForm from './CommentCreateForm'


export default (props) => {
    return (
        <div className='row'>
            <div className="col-md-auto">
            {props.comments.map(comment => <Comment comment={comment} key={comment.id} />)}
            </div>
        </div>

    )
}

/*
 <button className="btn btn-primary" onClick={() => dispatch(loadComments())}>Load</button>
*/