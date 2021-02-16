import React, {Component} from 'react';
import './style.scss';


export default class MsgInput extends Component {
  constructor(props){
      super(props);
  }

  handleAction = evt => {
    let input = document.querySelector('.message-input__text');

    if (evt.keyCode == 13 || evt.target.tagName == 'BUTTON'){
      this.props.parentCallback(input.value); 
      input.value = '';
    }
  }
  
  render(){
    return <div className="message-input">
            <input 
              type="text" 
              className="message-input__text" 
              onKeyUp = { this.handleAction }
            />
            <button 
              onClick = { this.handleAction } 
              className="message-input__btn"
            >Отправить сообщение</button>
          </div>; 
  }
}