import React from 'react';

export default ({ album }) => {
    return (
        <React.Fragment>
            <div className="media position-relative  p-3 mb-5 bg-white rounded">
                <div className="card">
                    <img src='https://i1.rozetka.ua/goods/11721261/81923379_images_11721261297.jpg' className="mr-3" alt='лес' />
                    <div className="card-body">
                        <h5 className="mt-0">{album.title}</h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}