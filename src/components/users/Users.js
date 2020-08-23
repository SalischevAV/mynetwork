import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import User from './User';
import { loadUsers, clearUsers } from '../../redux/actions/actionsUser';
import Paginator from '../common/Paginator'

export default (props) => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.user.users);
  
  return (
    <React.Fragment>
      <div className='row'>
        <div className='col'>
          <button className="btn btn-primary" onClick={() => dispatch(loadUsers())}>Load</button>
          <button className='btn btn-danger' onClick={() => dispatch(clearUsers())}>Clear</button>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-1">
        {users.map(user => <User user={user} key={user._id} />)}
      </div>
      <Paginator pages={props.pages} paginatorDispatch={props.paginatorDispatch} currentPage={props.currentPage} entity={props.entity}/>
    </React.Fragment>
  )
}
