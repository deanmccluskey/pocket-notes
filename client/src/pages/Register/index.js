import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { registerUser } from "../../actions/authActions";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            password: "",
            password2: "",
            error: {}
        };
    }
    // componentDidUpdate(nextProps) {
    //     if (nextProps.error) {
    //         this.setState({
    //             error: nextProps.error
    //         });
    //     }
    // }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        this.props.registerUser(newUser, this.props.history);
    };
    render() {
        const { error } = this.state;
        return (
            <Container>
                <Typography variant="h3">Register</Typography>

                <form noValidate onSubmit={this.onSubmit}>
                    <br></br>
                    <div className="input-field">
                        <input
                            onChange={this.onChange}
                            value={this.state.firstName}
                            error={error.firstName}
                            id="firstName"
                            name="firstName"
                            type="text"
                        />
                        <label htmlFor="firstName"> First Name</label>
                    </div>
                    <br></br>
                    <div className="input-field ">
                        <input
                            onChange={this.onChange}
                            value={this.state.lastName}
                            error={error.lastName}
                            id="lastName"
                            name="lastName"
                            type="text"
                        />
                        <label htmlFor="lastName"> Last Name</label>
                    </div>
                    <br></br>
                    <div className="input-field ">
                        <input
                            onChange={this.onChange}
                            value={this.state.email}
                            error={error.email}
                            id="email"
                            type="email"
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                    <br></br>
                    <div className="input-field ">
                        <input
                            onChange={this.onChange}
                            value={this.state.password}
                            error={error.password}
                            id="password"
                            type="password"
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                    <br></br>
                    <div className="input-field ">
                        <input
                            onChange={this.onChange}
                            value={this.state.password2}
                            error={error.password2}
                            id="password2"
                            type="password"
                        />
                        <label htmlFor="password2">Confirm Password</label>
                    </div>
                    <br></br>
                    <div className="" style={{ paddingLeft: "11.250px" }}>
                        <button
                            style={{
                                width: "150px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                                marginTop: "1rem"
                            }}
                            type="submit"
                            className=""
                        >
                            Sign up
                        </button>
                    </div>
                </form>
            </Container>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    error: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    error: state.error
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));