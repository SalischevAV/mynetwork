import React from 'react';



export default ({ post }) => {
    return (
        <React.Fragment>
            <div className="media position-relative  p-3 mb-5 bg-white rounded">
                <img src="https://psy-ru.org/download/file.php?avatar=3212_1501255445.jpeg" className="mr-3" alt="белка" />
                <div className="media-body">
                    <h5 className="mt-0">{post.title}</h5>
                    <p>{post.date}</p>
                    <p className='bg-light'>{post.body}</p>
                </div>
            </div>
        </React.Fragment>

    )
}
