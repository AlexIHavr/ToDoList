import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import toDoListReducer from './toDoList/reducer';

const rootReducer = combineReducers({ toDoList: toDoListReducer });

const store = createStore(
  rootReducer,
  //{ toDoList: { toDoList: [] } }, is not working
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => {
  localStorage.setItem('store', JSON.stringify(store.getState()));
});

export default store;
