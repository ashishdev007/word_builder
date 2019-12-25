import React, { Component } from "react";
import { connect } from "react-redux";

class Login extends Component {
    state = {
        username: null,
        password: null,
        errors: { username: false, password: false }
    };

    onSubmit = event => {
        event.preventDefault();
        var { username, password } = this.state;
        if (!username || !password) {
            var errors = { username: false, password: false };
            if (!username) {
                errors.username = true;
            }

            if (!password) {
                errors.password = true;
            }

            this.setState({ errors: errors });
        } else {
            console.log("Success");
        }
    };

    handleInputChange = event => {
        const target = event.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        var errors = this.state.errors;

        if (value === "") {
            errors[name] = true;
            this.setState({ errors: errors });
        } else {
            errors[name] = false;
            this.setState({
                [name]: value,
                errors: errors
            });
        }
    };

    errorClass = element => {
        if (this.state.errors[element]) {
            return "field error";
        }

        return "field";
    };

    buttonClass = () => {
        var errors = this.state.errors;
        if (errors.username || errors.password) {
            return "ui primary large button disabled";
        }
        return "ui primary large button";
    };

    showWarning = element => {
        if (this.state.errors[element]) {
            return (
                <div className="ui up pointing red basic label">
                    Please enter a valid {element}!
                </div>
            );
        }
    };

    render() {
        console.log(this.state);
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

                            <form
                                className="ui big form"
                                onSubmit={this.onSubmit}
                            >
                                <div className={this.errorClass("username")}>
                                    <label htmlFor="username">Username</label>
                                    <input
                                        type="text"
                                        name="username"
                                        onFocus={() => {
                                            this.setState({ utouch: true });
                                        }}
                                        onChange={this.handleInputChange}
                                    />
                                    {this.showWarning("username")}
                                </div>
                                <div className={this.errorClass("password")}>
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        onFocus={() => {
                                            this.setState({ ptouch: true });
                                        }}
                                        onChange={this.handleInputChange}
                                    />
                                    {this.showWarning("password")}
                                </div>
                                <button
                                    className={this.buttonClass()}
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null)(Login);
