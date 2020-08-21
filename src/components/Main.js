import React, { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Navigation from './common/Navigation';
import User from './users/User';
import { loadPosts, clearPosts, setCurentPage } from '../redux/actions/actionPost';
import { loadUsers } from '../redux/actions/actionsUser';
import { loadNews } from '../redux/actions/actionNews';
import { loadAlbums } from '../redux/actions/actionAlbum';
import { AppUserProvider } from './authComponents/AppUser';
import createPages from '../services/createPages';



const Users = React.lazy(() => import('./users/Users'));
const Albums = React.lazy(() => import('./albums/Albums'));
const Posts = React.lazy(() => import('./posts/Posts'));
const NewsFeed = React.lazy(() => import('./news/NewsFeed'));


export default (props) => {

  const dispatch = useDispatch();

  const posts = useSelector(state => state.post.posts);
  const news = useSelector(state => state.news.news);
  const albums = useSelector(state => state.album.albums);
  const filteredUser = useSelector(state => state.filter.filteredUser);
  const filteredPosts = useSelector(state => state.filter.filteredPosts);
  const filteredAlbums = useSelector(state => state.filter.filteredAlbums);
  const disabledButtons = useSelector(state => state.app.disabled);
  const currentPostPage = useSelector(state => state.post.currentPage);
  const limitPosts = useSelector(state => state.post.limit);
  const totalCountPosts = useSelector(state => state.post.totalCount);
  const pagesPosts = []

  const clearPostsBtnClickHandler = () => dispatch(clearPosts());
  const loadPostsBtnClickHandler = () => dispatch(loadPosts());

  const paginatorPageDispatch = setCurentPage;

  createPages(totalCountPosts, limitPosts, currentPostPage, pagesPosts)

  useEffect(() => {
    dispatch(loadPosts(currentPostPage, limitPosts));
  }, [currentPostPage]);
  useEffect(() => {
    dispatch(loadUsers());
    dispatch(loadNews());
    dispatch(loadAlbums());
  }, [])

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
                    pages={pagesPosts}
                    paginatorDispatch={paginatorPageDispatch}
                    currentPage={currentPostPage}
                    entity={'posts'}
                  />}
                />
                <Route
                  path={'/users/:id'}
                  render={() => <User user={filteredUser} />}
                />
                <Route
                  path={'/posts/user/:id'}
                  render={() => <Posts
                    posts={filteredPosts}
                    pages={pagesPosts}
                    paginatorDispatch={paginatorPageDispatch}
                    currentPage={currentPostPage}
                  />}
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