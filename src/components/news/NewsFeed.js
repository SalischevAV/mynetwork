import React, {useContext} from 'react';
import NewsItem from './NewsItem';
import PostCreateForm from '../posts/PostCreateForm';
import Paginator from '../common/Paginator';
import {  AppUserContext } from '../authComponents/AppUser'

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
                    {!props.news.length &&<button className="btn btn-primary" onClick={props.loadNewsBtnClickHandler}>Load</button>}
                    <button className="btn btn-danger" onClick={props.clearNewsBtnClickHandler}>Clear</button>
                    
                </div>}
            </div>
            <div className="row row-cols-1 row-cols-md-1">
                {props.news.map(newsItem => <NewsItem newsItem={newsItem} key={newsItem._id} />)}
            </div>
            {props.pages &&
                <Paginator pages={props.pages} paginatorDispatch={props.paginatorDispatch} currentPage={props.currentPage} entity={props.entity} />
            }
        </React.Fragment>
    )
}