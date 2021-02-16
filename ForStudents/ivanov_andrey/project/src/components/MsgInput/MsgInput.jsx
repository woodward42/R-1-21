import React, {Component} from 'react';
import './style.scss';
import SendButton from '@components/SendButton';
import MessageText from '@components/MessageText';


export default class MsgInput extends Component {
  constructor(props){
      super(props);
      this.inputFieldRef = React.createRef();
  }
  
  
  componentDidMount() {
    this.inputFieldRef.current.focus();
  }
  componentDidUpdate() {
    this.inputFieldRef.current.focus();
  }

  handleAction = evt => {
    //у меня получилось добавить через Material компонент текстового воода, но у меня не получилось по нажатию КНОПКИ получить 
    //текущее value из инпута, отрисованного компонентом. Поэтому я оставил текстовый, т.к. застрял на этом

    let input = document.querySelector('.message-input__text');
    //let input = document.querySelector('#message-text');
    
    //короче, когда добавил кнопку через Material, там клик ловится то на спан, то на баттон, то еще на какой-то элемент кнопки
    //я так и не понял, как в целом передать сюда, что я кликнул по компоненту КНОПКА. как это сделать, подскажите?
    if (evt.keyCode == 13 || evt.target.tagName == 'BUTTON' || evt.target.innerText == 'ОТПРАВИТЬ'){
    
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
              ref = { this.inputFieldRef }
            />
            {/* <MessageText handleAction = { this.handleAction } /> */}
            <SendButton handleAction = { this.handleAction } />
          </div>; 
  }
}