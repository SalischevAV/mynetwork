import {LOAD_ALBUMS} from '../types';
import { hideLoader, showLoader, showAlert, disableButtons, enableButtons } from './actionApp';
import {SERVER } from '../server';

export function loadAlbums() {
    return async dispatch => {
        try {
            dispatch(showLoader());
            dispatch(disableButtons());
            const response = await fetch(SERVER +'/albums');
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