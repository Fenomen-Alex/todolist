import { combineReducers, createStore } from 'redux';
import toDoReducer from './todoreducer';

const reducers = combineReducers({ todos: toDoReducer });

const persistedState = localStorage.getItem('todoList')
  ? JSON.parse(localStorage.getItem('todoList') as string)
  : {};

const store = createStore(reducers, persistedState);

store.subscribe(() => {
  localStorage.setItem('todoList', JSON.stringify(store.getState()));
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {todos: TodosState}
export type AppDispatch = typeof store.dispatch
