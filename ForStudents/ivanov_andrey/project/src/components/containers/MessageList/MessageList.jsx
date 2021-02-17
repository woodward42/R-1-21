import React, { Component } from 'react';
import './style.scss';
import Message from '@components/Message';
import MsgInput from '@components/MsgInput';

export default class MessageList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            messages: [
                { name: 'Собеседник', text: 'Привет! Это очень длинный текс для проверки верстки в компоненте!!!!11' }, 
                { name: 'Собеседник', text: 'Как дела?' }
            ],
            
        };
        
    }

    sendMessage = (msg) => {
        this.setState({
            messages: [...this.state.messages, { ...msg }]
        });
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
                 <MsgInput sendMessage = { this.sendMessage }/>
               </div>;

    }
};