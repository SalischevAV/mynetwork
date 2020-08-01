import React, {useState} from 'react';
import UserMini from '../users/UserMini';
import Post from '../posts/Post';
import Comments from '../comments/Comments';

export default ({ newsItem }) => {
    const[collapsed, setCollapsed] = useState(true);
    return (
        <div className='shadow m-3'>
            <UserMini user={newsItem.user} />
            <Post post={newsItem} />
            <div className='row'>
                <p>
                    <button className="btn btn-info"
                        type="button"
                        data-toggle="collapse"
                        data-target="#newsComments"
                        aria-expanded="false"
                        aria-controls="newsComments">
                        Comments
                    </button>
                </p>
                <div className="collapse" id="newsComments">
                    <div className='col w-75'>
                        <Comments comments={newsItem.comments} />
                    </div>
                </div>
            </div>
        </div>
    )
};