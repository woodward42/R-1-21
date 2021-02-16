import React from 'react';
import './style.scss';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '800px',
    },
  },
}));

export default function BasicTextFields(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off" id="message-text">
        <TextField id="outlined-basic" label="Введите сообщение" variant="outlined" onKeyUp = { props.handleAction } />
    </form>
  );
}