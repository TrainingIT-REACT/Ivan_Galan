import { getAlbums } from '../actions/albums';

const defaultState = {
    data: [],
    fetched: false,
    error: false,
    loading: false
};

export default (state = defaultState, { type, payload }) => {
    switch(type) {
        case String(getAlbums.pending):
            return {
                ...state,
                fetched: false,
                loading: true
            }
        case String(getAlbums.fulfilled):
            return {
                ...state,
                fetched: true,
                loading: false,
                data: payload
            };
        default:
            return state;
    }
}