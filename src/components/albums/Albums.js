import React from 'react';
import Album from './Album';


export default (props)=>{
    return(
        <React.Fragment>            
            <div className="row row-cols-1 row-cols-md-1">
                {props.albums.map(album => <Album album={album} key={album._id} />)}
            </div>
        </React.Fragment>
    )
}

