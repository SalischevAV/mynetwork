import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import User from './User';
import UserCreateForm from './UserCreateForm';
import { loadUsers, clearUsers } from '../../redux/actions/actionsUser';

export default () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.user.users);




  return (
    <React.Fragment>
      <div className='row'>
        <div className='col'>
          <UserCreateForm />
        </div>
        <div className='col'>
          <button className="btn btn-primary" onClick={() => dispatch(loadUsers())}>Load</button>
          <button className='btn btn-danger' onClick={() => dispatch(clearUsers())}>Clear</button>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-1">
        {users.map(user => <User user={user} key={user.id} />)}
      </div>
    </React.Fragment>
  )
}

/*
   { if(!users.length){
        <button className="btn btn-primary"onClick={() => dispatch(loadUsers())}>Загрузить</button>
    }}
*/
