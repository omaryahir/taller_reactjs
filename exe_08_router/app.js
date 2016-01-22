/*
 * Module dependencies
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';

let RouteHandler = Router.RouteHandler;

class App extends React.Component 
{

    render () 
    {
        return <div>
            <h1>App</h1>
            <ul>
            <li><Link to="/user">User</Link></li>
            <li><Link to="/about">About</Link></li>
            </ul>
        </div>
    }
}


class About extends React.Component
{
    render () 
    {
        return <div><App /><br /><p>Esto es about</p></div>
    }
}
class User extends React.Component
{
    render () 
    {
        return <div><App /><br /><p>Esto es user</p></div>
    }

    shouldComponentUpdate(newProps, newState)
    {
        if (this.props.user === newProps.user) return false;
        return true;
    }
}

const routes =  <Router>
                   <Route path="/" component = {App} />
                   <Route path="about" component = {About} />
                   <Route path="user" component = {User} />
                </Router>
                   

ReactDOM.render(routes, document.getElementById('container'));

