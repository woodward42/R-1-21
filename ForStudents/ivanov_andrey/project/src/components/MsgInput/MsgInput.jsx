import React, {Component} from 'react';
import './style.scss';
import { TextField, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(8),
    padding: theme.spacing(4),
  },
});

class MsgInput extends Component {
  constructor(props){
      super(props);
      this.inputFieldRef = React.createRef();
      this.state = {
        name: 'Я',
        text: ''
      }
  }
  
  onSubmit = evt => {
    evt.preventDefault();

    const { sendMessage } = this.props;
    sendMessage(this.state);
  }

  onChange = ({ target }) => {
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  };

  render(){
    const { name, text } = this.state;

    return (
      <form className="message-input__form" onSubmit={ this.onSubmit }>
        <TextField
          name="text"
          label="Введите сообщение..."
          onChange={ this.onChange }
          value={ text }
          autoComplete="off" 
          fullWidth 
          autoFocus 
          variant="outlined"
        />
        <button type="submit" className="message-input__btn">Отправить сообщение</button>
      </form>
    )
  }
}

export default withStyles(styles)(MsgInput);