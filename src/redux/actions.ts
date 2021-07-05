import { ADD_TODO, REMOVE_TODO, TOGGLE_COMPLETE } from './actionTypes';

export const addTodo = (id: number, text: string, isCompleted: boolean) => ({
  type: ADD_TODO, id, text, isCompleted,
});

export const removeTodo = (id: number) => ({ type: REMOVE_TODO, id });

export const toggleComplete = (id: number) => ({ type: TOGGLE_COMPLETE, id });
