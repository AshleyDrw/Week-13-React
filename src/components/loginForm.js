import React from 'react';

export default class LoginForm extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form>
                            <div className="form-header">
                                <h3>
                                    Log In
                                </h3>
                            </div>
                            <div className="form-group">
                                <label>Username:</label>
                                <input type="email" class="form-control" placeholder="Enter Username"></input>
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <input type="password" class="form-control" placeholder="Enter Password"></input>
                            </div>
                            <button type="submit" class="btn btn-primary">Log In</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}