import React from 'react';
import { Link, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  footer: {
    width: '100%',
    height: '7%',
    backgroundColor: '#EDE026',
    position: 'fixed',
    bottom: '0',
  },
  author: {
    color: '#171718',
    position: 'absolute',
    bottom: '0',
    right: '25px',
    fontSize: '20px',
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Typography className={classes.author}>
        <Link href="https://fenomen-alex.github.io/AlexCV/" rel="noreferrer" target="_blank">by Alex Fomenko</Link>
      </Typography>
    </div>
  );
};

export default Footer;
