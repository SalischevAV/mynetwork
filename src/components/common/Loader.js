import React from 'react';

export default () => {
    return(
        <div className="d-flex align-items-center">
        <strong className='text-info'>Loading...</strong>
        <div className="spinner-border ml-auto text-info" role="status" aria-hidden="true"></div>
      </div>
    )
}