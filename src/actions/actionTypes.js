const actions = ['PLAY', 'PAUSE', 'STOP', 'SET_SONG'];

const actionTypes = {};

actions.map( action => actionTypes[action] = action );

export default actionTypes;
