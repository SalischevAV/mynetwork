import React from 'react';
import {useSelector} from 'react-redux';
import Alert from './Alert';
import Loader from './Loader';
import Navigation from './Navigation';

export default (props) =>{

    const alert = useSelector(state => state.app.alert);
    const loading = useSelector(state => state.app.loading);
    return(
        <div className='sticky-top bg-light'>
         { alert&& <Alert alert={alert} />}
         {loading && <Loader />}
         <Navigation />
        </div>
        
    )
}