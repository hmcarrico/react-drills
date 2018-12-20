import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = { 
            username: '',
            password:''
         }
    }

    handleState = (key, val) => {
        this.setState({
            [key]: val
        })
    }

    hitDatButton = (e) => {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render() { 
        return ( 
            <div>
                <input onChange={(e) => this.handleState('username', e.target.value)}/>
                <input onChange={(e) => this.handleState('password', e.target.value)}/>
                <button onClick={this.hitDatButton}>Login</button>
            </div>
         );
    }
}
 
export default Login;