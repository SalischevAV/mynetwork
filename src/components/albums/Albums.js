import React from 'react';
import Album from './Album';
import Paginator from '../common/Paginator'


export default (props) => {
    return (
        <React.Fragment>
            <div className="row row-cols-1 row-cols-md-1">
                {props.albums.map(album => <Album album={album} key={album._id} />)}
            </div>
            {props.pages &&
                <Paginator pages={props.pages} paginatorDispatch={props.paginatorDispatch} currentPage={props.currentPage} entity={props.entity} />
            }
        </React.Fragment>
    )
}

