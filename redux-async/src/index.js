import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from './reducers';

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk, logger)));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

