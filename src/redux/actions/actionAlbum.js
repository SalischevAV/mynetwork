import {LOAD_ALBUMS, SET_ALBUM_CURRENT_PAGE} from '../types';
import { hideLoader, showLoader, showAlert, disableButtons, enableButtons } from './actionApp';
import {SERVER } from '../../server';

export function loadAlbums(currentPage, limit) {
    return async dispatch => {
        try {
            dispatch(showLoader());
            dispatch(disableButtons());
            const response = await fetch(SERVER +`/albums?limit=${limit}&page=${currentPage}`);
            const data = await response.json();
            setTimeout(() => {
                dispatch({
                    type: LOAD_ALBUMS,
                    payload: data
                })
            dispatch(hideLoader());
            dispatch(enableButtons());
            }, 2000);
        }
        catch (err) {
            dispatch(hideLoader());
            dispatch(enableButtons());
            dispatch(showAlert(err.message));
        }
    }
}

export function setAlbumCurrentPage(page){
    return {
        type: SET_ALBUM_CURRENT_PAGE,
        payload: page,
    }
}