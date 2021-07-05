import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { addTodo, removeTodo, toggleComplete } from '../redux/actions';
import { RootState } from '../redux/store';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import TodoSortBar from './TodoSortBar';
import TodoSearchBar from './TodoSearchBar';

const useStyles = makeStyles((theme) => ({
  todoList: {
    width: '50%',
    margin: '10px auto 50px auto',
    border: '#D5D9D9 2px solid',
    [theme.breakpoints.down(500)]: {
      width: '80%',
    },
  },
}));

const TodoList = (props: PropsFromRedux) => {
  const {
    todos, addTask, removeTask, toggleTaskComplete,
  } = props;
  const classes = useStyles();
  const [tasks, setTasks] = useState(todos);
  const [query, setQuery] = useState('');

  const handleFilter = (isCompleted?: boolean) => {
    let filteredTodos = [...todos];
    if (query !== '') {
      filteredTodos = todos.filter((todo) => todo.text.includes(query));
    }
    if (typeof isCompleted !== 'undefined') {
      filteredTodos = filteredTodos.filter((todo) => todo.isCompleted === isCompleted);
    }
    setTasks(filteredTodos);
  };

  const handleSearch = (searchQuery: string) => {
    if (!searchQuery.trim().length && searchQuery !== '') return;
    const searchedTodos = todos.filter(
      (todo) => todo.text.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setTasks(searchedTodos);
    setQuery(searchQuery);
  };

  useEffect(() => {
    setTasks(todos);
  }, [todos]);

  return (
    <div className={classes.todoList}>
      <TodoInput addTodo={addTask} />
      <TodoSortBar
        handleFilter={handleFilter}
      />
      <TodoSearchBar
        handleSearch={handleSearch}
        query={query}
      />
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          removeTodo={removeTask}
          toggleComplete={toggleTaskComplete}
        />
      ))}
    </div>
  );
};

const mapState = (state: RootState) => ({ todos: state.todos });
const mapDispatch = {
  addTask: addTodo,
  removeTask: removeTodo,
  toggleTaskComplete: toggleComplete,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(TodoList);
