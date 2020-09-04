import React, {useContext} from 'react';
import { useDispatch} from 'react-redux';
import User from './User';
import { loadUsers, clearUsers } from '../../redux/actions/actionsUser';
import Paginator from '../common/Paginator';
import { AppUserContext } from '../authComponents/AppUser';

export default (props) => {
  const dispatch = useDispatch();
  const AppUser = useContext(AppUserContext);
  
  return (
    <React.Fragment>
      <div className='row'>
        {AppUser.isAdmin &&
          <div className='col admin'>
          <button className="btn btn-primary" onClick={() => dispatch(loadUsers())}>Load</button>
          <button className='btn btn-danger' onClick={() => dispatch(clearUsers())}>Clear</button>
        </div>}
      </div>
      <div className="row row-cols-1 row-cols-md-1">
        {props.users.map(user => <User user={user} key={user._id} />)}
      </div>
      <Paginator pages={props.pages} paginatorDispatch={props.paginatorDispatch} currentPage={props.currentPage} entity={props.entity}/>
    </React.Fragment>
  )
}
