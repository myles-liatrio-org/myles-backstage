import React from 'react';
import { makeStyles } from '@material-ui/core';
import smallcow from './smallcow.png';

const useStyles = makeStyles({
  svg: {
    width: 'auto',
    height: 28,
  },
  img: {
    width: 'auto',
    height: 100,
  },
  path: {
    fill: '#7df3e1',
  },
});

const LogoIcon = () => {
  const classes = useStyles();

  return (
    //import image smallcow.png
    <img className={classes.img} src={smallcow} alt="Small Cow" />

  );
};

export default LogoIcon;
