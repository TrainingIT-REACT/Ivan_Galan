import { getSongs } from '../actions/songs';

const defaultState = {
    data: [],
    fetched: false,
    error: false,
    loading: false
};

export default (state = defaultState, { type, payload }) => {
    switch(type) {
        case String(getSongs.pending):
            return {
                ...state,
                fetched: false,
                loading: true
            }
        case String(getSongs.fulfilled):
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