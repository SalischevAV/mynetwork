import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'

function Paginator(props) {
    const dispatch = useDispatch();
    return (
        <div>
            <Link
                to={`/${props.entity}?page=1`}
                className='btn btn-outline-secondary'
                onClick={() => dispatch(props.paginatorDispatch(1))}
            >
                &lArr;
                 </Link>

            <Link
                to={(props.currentPage > 1) ? `/${props.entity}?page=${props.currentPage - 1}` : `/${props.entity}?page=1`}
                className='btn btn-outline-secondary'
                onClick={() => dispatch(props.paginatorDispatch(props.currentPage - 1))}
            >&larr;
            </Link>

            {props.pages.map((page, index) => <Link
                to={`/${props.entity}?page=${page}`}
                className={props.currentPage === page ? 'btn btn-secondary' : 'btn btn-outline-secondary'}
                key={index}
                onClick={() => dispatch(props.paginatorDispatch(page))}
            >
                {page}
            </Link>)}

            <Link
                to={props.currentPage < (props.pages.length) ? `/${props.entity}?page=${props.currentPage + 1}` : `/${props.entity}?page=${(props.pages.length)}`}
                className='btn btn-outline-secondary'
                onClick={() => dispatch(props.paginatorDispatch(props.currentPage + 1))}
            >
                &rarr;
                 </Link>

        </div>
    )
}

export default Paginator
