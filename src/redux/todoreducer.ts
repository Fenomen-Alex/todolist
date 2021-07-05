import { AddTodoActionType, TodoType } from '../types/types';
import { ADD_TODO, REMOVE_TODO, TOGGLE_COMPLETE } from './actionTypes';

const initialState: TodoType[] = [
  {
    id: 1,
    text: 'Solve test task',
    isCompleted: true,
  },
  {
    id: 2,
    text: 'Pass technical interview',
    isCompleted: false,
  },
  {
    id: 3,
    text: 'Accept the offer',
    isCompleted: false,
  },
];

const toDoReducer = (state = initialState, action: (AddTodoActionType)): typeof initialState => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state, {
          id: action.id,
          text: action.text,
          isCompleted: action.isCompleted,
        },
      ];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case TOGGLE_COMPLETE:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
    default:
      return state;
  }
};

export default toDoReducer;
