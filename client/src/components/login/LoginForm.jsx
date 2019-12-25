import React, { Component } from "react";
import { connect } from "react-redux";

class Login extends Component {
    state = {};
    render() {
        return (
            <div className="ui container" style={{ marginTop: "2vh" }}>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="five wide column center aligned"></div>
                        <div className="six wide column left aligned">
                            <h1
                                className="ui header"
                                style={{ marginTop: "5vh" }}
                            >
                                Login
                            </h1>
                            <div className="ui divider"></div>

                            <div className="ui big form">
                                <div className="field">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" />
                                </div>
                                <div className="field">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" />
                                </div>
                                <div className="ui primary large button">
                                    Submit
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null)(Login);
