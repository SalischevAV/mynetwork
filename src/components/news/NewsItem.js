import React, { useState} from 'react';
import UserMini from '../users/UserMini';
import Post from '../posts/Post';
import Comments from '../comments/Comments';

export default ({ newsItem }) => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleCollapseHandler = () => {
        setCollapsed(!collapsed);
    };
    return (
        <div className='shadow m-3'>
            <UserMini user={newsItem.user} />
            <Post post={newsItem} />
            <div className='row'>

                <div id="newsComments" >
                    <div className='col w-75'>
                        <p>

                            <button
                                className="btn btn-info"
                                type="button"
                                onClick={toggleCollapseHandler}
                            >
                                Comments
                            </button>
                        </p>
                        <div
                            className={collapsed ? 'collapse' : null}
                            id="commentsArea"
                        >
                            <Comments comments={newsItem.comments} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};