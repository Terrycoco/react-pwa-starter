import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import {createResponsiveStateReducer} from 'redux-responsive';
// import { reducer as formReducer } from 'redux-form';
// import authReducer from 'reducers/authReducer';
// import requestReducer from 'reducers/requestReducer';
// import geoReducer from 'reducers/geoReducer';
// import wikiReducer from 'reducers/wikiReducer';
const rootReducer = combineReducers({
  browser: createResponsiveStateReducer({
        extraSmall: 500,
        small: 700,
        medium: 1000,
        large: 1280,
        extraLarge: 1400,
  }),
  routing: routerReducer

});

export default rootReducer;
