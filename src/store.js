import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';

import reducers from './reducers/index';
import promise from 'redux-promise-middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const hiddenActions = [];

const logger = createLogger({
    predicate: (getState, action) => !hiddenActions.includes(action.type),
    collapsed: (getState, action, logEntry) => !logEntry.error
})

const store = createStore(reducers, composeEnhancers(applyMiddleware(logger, promise)));

export default store;
