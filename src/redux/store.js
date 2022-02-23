import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import toDoListReducer from './toDoList/reducer';

const rootReducer = combineReducers({ toDoList: toDoListReducer });

const initialStore = JSON.parse(localStorage.getItem('store'));
const initialState = {
  toDoList: { toDoList: initialStore?.toDoList?.toDoList ?? [] },
};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => {
  localStorage.setItem('store', JSON.stringify(store.getState()));
});

export default store;
