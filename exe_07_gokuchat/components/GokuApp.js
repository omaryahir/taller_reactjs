/*
 * module dependencies
 */

import React from 'react';
import GokuTable from './GokuTable';
import GokuChat from './GokuChat';
import uid from 'uid';
import $ from 'jquery';
import io from 'socket.io-client';

export default class GokuApp extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state = { messages: [], gokus: [] };
        this.onGrowl = this.onGrowl.bind(this);
        this.user = uid(10);
    }

    componentWillMount()
    {
       $.get('/gokus', (gokus) => {
        this.setState({ gokus: gokus });
       });
       this.socket = io('http://192.168.1.51:3000/');
       this.socket.on('message', (message) => 
       {
         if(message.user !== this.user) 
         {
            this.newMessage(message);
         }
       });
    }

    onGrowl(name)
    {
        let text = `${name}, ${name}!`;
        let message = {id: uid(), text: text, user: this.user };
        this.newMessage(message);
        this.socket.emit('message', message);
    }

    newMessage(message)
    {
        this.state.messages.push(message);
        let messages = this.state.messages;
        this.setState({ messages: messages });
    }

    render () 
    {
        if (this.state.gokus.length) {
            return <div className="gokuapp">
                <GokuTable gokurows={this.state.gokus} onGrowl={ this.onGrowl } />
                <GokuChat messages={this.state.messages} />
            </div>
        } else {
            return <p> Cargando ... </p>
        }
    }
}
