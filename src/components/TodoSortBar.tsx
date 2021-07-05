import { Button, ButtonGroup, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  sortBar: {
    display: 'flex',
    justifyContent: 'center',
    margin: '10px auto',
  },
});

const TodoSortBar = (props:
  { handleFilter: Function }) => {
  const { handleFilter } = props;
  const classes = useStyles();

  return (
    <ButtonGroup
      className={classes.sortBar}
      variant="text"
      color="primary"
      aria-label="text primary button group"
    >
      <Button onClick={() => handleFilter()}>All</Button>
      <Button onClick={() => handleFilter(false)}>Active</Button>
      <Button onClick={() => handleFilter(true)}>Completed</Button>
    </ButtonGroup>
  );
};

export default TodoSortBar;
