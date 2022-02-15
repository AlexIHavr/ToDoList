import { v4 } from 'uuid';
import { CREATE_TODO, DONE_TODO, LOAD_TODO, REMOVE_TODO } from './types';

export const createDoTo = (payload) => ({ type: CREATE_TODO, payload });
export const removeDoTo = (payload) => ({ type: REMOVE_TODO, payload });
export const doneToDo = (payload) => ({ type: DONE_TODO, payload });

export const loadToDos = () => async (dispatch) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5', {
    method: 'GET',
  });
  const data = await response.json();
  const payload = data.map(({ title }) => ({ id: v4(), done: false, value: title }));

  dispatch({ type: LOAD_TODO, payload });
};
