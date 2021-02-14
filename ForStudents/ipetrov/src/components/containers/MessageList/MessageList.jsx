import React, { Component } from 'react';
// import ReactDom from 'react-dom';

import './style.scss';
import Message from '@components/Message';
//stateFull


export default class MessageList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            messages: [
                { name: 'one', text: 'Hey!' }, 
                { name: 'one', text: 'How are you?' }
            ],  
        };
        this.lastmessage = '';
    }


    sendMessage = () => {
        var yourMessage = document.getElementById("messageSender").value;
        document.getElementById("messageSender").value = '';
        var regexp = /[а-яё]/i;
        this.setState({
            messages: [...this.state.messages, 
                {name: 'You', text: yourMessage},
                {name: 'Bot-Sociopath', text: regexp.test(yourMessage)?'Parle français?':'Ай донт спик инглиш'}
            ]
        });
    }


    render() {
        const messageInput = <input type="text" id="messageSender"></input>;
        const { messages } = this.state;
        const Messages = messages.map((el, i) => 
            <Message 
                key={ 'msg_' + i } 
                name={ el.name } 
                text={ el.text }
            />);
        
        return <div>
            {messageInput}
            <button onClick={ this.sendMessage }>add</button>
            { Messages }
        </div>;

    }
};

//stateLess
// const arr = [{ name: 'one', text: 'Hey!' }, { name: 'one', text: 'How are you?' }];

// export default () => {
//     const Messages = arr.map((el, i) => <Message 
//                                             key={ 'msg_' + i } 
//                                             name={ el.name } 
//                                             text={ el.text }
//                                         />);

//     return <div>
//         { Messages }
//     </div>;
// };