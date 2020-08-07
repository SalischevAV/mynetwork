import React, { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
//import Users from './users/Users';
//import Albums from './albums/Albums';
//import Posts from './posts/Posts';
//import NewsFeed from './news/NewsFeed';
import Navigation from './common/Navigation';
import { loadPosts, clearPosts } from '../redux/actions/actionPost';
import { loadUsers } from '../redux/actions/actionsUser';
import { loadNews } from '..//redux/actions/actionNews';

const Users = React.lazy(() => import('./users/Users'));
const Albums = React.lazy(() => import('./albums/Albums'));
const Posts = React.lazy(() => import('./posts/Posts'));
const NewsFeed = React.lazy(() => import('./news/NewsFeed'));


export default (props) => {
  const dispatch = useDispatch();


  const posts = useSelector(state => state.post.posts);
  const users = useSelector(state => state.user.users);
  const comments = useSelector(state => state.comment.comments);
  const news = useSelector(state => state.news.news);

  const clearPostsBtnClickHandler = () => dispatch(clearPosts());
  const loadPostsBtnClickHandler = () => dispatch(loadPosts());

  useEffect(() => {
    dispatch(loadPosts());
    dispatch(loadUsers());
    dispatch(loadNews());
  }, [])


  return (
    <Router>
      <div className="container" id="root">
        <Navigation />
        <Suspense fallback={'...loading'}>
          <Switch>
            <Route path='/users' component={Users} />
            <Route path='/albums' component={Albums} />
            <Route path='/posts'
              render={() => <Posts
                posts={posts}
                clearPostsBtnClickHandler={clearPostsBtnClickHandler}
                loadPostsBtnClickHandler={loadPostsBtnClickHandler}
              />}
            />
            <Route path='/'
              render={() => <NewsFeed
                news={news}
              />}
            />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}