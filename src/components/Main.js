import React, { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch, createDispatchHook } from 'react-redux';
import Navigation from './common/Navigation';
import User from './users/User';
import { loadPosts, clearPosts } from '../redux/actions/actionPost';
import { loadUsers } from '../redux/actions/actionsUser';
import { loadNews } from '../redux/actions/actionNews';

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
  const filteredUser = useSelector(state => state.filter.filteredUser)

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
        <Route component={Navigation} />
        <Suspense fallback={'...loading'}>
          <Switch>
            <Route exact path={props.match.url +'users'} component={Users} />
            <Route path={props.match.url +'albums'} component={Albums} />
            <Route path={props.match.url +'posts'}
              render={() => <Posts
                posts={posts}
                clearPostsBtnClickHandler={clearPostsBtnClickHandler}
                loadPostsBtnClickHandler={loadPostsBtnClickHandler}
              />}
            />
            <Route
                path={'/users/:id'}
                render={() => <User user={filteredUser} />}            
              />
            <Route path='/'
              render={() => <NewsFeed
              news={news}
              />}
            />
            <Route render={()=><h4>Not found</h4>} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}