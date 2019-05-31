import actionTypes from "./actionTypes";
import { createAsyncAction } from 'redux-promise-middleware-actions';

export const test = x => ({
    type: actionTypes.TEST
});

export const getSongs = createAsyncAction('SONGS', () => {
    return fetch('/songs').then( res => res.json() )
});
