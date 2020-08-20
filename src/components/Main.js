import React, { useEffect, Suspense, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch} from 'react-redux';
import Navigation from './common/Navigation';
import User from './users/User';
import { loadPosts, clearPosts } from '../redux/actions/actionPost';
import { loadUsers } from '../redux/actions/actionsUser';
import { loadNews } from '../redux/actions/actionNews';
import {loadAlbums} from '../redux/actions/actionAlbum'
import { AuthContext } from './authComponents/Auth';
import { AppUserContext } from './authComponents/AppUser';
import { AppUserProvider } from './authComponents/AppUser'


const Users = React.lazy(() => import('./users/Users'));
const Albums = React.lazy(() => import('./albums/Albums'));
const Posts = React.lazy(() => import('./posts/Posts'));
const NewsFeed = React.lazy(() => import('./news/NewsFeed'));


export default (props) => {

  const dispatch = useDispatch();

  const posts = useSelector(state => state.post.posts);
  const users = useSelector(state => state.user.users);
  const news = useSelector(state => state.news.news);
  const albums = useSelector(state => state.album.albums);
  const filteredUser = useSelector(state => state.filter.filteredUser);
  const filteredPosts = useSelector(state => state.filter.filteredPosts);
  const filteredAlbums = useSelector(state => state.filter.filteredAlbums);
  const disabledButtons = useSelector(state => state.app.disabled);

  const clearPostsBtnClickHandler = () => dispatch(clearPosts());
  const loadPostsBtnClickHandler = () => dispatch(loadPosts());

  useEffect(() => {
    dispatch(loadPosts());
    dispatch(loadUsers());
    dispatch(loadNews());
    dispatch(loadAlbums());
  }, []);

  return (
    <AppUserProvider>
    <Router>
      {disabledButtons ? <div></div> :
        <div className="container" id="root">
          <Route
            render={() => <Navigation
            />}
          />
          <Suspense fallback={'...loading'}>
            <Switch>
              <Route exact path={props.match.url + 'users'} component={Users} />
              <Route exact path={props.match.url + 'albums'}
                render={() => <Albums
                  albums={albums}
                />}
              />
              <Route exact path={props.match.url + 'posts'}
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
              <Route
                path={'/posts/user/:id'}
                render={() => <Posts posts={filteredPosts} />}
              />
              <Route
                path={'/albums/user/:id'}
                render={() => <Albums albums={filteredAlbums} />}
              />
              <Route path='/'
                render={() => <NewsFeed
                  news={news}
                />}
              />
              <Route render={() => <h4>Not found</h4>} />
            </Switch>
          </Suspense>
        </div>}
    </Router>
    </AppUserProvider>
  );
}