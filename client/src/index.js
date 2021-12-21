import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reduxStore/_reducers';
import { BrowserRouter } from 'react-router-dom';
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);

ReactDOM.render(

  <Provider store={createStoreWithMiddleware(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__())}>
    {/* <BrowserRouter> */}
      <React.StrictMode>
        <App />
      </React.StrictMode>
    {/* </BrowserRouter> */}
  </Provider>
  ,
  document.getElementById('root')
);

reportWebVitals();
