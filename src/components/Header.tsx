import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  header: {
    width: '100%',
    backgroundColor: '#EDE026',
    display: 'flex',
  },
  title: {
    color: '#171718',
    margin: '0 auto',
    padding: '15px 0',
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Typography className={classes.title} variant="h3" gutterBottom>
        ToDoList App
      </Typography>
    </div>
  );
};

export default Header;
