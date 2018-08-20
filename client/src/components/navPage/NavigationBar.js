import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {logoutRequest} from '../../actions/loginActions';
import './Navbar.css';

class NavigationBar extends Component {
    static propTypes = {
        userLogin: PropTypes.object.isRequired,
        logoutRequest: PropTypes.func.isRequired
    };

    logoutRequest = (e) => {
        e.preventDefault();
        this.props.logoutRequest();
    };

    render() {
        const {isAuthenticated, user} = this.props.userLogin;
        console.log(user);

        const userLinks = (
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link">Welcome {user.username}</a>
                    </li>
                </ul>
                <ul className="navbar-nav mt-md-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/allWebResources/upload">AllNetUpLoad</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/resources/upload">UpLoad</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">MyWallet</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={this.logoutRequest}>Logout</a>
                    </li>
                </ul>
            </div>

        );

        const guestLinks = (
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup">Sign Up</Link>
                    </li>
                </ul>
                <ul className="navbar-nav mt-md-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/allWebResources/upload">AllNetUpLoad</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/resources/upload">UpLoad</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">MyWallet</Link>
                    </li>
                </ul>
            </div>
        );

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">Education Website</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample05">
                        {isAuthenticated ? userLinks : guestLinks}
                    </div>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userLogin: state.userLogin
    }
};

export default connect(mapStateToProps, {logoutRequest})(NavigationBar);