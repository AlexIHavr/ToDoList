import { v4 } from 'uuid';
import { LOAD_TODO } from './types';

export const loadToDos = () => async (dispatch) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5', {
    method: 'GET',
  });
  const data = await response.json();
  const payload = data.map(({ title }) => ({ id: v4(), done: false, title, removed: false }));

  dispatch({ type: LOAD_TODO, payload });
};
