import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

import App from './App';
import socialReducers from './redux/social-reducer'

import './index.css';

const reducers = combineReducers({
	socialCards: socialReducers
});

const store = createStore(reducers, {
	socialCards: []
}, applyMiddleware(logger));

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);