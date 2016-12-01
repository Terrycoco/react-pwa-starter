import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, push } from 'react-router-redux';
import {responsiveStoreEnhancer} from 'redux-responsive';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import rootRoute from 'routes/routes';



const apiurl = "http://api-tmarr.rhcloud.com/graphql";
// const apiurl = "http://localhost:3090/graphql";

const store = createStore(
  reducers,
  compose(responsiveStoreEnhancer, 
    applyMiddleware(reduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

//register service workers
if (navigator.serviceWorker) {
  navigator.serviceWorker.register('./sw/index.js')
  .then(() => {
    console.log('svc wkr registered')
  }).catch(() => {
    console.log('svc wkr registration failed')
  });
}


ReactDOM.render(
  <Provider store={store} >
    <Router onUpdate={() => window.scrollTo(0, 0)} history={history} routes={rootRoute} />
  </Provider>
  , document.getElementById('root'));

