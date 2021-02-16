import React, { Component } from 'react';
import './style.scss';
import Message from '@components/Message';
import MsgInput from '@components/MsgInput';

export default class MessageList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            messages: [
                { name: 'Андрей', text: 'Привет! Это очень длинный текс для проверки верстки в компоненте!!!!11' }, 
                { name: 'Андрей', text: 'Как дела?' }
            ],
            text: ''
        };
    }

    sendMessage = () => {
        this.setState({
            messages: [...this.state.messages, {
                name: 'Аноним', text: this.state.text
            }]
        });
    }    

    handleCallback = (childData) => {
        this.setState({text: childData});
    }

    componentDidUpdate() {
        //если текст не пустой, то мы только что обновили стэйт и из MsgInput приняли туда текст + обновили стэйт
        //запускаем отправку сообщения
        if (this.state.text !== ''){
            this.sendMessage();
            this.setState({text: ''});
        }   
    }

    render() {
        const { messages } = this.state;
        const Messages = messages.map((el, index) => 
            <Message 
                key={ 'msg_' + index } 
                name={ el.name } 
                text={ el.text }
            />);
        
        return <div className="message-list">
                 { Messages }
                 <MsgInput parentCallback = { this.handleCallback }/>
               </div>;

    }
};