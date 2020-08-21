import React, { Fragment } from 'react';
import { Link} from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { filterUser } from './../../redux/actions/actionFilter';


export default (props) => {
    const dispatch = useDispatch();
    
    return (
        <Fragment>
            <div className="card mb-3">
                <div className='row'>
                    <Link to={'/users/' + props.user._id} onClick={()=>dispatch(filterUser(props.user._id))}>
                        <div className='col-md-1'>
                            <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/24x24/plain/user.png" />   
                        </div>
                    </Link>
                    <div className='col-md-11' >
                        <div className="card-body">
                            <Link to={'/users/' + props.user._id}  onClick={()=>dispatch(filterUser(props.user._id))}>
                                <h5 className="card-title">{props.user.name}</h5>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};
