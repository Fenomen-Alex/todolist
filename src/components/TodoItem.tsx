import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { Checkbox, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { TodoType } from '../types/types';

const useStyles = makeStyles({
  todoItem: {
    display: 'flex',
    alignItems: 'center',
    margin: '5px',
    border: '#D5D9D9 2px solid',
    padding: '0 10px',
  },
  todoItemText: {
    flex: 'auto',
    fontSize: '24px',
    color: '#171718',
  },
  todoItemCheckBox: {
    alignContent: 'end',
  },
  todoItemBtn: {
    height: '50%',
  },
});

const TodoItem = (props: { task: TodoType, removeTodo: Function, toggleComplete: Function }) => {
  const { task, removeTodo, toggleComplete } = props;
  const classes = useStyles();

  return (
    <div className={classes.todoItem}>
      <p className={classes.todoItemText}>{task.text}</p>
      <Checkbox
        className={classes.todoItemCheckBox}
        checked={task.isCompleted}
        onChange={() => toggleComplete(task.id)}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <Fab
        className={classes.todoItemBtn}
        color="secondary"
        aria-label="delete"
        onClick={() => removeTodo(task.id)}
        size="small"
      >
        <DeleteIcon />
      </Fab>
    </div>
  );
};

export default TodoItem;
