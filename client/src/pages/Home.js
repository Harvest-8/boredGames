import React, { Component } from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';

export class Home extends Component {
    render() {
        return (
            <div className="background">
                <div className="conatain">
                    <h1 className="title">boredGames</h1>
                    <ul className="buttnCont">
                        <li className="buttn" id="log">
                            <Link to="/login">Login</Link>
                            {/*links to login page*/}
                        </li>
                        <li className="buttn" id="sign">
                            <Link to="/signup">Sign Up</Link>
                            {/*links to sign up page*/}
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Home;
