import { CREATE_TODO, DONE_TODO, REMOVE_TODO, SET_REMOVED_TODO } from './types';

export const createToDo = (payload) => ({ type: CREATE_TODO, payload });
export const removeToDo = (payload) => ({ type: REMOVE_TODO, payload });
export const doneToDo = (payload) => ({ type: DONE_TODO, payload });
export const setRemovedToDo = (payload) => ({ type: SET_REMOVED_TODO, payload });
