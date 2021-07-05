import React from 'react';
import { Input, InputAdornment, makeStyles } from '@material-ui/core';
import { Cancel, SearchRounded } from '@material-ui/icons';

const useStyles = makeStyles({
  searchBar: {
    display: 'flex',
    justifyContent: 'center',
    margin: '10px auto',
  },
  searchTextArea: {
    width: '90%',
  },
  cancelBtn: {
    cursor: 'pointer',
  },
});

const TodoSearchBar = (props: {
  handleSearch: Function,
  query: string,
}) => {
  const classes = useStyles();
  const { handleSearch, query } = props;

  return (
    <div className={classes.searchBar}>
      <Input
        className={classes.searchTextArea}
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        id="input-with-icon-adornment"
        endAdornment={(
          <InputAdornment position="end">
            {query && (
            <Cancel
              className={classes.cancelBtn}
              onClick={() => handleSearch('')}
            />
            ) }
            <SearchRounded />
          </InputAdornment>
            )}
      />
    </div>
  );
};

export default TodoSearchBar;
