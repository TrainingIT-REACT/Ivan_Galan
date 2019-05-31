import actionTypes from '../actions/actionTypes';

const defaultState = {
    album: {},
    song: {}
};

export default (state = defaultState, { type, payload }) => {
    switch(type) {
        case actionTypes.SET_SONG:
            return {
                ...defaultState,
                ...payload
            }
        default:
            return state;
    }
}