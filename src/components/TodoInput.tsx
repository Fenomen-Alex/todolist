import React, { useState } from 'react';
import { Fab, makeStyles, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
  todoInputBox: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
  },
  todoTextArea: {
    width: '75%',
  },
});

const TodoInput = (props: {addTodo: Function}) => {
  const [text, setText] = useState('');
  const { addTodo } = props;
  const classes = useStyles();
  const handleClick = () => {
    addTodo(Date.now(), text, false);
    setText('');
  };
  const validateInput = (): boolean => text !== '' && !text.trim().length;

  return (
    <div className={classes.todoInputBox}>
      <TextField
        className={classes.todoTextArea}
        id="standard-basic"
        label="New Task"
        value={text}
        error={validateInput()}
        helperText={validateInput() && 'Incorrect entry.'}
        onChange={(e) => setText(e.target.value)}
      />
      <Fab
        color="primary"
        aria-label="add"
        onClick={() => handleClick()}
        disabled={!text.trim().length}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default TodoInput;
