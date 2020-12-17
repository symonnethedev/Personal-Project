import { CheckOutlined } from '@material-ui/icons';
import React from 'react'
import "./Login.css";
import { Link } from "react-router-dom";
import { Avatar } from '@material-ui/core';

export const Login = () => {
    return (
        <div className="login">
            <Link to='/Login'>
            <h1> login x </h1>
            </Link>
        </div>
    )
}

export default Login;