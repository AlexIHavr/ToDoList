import { CREATE_TODO, DONE_TODO, LOAD_TODO, REMOVE_TODO } from './types';

const initialState = {
  toDoList: [],
};

const toDoListReducer = (state = initialState, action) => {
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
      return { ...state, toDoList: [...state.toDoList, ...action.payload] };
    default:
      return state;
  }
};

export default toDoListReducer;
