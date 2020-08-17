import React from 'react';
import NewsItem from './NewsItem';
import PostCreateForm from '../posts/PostCreateForm';

export default (props) => {

    return (
        <React.Fragment>
            <div className='row'>
                <div className='col'>
                    <PostCreateForm />
                </div>
                <div className='col'>
                    {!props.news.length &&<button className="btn btn-primary" onClick={props.loadNewsBtnClickHandler}>Load</button>}
                    <button className="btn btn-danger" onClick={props.clearNewsBtnClickHandler}>Clear</button>
                    
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-1">
                {props.news.map(newsItem => <NewsItem newsItem={newsItem} key={newsItem._id} />)}
            </div>
        </React.Fragment>
    )
}

/*
<button className="btn btn-warning" onClick={() => props.dispatch(loadNews())}>Load News</button>
*/