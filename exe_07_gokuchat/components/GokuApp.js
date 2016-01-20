/*
 * module dependencies
 */

import React from 'react';
import GokuTable from './GokuTable';
import GokuChat from './GokuChat';

export default class GokuApp extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state = { messages: [] };
        this.onGrowl = this.onGrowl.bind(this);
    }

    onGrowl(name)
    {
        let text = `${name}, ${name}!`;
        this.state.messages.push({ text: text  });
        let messages = this.state.messages;
        this.setState({ messages: messages });
    }

    render () 
    {
        let gokus = [
            { number:1, name: 'Super Saiyan 1' },
            { number:2, name: 'Super Saiyan 2' },
            { number:3, name: 'Super Saiyan 3' },
            { number:4, name: 'Super Saiyan 4' },
        ];

        return <div className="gokuapp">
            <GokuTable gokurows={gokus} onGrowl={ this.onGrowl } />
            <GokuChat messages={this.state.messages} />
        </div>
    }
}
