import { createStore, combineReducers, applyMiddleware, compose } from 'redux' ;
import appReducer from './reducers/appReducer';
import leftNavReducer from './reducers/leftNavReducer';
import hmReducer from '../store/reducers/higherManagementReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    app: appReducer,
    leftNav: leftNavReducer,
    hmDetails: hmReducer
});

const allStoreEnhancer = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(reducers, allStoreEnhancer);

export default store;