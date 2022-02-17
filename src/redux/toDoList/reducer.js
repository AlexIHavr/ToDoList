import { CREATE_TODO, DONE_TODO, LOAD_TODO, REMOVE_TODO, SET_REMOVED_TODO } from './types';

const toDoListReducer = (state = [], action) => {
  let toDoList;

  switch (action.type) {
    case CREATE_TODO:
      toDoList = [...state.toDoList, action.payload];
      return { ...state, toDoList };
    case REMOVE_TODO:
      toDoList = state.toDoList.filter(({ id }) => id !== action.payload.id);
      return { ...state, toDoList };
    case DONE_TODO:
      toDoList = state.toDoList.map((toDo) =>
        toDo.id === action.payload.id ? { ...toDo, done: action.payload.done } : { ...toDo }
      );
      return { ...state, toDoList };
    case LOAD_TODO:
      toDoList = [...state.toDoList, ...action.payload];
      return { ...state, toDoList };
    case SET_REMOVED_TODO:
      toDoList = state.toDoList.map((toDo) =>
        toDo.id === action.payload.id ? { ...toDo, removed: action.payload.removed } : { ...toDo }
      );
      return { ...state, toDoList };
    default:
      return state;
  }
};

export default toDoListReducer;
