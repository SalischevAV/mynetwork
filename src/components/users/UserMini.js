import React, { Fragment } from 'react';
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../../redux/actions/actionsUser';
import {filterPosts} from '../../redux/actions/actionPost';

export default ({ user }) => {
    return (
        <Fragment>
            <div className="card mb-3">
                <div className='row'>
                    <Link to={'/users/' + user.id}>
                        <div className='col-md-1'>
                            <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/24x24/plain/user.png" />
                        </div>
                    </Link>
                    <div className='col-md-11' >
                        <div className="card-body">
                            <Link to={'/users/' + user.id}>
                                <h5 className="card-title">{user.name}</h5>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};
