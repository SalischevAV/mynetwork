import React, { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Navigation from './common/Navigation';
import UsersOnline from './chat/UsersOnline'
import User from './users/User';
import { loadPosts, clearPosts, setPostCurentPage } from '../redux/actions/actionPost';
import { loadUsers, setUserCurrentPage } from '../redux/actions/actionsUser';
import { loadNews, setNewsCurrentPage } from '../redux/actions/actionNews';
import { loadAlbums, setAlbumCurrentPage } from '../redux/actions/actionAlbum';
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
  const users = useSelector(state => state.user.users);
  const filteredUser = useSelector(state => state.filter.filteredUser);
  const filteredPosts = useSelector(state => state.filter.filteredPosts);
  const filteredAlbums = useSelector(state => state.filter.filteredAlbums);
  const disabledButtons = useSelector(state => state.app.disabled);

  const currentPostPage = useSelector(state => state.post.currentPage);
  const limitPosts = useSelector(state => state.post.limit);
  const totalCountPosts = useSelector(state => state.post.totalCount);
  const pagesPosts = [];
  createPages(totalCountPosts, limitPosts, currentPostPage, pagesPosts);


  const currentUserPage = useSelector(state => state.user.currentPage);
  const limitUsers = useSelector(state => state.user.limit);
  const totalCountUsers = useSelector(state => state.user.totalCount);
  const pagesUsers = [];
  createPages(totalCountUsers, limitUsers, currentUserPage, pagesUsers);

  const currentAlbumPage = useSelector(state => state.album.currentPage);
  const limitAlbums = useSelector(state => state.album.limit);
  const totalCountAlbums = useSelector(state => state.album.totalCount);
  const pagesAlbums = [];
  createPages(totalCountAlbums, limitAlbums, currentAlbumPage, pagesAlbums);

  const currentNewsPage = useSelector(state => state.news.currentPage);
  const limitNews = useSelector(state => state.news.limit);
  const totalCountNews = useSelector(state => state.news.totalCount);
  const pagesNews = [];
  createPages(totalCountNews, limitNews, currentNewsPage, pagesNews);

  const clearPostsBtnClickHandler = () => dispatch(clearPosts());
  const loadPostsBtnClickHandler = () => dispatch(loadPosts(currentPostPage, limitPosts));

  const paginatorPostDispatch = setPostCurentPage;
  const paginatorUserDispatch = setUserCurrentPage;
  const paginatorAlbumDispatch = setAlbumCurrentPage;
  const paginatorNewsDispatch = setNewsCurrentPage;


  useEffect(() => {
    dispatch(loadPosts(currentPostPage, limitPosts));
  }, [currentPostPage]);
  useEffect(() => {
    dispatch(loadUsers(currentUserPage, limitUsers));
  }, [currentUserPage]);
  useEffect(() => {
    dispatch(loadAlbums(currentAlbumPage, limitAlbums));
  }, [currentAlbumPage]);
  useEffect(() => {
    dispatch(loadNews(currentNewsPage, limitNews));
  }, [currentNewsPage])

  return (
    <AppUserProvider>
      <Router>
        {disabledButtons ? <div></div> :
          <div className="container" id="root">
            <Route
              render={() =>
                <Navigation
                />}
            />
            <Suspense fallback={'...loading'}>
              <div className='row qwe'>
                <div className='col-9'>
                  <Switch>
                    <Route exact path={props.match.url + 'users'}
                      render={() => <Users
                        users={users}
                        pages={pagesUsers}
                        paginatorDispatch={paginatorUserDispatch}
                        currentPage={currentUserPage}
                        entity={'users'}
                      />}
                    />
                    <Route exact path={props.match.url + 'albums'}
                      render={() => <Albums
                        albums={albums}
                        pages={pagesAlbums}
                        paginatorDispatch={paginatorAlbumDispatch}
                        currentPage={currentAlbumPage}
                        entity={'albums'}
                      />}
                    />
                    <Route exact path={props.match.url + 'posts'}
                      render={() => <Posts
                        posts={posts}
                        clearPostsBtnClickHandler={clearPostsBtnClickHandler}
                        loadPostsBtnClickHandler={loadPostsBtnClickHandler}
                        pages={pagesPosts}
                        paginatorDispatch={paginatorPostDispatch}
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
                      />}
                    />
                    <Route
                      path={'/albums/user/:id'}
                      render={() => <Albums
                        albums={filteredAlbums}
                      />}
                    />
                    <Route path='/'
                      render={() => <NewsFeed
                        news={news}
                        pages={pagesNews}
                        paginatorDispatch={paginatorNewsDispatch}
                        currentPage={currentNewsPage}
                        entity={'news'}
                      />}
                    />
                    <Route render={() => <h4>Not found</h4>} />
                  </Switch>
                </div>
                <div className='col-3 rounded bg-light'>
                  <UsersOnline />
                </div>
              </div>
            </Suspense>
          </div>}
      </Router>
    </AppUserProvider>
  );
}