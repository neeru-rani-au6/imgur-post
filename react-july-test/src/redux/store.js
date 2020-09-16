import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
//import Reducer from './reducer/index';
import userReducer from './reducer/user';
import postReducer from './reducer/index';
import thunk from 'redux-thunk';
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
const rootreducer = combineReducers({userReducer,postReducer})
const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
  );
const store = createStore(rootreducer,enhancer)

export default store;