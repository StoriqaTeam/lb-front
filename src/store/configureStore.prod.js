import {createStore, applyMiddleware, compose} from 'redux';
import {rootReducer, initialState}  from '../reducers/index';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
// import DevTools from '../utils/dev_tools/DevTools';
import {  routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { composeWithDevTools } from 'redux-devtools-extension';
import { actionStorageMiddleware, createStorageListener } from 'redux-state-sync';

const history = createHistory()
export {history};

export default function configureStore(initialState) {
  // return createStore(
  //   rootReducer,
  //   initialState
  //   // applyMiddleware(thunk, reduxImmutableStateInvariant()),
  //   // DevTools.instrument()
  // );

  const store = compose(applyMiddleware(thunk, actionStorageMiddleware))(createStore)(rootReducer, initialState);
  if (module.hot) {
    module.hot.accept('./../reducers', () => {
      const nextRootReducer = require('./../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }
  createStorageListener(store)
  return store
 //  return createStore(
	//   rootReducer,
	//   compose(
	//   	initialState,
	//     applyMiddleware(thunk)
	//   )
	// )
}

