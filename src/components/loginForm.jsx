import React, { Component } from 'react'

class LoginForm extends Component {
    render() { 
        return (
        <div className="container">
        <form>
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>

    );
    }
}
 
export default LoginForm;