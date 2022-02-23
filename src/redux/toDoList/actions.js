import { CREATE_TODO, DONE_TODO, REMOVE_TODO } from './types';

export const createToDo = (payload) => ({ type: CREATE_TODO, payload });
export const removeToDo = (payload) => ({ type: REMOVE_TODO, payload });
export const doneToDo = (payload) => ({ type: DONE_TODO, payload });
